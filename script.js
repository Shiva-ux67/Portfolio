
    
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


