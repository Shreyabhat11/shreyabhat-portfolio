'use client';

import ProjectCard from './ProjectCard';

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

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
          <svg className="w-10 h-10 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">No projects found</h3>
        <p className="text-text-secondary">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;