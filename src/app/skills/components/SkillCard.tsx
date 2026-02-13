import Icon from '@/components/ui/AppIcon';

interface SkillCardProps {
  name: string;
  category: string;
  proficiency: number;

  yearsOfExperience: number;
  projects: number;

  icon: string;
  description: string;

  technologies?: string[]; // 👈 instead of certifications + learningPath
  isActive?: boolean;
  onClick?: () => void;
}


export default function SkillCard({
  name,
  category,
  proficiency,
  yearsOfExperience,
  icon,
  description,
  projects,
  technologies = [],
  isActive = false,
  onClick,
}: SkillCardProps) {

  const getColor = (level: number) => {
    if (level >= 90) return 'bg-trust';
    if (level >= 75) return 'bg-cta';
    if (level >= 60) return 'bg-warning';
    return 'bg-secondary';
  };

  return (
    <div
      onClick={onClick}
      className={`group bg-card rounded-2xl p-6 cursor-pointer transition-all duration-300
      hover:shadow-elevated
      ${isActive ? 'ring-2 ring-primary shadow-elevated' : 'shadow-card'}
    `}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon name={icon as any} size={22} className="text-primary" />
        </div>

        <div>
          <h3 className="font-semibold text-text-primary">{name}</h3>
          <p className="text-xs text-text-secondary">{category}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
        {description}
      </p>

      {/* Proficiency */}
      <div className="mb-4">
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${getColor(proficiency)}`}
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-xs text-text-secondary mb-4">
        <span className="flex items-center gap-1">
          <Icon name="ClockIcon" size={14} />
          {yearsOfExperience} yrs
        </span>

        <span className="flex items-center gap-1">
          <Icon name="BriefcaseIcon" size={14} />
          {projects} projects
        </span>
      </div>

      {/* Technologies chips */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-muted rounded-md text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
