import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built using React to showcase my work and skills.',
    link: 'https://github.com/AmeeraShara',
  },
  {
    title: 'Todo App',
    description: 'A task manager app that stores data locally in the browser using JavaScript.',
    link: 'https://github.com/yourusername/todo-app',
  },
  {
    title: 'Payroll Management System',
    description: 'A full-stack payroll system using Laravel, PHP, and MySQL with role-based access.',
    link: 'https://github.com/AmeeraShara/payroll-system',
  },
  {
    title: 'Library Management System',
    description: 'A Java-based system applying OOP concepts to manage books and borrowing records.',
    link: 'https://github.com/AmeeraShara/library-system',
  },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
