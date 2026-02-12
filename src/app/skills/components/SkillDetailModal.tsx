import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  icon: string;
  description: string;
  projects: number;
  certifications: string[];
  learningPath: string;
  tools: string[];
  achievements: string[];
  resources: { title: string; url: string; type: string }[];
  githubRepos: { name: string; url: string; stars: number }[];
}

interface SkillDetailModalProps {
  skill: Skill | null;
  onClose: () => void;
}

export default function SkillDetailModal({ skill, onClose }: SkillDetailModalProps) {
  if (!skill) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-xl shadow-modal overflow-hidden">
        <div className="sticky top-0 z-10 bg-background border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name={skill.icon as any} size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">{skill.name}</h2>
                <p className="text-sm text-text-secondary">{skill.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-250 focus-ring"
              aria-label="Close modal"
            >
              <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Overview</h3>
              <p className="text-text-secondary leading-relaxed">{skill.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ChartBarIcon" size={20} className="text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Proficiency</span>
                </div>
                <p className="text-2xl font-bold text-text-primary">{skill.proficiency}%</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ClockIcon" size={20} className="text-accent" />
                  <span className="text-sm font-medium text-text-secondary">Experience</span>
                </div>
                <p className="text-2xl font-bold text-text-primary">{skill.yearsOfExperience} years</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="BriefcaseIcon" size={20} className="text-trust" />
                  <span className="text-sm font-medium text-text-secondary">Projects</span>
                </div>
                <p className="text-2xl font-bold text-text-primary">{skill.projects}</p>
              </div>
            </div>

            {skill.tools.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-text-primary text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skill.certifications.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Certifications</h3>
                <div className="space-y-2">
                  {skill.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-card rounded-lg">
                      <Icon name="AcademicCapIcon" size={20} className="text-accent" />
                      <span className="text-sm text-text-primary">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {skill.achievements.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {skill.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-trust mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {skill.githubRepos.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">GitHub Repositories</h3>
                <div className="space-y-3">
                  {skill.githubRepos.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-muted transition-colors duration-250 group"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name="CodeBracketIcon" size={20} className="text-primary" />
                        <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors duration-250">
                          {repo.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="StarIcon" size={16} className="text-warning" />
                        <span className="text-sm text-text-secondary">{repo.stars}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {skill.resources.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Learning Resources</h3>
                <div className="space-y-2">
                  {skill.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-muted transition-colors duration-250 group"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name="BookOpenIcon" size={18} className="text-accent" />
                        <span className="text-sm text-text-primary group-hover:text-accent transition-colors duration-250">
                          {resource.title}
                        </span>
                      </div>
                      <span className="text-xs text-text-secondary px-2 py-1 bg-muted rounded">
                        {resource.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}