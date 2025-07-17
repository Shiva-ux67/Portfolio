
    
  document.addEventListener('DOMContentLoaded', () => {
    const aboutPara = document.querySelector('.about-text p');

    if (aboutPara) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutPara.style.opacity = '1';
            aboutPara.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.6
      });

      observer.observe(aboutPara);
    }
  });

const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when any link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });

const circles = document.querySelectorAll('.circle');
let animated = false;

function animateCircles() {
  if (animated) return;

  circles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    let current = 0;

    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
        const color = circle.classList.contains('blue') ? '#2196f3' :
                      circle.classList.contains('yellow') ? '#fdd835' :
                      circle.classList.contains('teal') ? '#00e5ff' :
                      circle.classList.contains('green') ? '#0df005ff' :
                      '#ff9800';

        circle.style.background = `conic-gradient(${color} ${current}%, #444 ${current}%)`;
        circle.querySelector('.percent').textContent = `${current}%`;
      }
    }, 20);
  });

  animated = true;
}

window.addEventListener('scroll', () => {
  const section = document.getElementById('skills');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateCircles();
  }
});


