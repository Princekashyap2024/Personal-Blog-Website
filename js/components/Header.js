// Header component functionality
export class Header {
    constructor() {
      this.header = document.querySelector('.header');
      this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      this.navLinks = document.querySelector('.nav-links');
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
      document.addEventListener('click', (e) => this.handleClickOutside(e));
      this.setupSmoothScroll();
    }
  
    toggleMobileMenu() {
      this.navLinks.classList.toggle('active');
    }
  
    handleClickOutside(e) {
      if (!e.target.closest('.nav-container')) {
        this.navLinks.classList.remove('active');
      }
    }
  
    setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.navLinks.classList.remove('active');
          }
        });
      });
    }
  }