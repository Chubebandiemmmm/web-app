// Toan Lop 9
const calculatorForm = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById('num1').value);
  const operator = document.getElementById('operator').value;
  const num2 = parseFloat(document.getElementById('num2').value);

  let result;

  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Phép tính không hợp lệ';
  }

  const resultMessage = `Kết quả: ${result}`;
  resultDiv.textContent = resultMessage;
});

// BACK
function goBack() {
  window.history.back();
}
