const heartsContainer = document.querySelector('.hearts');
const message = document.querySelector('.message');
const startBtn = document.getElementById('startBtn');
const container = document.querySelector('.container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 16) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  container.classList.add('show');

  setInterval(createHeart, 300); // Start hearts
});