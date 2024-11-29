// Newsletter form component
export class Newsletter {
    constructor() {
      this.form = document.getElementById('newsletter-form');
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      // Here you would typically send this to a backend service
      alert(`Thank you for subscribing with: ${email}`);
      e.target.reset();
    }
  }