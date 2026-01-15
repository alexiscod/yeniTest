const startBtn = document.getElementById('startBtn');
const heartsContainer = document.querySelector('.hearts');
const typewriter = document.getElementById('typewriter');
const finalMsg = document.getElementById('finalMsg');
const bgMusic = document.getElementById('bgMusic');

const messageText = "Hola mi amor... ❤️";

// Typewriter effect
function typeWriter(text, i = 0) {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 70);
  } else {
    setTimeout(() => finalMsg.classList.add('show'), 500);
  }
}

// Background hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 16) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

// Start experience
startBtn.addEventListener('click', () => {
  startBtn.style.display = "none";

  // Start music
  bgMusic.play().catch(() => {});

  // Show and type message
  typewriter.classList.add('show');
  typeWriter(messageText);
});
