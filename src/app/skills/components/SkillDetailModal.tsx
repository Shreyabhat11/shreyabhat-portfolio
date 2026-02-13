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
  technologies?: string[];
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

            

            

            
          </div>
        </div>
      </div>
    </div>
  );
}