// Hidden unlock widget -- a small lock glyph pinned to the top-right
// corner, in line with the app header/nav bar. Click it, type the code,
// Enter: pulls the latest progress pushed from any browser (see
// persistence.js's pushRemote, and /api/progress) into localStorage under
// persistence.js's SAVE_KEY and reloads. This is obfuscation, not real
// security -- the code lives in this file, readable by anyone who opens
// dev tools.
//
// Fixed to the viewport (not appended inside .app-header) deliberately --
// main.js's rerender() does root.innerHTML = html on every render, which
// would wipe out any node placed inside #root/.app-header. Living on
// document.body and lining up its own top offset with the header's padding
// is what keeps it visually "in the nav bar" without needing to survive
// that wipe.
const SAVE_KEY = 'an-nahw-save-data';
const CODE = '2';

// Same lock glyph render.js draws for locked modules/lessons (see its
// `ICONS.lock` path), reused here so it reads as part of the same icon set.
const LOCK_SVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`;

const dot = document.createElement('button');
dot.type = 'button';
dot.setAttribute('aria-label', '');
dot.tabIndex = -1;
dot.innerHTML = LOCK_SVG;
dot.style.cssText = [
  'position:fixed',
  'top:24px',
  'right:18px',
  'width:20px',
  'height:20px',
  'display:flex',
  'align-items:center',
  'justify-content:center',
  'border-radius:4px',
  'border:none',
  'padding:0',
  'background:none',
  'color:rgba(120,100,70,0.35)',
  'cursor:default',
  'z-index:99999',
].join(';');

let input = null;

function closeInput() {
  if (input) {
    input.remove();
    input = null;
  }
}

dot.addEventListener('click', () => {
  if (input) return;
  input = document.createElement('input');
  input.type = 'password';
  input.maxLength = 6;
  input.autocomplete = 'off';
  input.style.cssText = [
    'position:fixed',
    'top:25px',
    'right:42px',
    'width:36px',
    'height:15px',
    'font-size:11px',
    'z-index:99999',
    'border:1px solid rgba(120,100,70,0.3)',
    'border-radius:3px',
    'background:#fff',
    'padding:0 4px',
  ].join(';');
  document.body.appendChild(input);
  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (input.value.trim() === CODE) {
        fetch(`/api/progress?code=${CODE}`)
          .then((r) => r.json())
          .then((data) => {
            if (data) {
              localStorage.setItem(SAVE_KEY, JSON.stringify(data));
              location.reload();
            } else {
              closeInput();
            }
          })
          .catch(() => closeInput());
      } else {
        closeInput();
      }
    } else if (e.key === 'Escape') {
      closeInput();
    }
  });
  input.addEventListener('blur', closeInput);
});

document.body.appendChild(dot);
