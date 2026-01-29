// ================================
    // 1. Animasi masuk saat di-scroll
    // ================================
function revealOnScroll() {
  const elements = document.querySelectorAll("p");
  const trigger = window.innerHeight - 100
  
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


    // ================================
    // 2. Fungsi pembuka kartu
    // ================================
function openCard() {
  const box = document.getElementById("openBox");
  box.style.opacity = "0";
      setTimeout(() => {
  box.style.display = "none";
      }, 400);

  playMusic();
}


    // ================================
    // 3. Pemutar musik
    // ================================
let audio;
let isMusicOn = true;

function playMusic() {
  audio = new Audio("sound/laguSempurna.mp3"); 
  audio.loop = true;
  audio.volume = 0.6;
  audio.play();
}

function toggleMusic() {
  const btn = document.getElementById("audioControl");

  if (!audio) return;

  if (isMusicOn) {
    audio.pause();
    btn.textContent = "🔇";
  } else {
    audio.play();
    btn.textContent = "🔊";
  }

  isMusicOn = !isMusicOn;
}


    // ================================
    // 4. Fungsi love click
    // ================================
const message = "Selamat ulang tahun sayangku cantikku osaa. Semoga rezekinya semakin lancar. Semoga apa yang diharapkan dikabulkan dengan Allah. Semoga sukses terus. Semoga osa semakin menjadi lebih baik terus dari sebelumnya. Mohon maaf yaa osa ude banyak salahnya. Semoga kita sama sama terus yaaa sayangku, Bismillahirrahmanirrahim. lopyu sayangku osa ❤️❤️❤️";

let typingIndex = 0;
let typingInterval;

function loveClick() {
  document.getElementById("popupOverlay").style.display = "flex";
  document.getElementById("typingText").textContent = "";
  typingIndex = 0;

  typingInterval = setInterval(typeEffect, 60);
}

function typeEffect() {
  const textElement = document.getElementById("typingText");

  if (typingIndex < message.length) {
    textElement.textContent += message.charAt(typingIndex);
    typingIndex++;
  } else {
    clearInterval(typingInterval);
  }
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  clearInterval(typingInterval);
}