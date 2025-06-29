// Get references to the textareas and output iframe
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const outputFrame = document.getElementById('outputFrame');

function updateOutput() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  const srcDoc = `${html}\n${css}\n${js}`;
  outputFrame.srcdoc = srcDoc;
}

htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);

// Initialize output
updateOutput(); 