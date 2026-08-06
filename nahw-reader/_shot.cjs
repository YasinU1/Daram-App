const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
  const errors = [];
  page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message));
  await page.goto('http://localhost:8000/learn/learn.html', { waitUntil: 'networkidle' });

  const clicked19 = await page.evaluate(() => {
    const spans = Array.from(document.querySelectorAll('.chap-btn span, button span'));
    const chapBtn = spans.find(s => s.textContent.trim().startsWith('19 '));
    if (!chapBtn) return 'CHAPTER NOT FOUND';
    chapBtn.closest('button').click();
    return chapBtn.textContent;
  });
  console.log('expanded chapter:', clicked19);
  await page.waitForTimeout(300);
  const clickedSub = await page.evaluate(() => {
    const spans = Array.from(document.querySelectorAll('.chap-btn span'));
    const chapBtn = spans.find(s => s.textContent.trim().startsWith('19 '));
    if (!chapBtn) return 'CHAPTER NOT FOUND (2nd pass)';
    const wrap = chapBtn.closest('.chap-btn').parentElement;
    const sub = wrap.querySelector('.sub');
    if (!sub) return 'NO SUB IN WRAP';
    sub.click();
    return sub.textContent;
  });
  console.log('clicked sub-section:', clickedSub);
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/private/tmp/claude-502/-Users-sayedmuhammadyasin-usman-Developer-Daram-drag-and-drop-app/2525abc9-db9a-42fc-b18f-2d6220501f5b/scratchpad/trial-card1.png', fullPage: true });

  // advance to card 2 (has 5 points/5 examples) to check the box with many entries
  await page.click('.actionbar .btn.primary').catch(()=>{});
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/private/tmp/claude-502/-Users-sayedmuhammadyasin-usman-Developer-Daram-drag-and-drop-app/2525abc9-db9a-42fc-b18f-2d6220501f5b/scratchpad/trial-card2.png', fullPage: true });

  console.log('FINAL ERRORS', errors);
  await browser.close();
})();
