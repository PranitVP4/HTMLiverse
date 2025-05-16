// ===== Chapter 2 JS =====

// Wait till DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('runBtn');
  const htmlInput = document.getElementById('htmlInput');
  const outputFrame = document.getElementById('outputFrame');

  runBtn.addEventListener('click', () => {
    // Get code from textarea
    const code = htmlInput.value;

    // Write code inside iframe to show output
    outputFrame.srcdoc = code;
  });
});
