// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    radius: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    speed: Math.random() * 3 + 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(draw);
}
draw();

// Auto-Rotating 3D Gallery (Increased speed)
let angle = 0;
const carousel = document.querySelector('.carousel');
const totalImages = document.querySelectorAll('.carousel-img').length;

function rotateGallery() {
  angle += 1;  // Increased increment (faster rotation)
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Adjusted speed: Rotating faster
setInterval(rotateGallery, 30);  // Faster speed by reducing the interval to 30ms
