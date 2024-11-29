// Project grid component
export class ProjectGrid {
    constructor() {
      this.projectGrid = document.querySelector('.project-grid');
      this.projects = [
        {
          title: 'VictoryVault',
          description: 'A comprehensive esports platform for tournament management and community engagement.',
          tags: ['React', 'Node.js', 'MongoDB', 'WebSocket']
        },
        {
          title: 'Dropshipping Website',
          description: 'Full-stack e-commerce solution with advanced features and analytics.',
          tags: ['Next.js', 'Express', 'PostgreSQL', 'Stripe']
        },
        {
          title: 'C Programming Portfolio',
          description: 'Collection of fundamental programming concepts and implementations.',
          tags: ['C', 'Data Structures', 'Algorithms']
        }
      ];
      this.render();
    }
  
    createProjectCard(project) {
      return `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
    }
  
    render() {
      this.projectGrid.innerHTML = this.projects.map(project => 
        this.createProjectCard(project)
      ).join('');
    }
  }