import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  learningPath: string;
}

interface LearningTimelineProps {
  skills: Skill[];
}

export default function LearningTimeline({ skills }: LearningTimelineProps) {
  const sortedSkills = [...skills].sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);

  const timelineEvents = [
    {
      year: '2021',
      title: 'Engineering Foundation',
      description: 'Started engineering degree with focus on programming fundamentals and mathematical foundations',
      skills: ['Python Basics', 'SQL', 'Statistics'],
      icon: 'AcademicCapIcon'
    },
    {
      year: '2022',
      title: 'Data Science Transition',
      description: 'Began specializing in data science through online courses and personal projects',
      skills: ['Machine Learning', 'Data Visualization', 'Python Advanced'],
      icon: 'ChartBarIcon'
    },
    {
      year: '2023',
      title: 'Professional Experience',
      description: 'Joined CIPLA Ltd as Data Science professional, working on real-world analytics projects',
      skills: ['Deep Learning', 'Big Data', 'Cloud Computing'],
      icon: 'BriefcaseIcon'
    },
    {
      year: '2024',
      title: 'Advanced Specialization',
      description: 'Deepening expertise in ML/AI and expanding into cloud-based solutions',
      skills: ['Advanced ML', 'MLOps', 'Cloud Architecture'],
      icon: 'CpuChipIcon'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Learning Journey Timeline</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-card">
                  <Icon name={event.icon as any} size={28} className="text-white" />
                </div>
                
                <div className="bg-background rounded-lg p-6 shadow-subtle hover:shadow-card transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary">{event.year}</span>
                    <span className="text-xs text-text-secondary">
                      {event.skills.length} skills acquired
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{event.title}</h4>
                  <p className="text-sm text-text-secondary mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Skills by Experience Level</h3>
        <div className="space-y-4">
          {sortedSkills.map((skill, index) => (
            <div key={skill.id} className="flex items-center space-x-4">
              <div className="w-8 text-center">
                <span className="text-sm font-semibold text-text-secondary">#{index + 1}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                  <span className="text-xs text-text-secondary">{skill.yearsOfExperience} years</span>
                </div>
                
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${(skill.yearsOfExperience / 4) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="w-16 text-right">
                <span className="text-sm font-semibold text-primary">{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl shadow-card p-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Learning Velocity</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Skills per Year</span>
              <span className="text-lg font-bold text-primary">2.7</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Average Time to Proficiency</span>
              <span className="text-lg font-bold text-accent">18 months</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Active Learning Period</span>
              <span className="text-lg font-bold text-trust">3.5 years</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-card p-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Skill Categories</h4>
          <div className="space-y-3">
            {Array.from(new Set(skills.map(s => s.category))).map((category, index) => {
              const categorySkills = skills.filter(s => s.category === category);
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{category}</span>
                  <span className="text-lg font-bold text-primary">{categorySkills.length}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}