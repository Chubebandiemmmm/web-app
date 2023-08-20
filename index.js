const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('open-sidebar');
});


function changeBackgroundColor() {
  const randomColor = getRandomColor();
  sidebar.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Thay đổi màu nền mỗi 2 giây
setInterval(changeBackgroundColor, 1000);

// script.js
function goBack() {
  window.history.back();
}

// script.js
const loadingOverlay = document.querySelector('.loading-overlay');

function showLoading() {
  loadingOverlay.style.display = 'flex';
}

function hideLoading() {
  loadingOverlay.style.display = 'none';
}

// Hiển thị loading khi chuyển trang
window.addEventListener('beforeunload', showLoading);

// Ẩn loading khi trang đã tải xong
window.addEventListener('load', hideLoading);
