'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
}

interface Metric {
  label: string;
  value: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  methodology: string;
  outcomes: string[];
  metrics: Metric[];
  technologies: Technology[];
  image: string;
  alt: string;
  githubUrl: string;
  liveUrl?: string;
  duration: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const groupedTechnologies = project.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal"
      ></div>

      <div className="relative bg-background rounded-lg shadow-modal max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250 focus-ring"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} />
        </button>

        <div className="relative h-80 overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'completed'
                  ? 'bg-trust text-white' :'bg-warning text-white'
              }`}>
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Icon name="StarIcon" size={14} />
                  <span>Featured</span>
                </span>
              )}
            </div>
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <Icon name="ClockIcon" size={16} />
                <span>{project.duration}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="CodeBracketIcon" size={16} />
                <span>{project.technologies.length} Technologies</span>
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <p className="text-lg text-text-primary leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map(metric => (
              <div key={metric.label} className="bg-card rounded-lg p-4 text-center shadow-subtle">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-2">
                  <Icon name={metric.icon as any} size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-xs text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                <span>Challenge</span>
              </h3>
              <p className="text-text-secondary leading-relaxed bg-card p-4 rounded-lg">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="BeakerIcon" size={20} className="text-accent" />
                <span>Methodology</span>
              </h3>
              <p className="text-text-secondary leading-relaxed bg-card p-4 rounded-lg">
                {project.methodology}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} className="text-trust" />
                <span>Key Outcomes</span>
              </h3>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-card p-4 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-trust/10 rounded-full flex items-center justify-center mt-0.5">
                      <Icon name="CheckIcon" size={14} className="text-trust" />
                    </div>
                    <span className="text-text-secondary">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center space-x-2">
                <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
                <span>Technology Stack</span>
              </h3>
              <div className="space-y-4">
                {Object.entries(groupedTechnologies).map(([category, techs]) => (
                  <div key={category} className="bg-card p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="TagIcon" size={20} className="text-accent" />
                <span>Project Tags</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-250 focus-ring shadow-subtle hover:shadow-card"
            >
              <Icon name="CodeBracketIcon" size={20} />
              <span>View on GitHub</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-250 focus-ring shadow-subtle hover:shadow-card"
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;