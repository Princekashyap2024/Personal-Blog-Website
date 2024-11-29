// Theme toggle functionality
export class ThemeToggle {
    constructor() {
      this.themeToggle = document.querySelector('.theme-toggle');
      this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      this.setupEventListeners();
      this.initializeTheme();
    }
  
    getCurrentTheme() {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (this.prefersDarkScheme.matches ? 'dark' : 'light');
    }
  
    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  
    setupEventListeners() {
      this.themeToggle.addEventListener('click', () => {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
      });
  
      this.prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        this.setTheme(newTheme);
      });
    }
  
    initializeTheme() {
      this.setTheme(this.getCurrentTheme());
    }
  }