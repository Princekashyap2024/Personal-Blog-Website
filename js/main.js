import { Header } from './components/Header.js';
import { ThemeToggle } from './components/ThemeToggle.js';
import { ProjectGrid } from './components/ProjectGrid.js';
import { Newsletter } from './components/Newsletter.js';
import { ScrollAnimator } from './utils/animations.js';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  new Header();
  new ThemeToggle();
  new ProjectGrid();
  new Newsletter();
  new ScrollAnimator();
  
  // Update copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();
});