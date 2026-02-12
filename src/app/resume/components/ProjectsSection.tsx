interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Key Projects
      </h2>

      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative pl-4 border-l-2 border-accent"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              {project.description}
            </p>

            <div className="mb-3">
              <p className="text-xs font-semibold text-text-primary mb-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}