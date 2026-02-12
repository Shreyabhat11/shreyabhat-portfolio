import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  icon: string;
  value: string;
  label: string;
  description: string;
}

const AchievementCallouts = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      icon: 'AcademicCapIcon',
      value: '8.5',
      label: 'CGPA',
      description: 'Academic Excellence in Engineering',
    },
    {
      id: 2,
      icon: 'BriefcaseIcon',
      value: '2+',
      label: 'Years',
      description: 'Professional Experience at CIPLA Ltd',
    },
    {
      id: 3,
      icon: 'CodeBracketIcon',
      value: '15+',
      label: 'Projects',
      description: 'Data Science & ML Solutions Delivered',
    },
    {
      id: 4,
      icon: 'ChartBarIcon',
      value: '92%',
      label: 'Accuracy',
      description: 'Average Model Performance',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Achievements & Impact
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Quantifiable results demonstrating technical proficiency and business impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center space-y-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-card hover:shadow-elevated"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Icon
                  name={achievement.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-4xl font-bold text-white">
                  {achievement.value}
                </p>
                <p className="text-lg font-semibold text-white/90 mt-1">
                  {achievement.label}
                </p>
              </div>

              <p className="text-sm text-white/70">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCallouts;