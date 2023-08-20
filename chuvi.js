// TÍCH CHU VI HÌNH CHỮ NHẬT 
const rectangleForm = document.getElementById('rectangle-form');
const resultDiv = document.getElementById('result');

rectangleForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);

  const perimeter = 2 * (width + height);
  const area = width * height;

  const resultMessage = `Chu vi: ${perimeter.toFixed(2)} | Diện tích: ${area.toFixed(2)}`;
  resultDiv.textContent = resultMessage;
});

// script.js
function goBack() {
  window.history.back();
}

