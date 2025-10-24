import React from 'react';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Forge Website',
    description: 'Website for RPI makerspace',
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Project+1',
    demoUrl: '#',
    githubUrl: 'https://github.com/BreadInvasion/forge-new-website',
    technologies: ['React', 'TypeScript', 'CSS', 'HTML']
  },
  {
    id: '2',
    title: 'Night Night',
    description: '',
    image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Project+2',
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'This project highlights your ability to work with complex data and create intuitive user interfaces.',
    image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Project+3',
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['Vue.js', 'Python', 'PostgreSQL']
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'Your latest project showcasing cutting-edge technologies and best practices in software development.',
    image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Project+4',
    demoUrl: '#',
    githubUrl: '#',
    technologies: ['Next.js', 'GraphQL', 'Docker']
  }
];

const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've been working on</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      aria-label="View Demo"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label="View Code"
                    >
                      <GitHubLogoIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.technologies && (
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;