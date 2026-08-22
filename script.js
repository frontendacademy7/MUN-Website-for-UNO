 const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Slider
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('sliderDots');
  let current = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');

  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }
  document.getElementById('nextBtn').addEventListener('click', next);
  document.getElementById('prevBtn').addEventListener('click', prev);
  const sliderEl = document.querySelector('.slider');
  sliderEl.addEventListener('mouseenter', () => clearInterval(timer));
  sliderEl.addEventListener('mouseleave', resetTimer);
  resetTimer();

  // Registration form (front-end only demo)

  // Footer year
  document.getElementById('year').textContent = '© ' + new Date().getFullYear() + ' UNO Society. All rights reserved.';

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));