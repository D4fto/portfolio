import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { getTechIcon } from '../utils/helpers';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card"
      onClick={onClick}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ backgroundImage: `url(${project.imageUrl})` }}
    >
      <div className="project-overlay" />
      <div className="project-content">
        <h2>{project.name}</h2>
        <span className="project-techs">
          {project.technologies.map((tech, index) => (
            <motion.i 
              key={index}
              className={`ti ${getTechIcon(tech)}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
