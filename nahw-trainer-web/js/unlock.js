// Hidden unlock widget -- a near-invisible dot in the bottom-right corner.
// Click it, type the code, Enter: loads the ported desktop progress (see
// desktop-save.js) into localStorage under persistence.js's SAVE_KEY and
// reloads. This is obfuscation, not real security -- the save data and the
// code both live in this file, readable by anyone who opens dev tools.
import { DESKTOP_SAVE } from './desktop-save.js';

const SAVE_KEY = 'an-nahw-save-data';
const CODE = '2';

const dot = document.createElement('button');
dot.type = 'button';
dot.setAttribute('aria-label', '');
dot.tabIndex = -1;
dot.style.cssText = [
  'position:fixed',
  'bottom:10px',
  'right:10px',
  'width:9px',
  'height:9px',
  'border-radius:50%',
  'border:none',
  'padding:0',
  'background:rgba(120,100,70,0.16)',
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
    'bottom:8px',
    'right:24px',
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
        localStorage.setItem(SAVE_KEY, JSON.stringify(DESKTOP_SAVE));
        location.reload();
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
