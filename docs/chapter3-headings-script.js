// ===== Chapter 3 JS =====

document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('runBtn');
  const htmlInput = document.getElementById('htmlInput');
  const outputFrame = document.getElementById('outputFrame');

  runBtn.addEventListener('click', () => {
    const code = htmlInput.value;
    outputFrame.srcdoc = code;
  });
});
