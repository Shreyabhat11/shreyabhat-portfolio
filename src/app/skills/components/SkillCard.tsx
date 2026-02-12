import Icon from '@/components/ui/AppIcon';

interface SkillCardProps {
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  icon: string;
  description: string;
  projects: number;
  certifications: string[];
  learningPath: string;
  isActive: boolean;
  onClick: () => void;
}

export default function SkillCard({
  name,
  category,
  proficiency,
  yearsOfExperience,
  icon,
  description,
  projects,
  certifications,
  learningPath,
  isActive,
  onClick,
}: SkillCardProps) {
  const getProficiencyColor = (level: number) => {
    if (level >= 90) return 'bg-trust';
    if (level >= 75) return 'bg-cta';
    if (level >= 60) return 'bg-warning';
    return 'bg-secondary';
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-card rounded-lg p-6 transition-all duration-300 cursor-pointer hover:shadow-elevated ${
        isActive ? 'ring-2 ring-primary shadow-elevated' : 'shadow-card hover:shadow-elevated'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            isActive ? 'bg-primary' : 'bg-muted group-hover:bg-primary/10'
          }`}>
            <Icon 
              name={icon as any} 
              size={24} 
              className={isActive ? 'text-white' : 'text-primary'}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
            <p className="text-sm text-text-secondary">{category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          getProficiencyColor(proficiency)
        } text-white`}>
          {getProficiencyLabel(proficiency)}
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-4 line-clamp-2">{description}</p>

      <div className="space-y-3 mb-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-secondary">Proficiency</span>
            <span className="text-xs font-semibold text-text-primary">{proficiency}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full ${getProficiencyColor(proficiency)} transition-all duration-500`}
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Icon name="ClockIcon" size={16} className="text-text-secondary" />
            <span className="text-xs text-text-secondary">{yearsOfExperience} years</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="BriefcaseIcon" size={16} className="text-text-secondary" />
            <span className="text-xs text-text-secondary">{projects} projects</span>
          </div>
        </div>
      </div>

      {certifications.length > 0 && (
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="AcademicCapIcon" size={16} className="text-accent" />
          <span className="text-xs text-text-secondary">{certifications.length} certification(s)</span>
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-xs text-text-secondary">{learningPath}</span>
        <Icon 
          name="ChevronRightIcon" 
          size={16} 
          className={`transition-transform duration-300 ${
            isActive ? 'rotate-90 text-primary' : 'text-text-secondary group-hover:translate-x-1'
          }`}
        />
      </div>
    </div>
  );
}