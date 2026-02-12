'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

import type { Project } from '@/type/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt ?? project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {project.featured && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Icon name="StarIcon" size={14} />
            <span>Featured</span>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'completed'
              ? 'bg-trust text-white' :'bg-warning text-white'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center space-x-2 text-white text-sm">
            <Icon name="ClockIcon" size={16} />
            <span>{project.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
              {project.category}
            </span>
            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-colors duration-250"
                aria-label="View GitHub repository"
              >
                <Icon name="CodeBracketIcon" size={18} />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-colors duration-250"
                  aria-label="View live demo"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-250">
            {project.title}
          </h3>
        </div>

        <p className="text-text-secondary text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {project.metrics?.slice(0, 2).map(metric => (
            <div key={metric.label} className="text-center">
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-text-secondary">{metric.label}</div>
            </div>
          ))}
        </div>

        <button className="w-full py-2 bg-muted text-text-primary rounded-md text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-250 flex items-center justify-center space-x-2">
          <span>View Details</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;