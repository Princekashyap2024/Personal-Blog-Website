// Animation utilities
export class ScrollAnimator {
    constructor() {
      this.observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
      };
      
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        this.observerOptions
      );
      
      this.initializeObserver();
    }
  
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          this.observer.unobserve(entry.target);
        }
      });
    }
  
    initializeObserver() {
      document.querySelectorAll('section').forEach(section => {
        this.observer.observe(section);
      });
    }
  }