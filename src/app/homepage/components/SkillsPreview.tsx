import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: string[];
  color: string;
}

const SkillsPreview = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: 'Programming Languages',
      icon: 'CodeBracketIcon',
      skills: ['Python', 'R', 'SQL', 'JavaScript'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Machine Learning',
      icon: 'CpuChipIcon',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      name: 'Data Analysis',
      icon: 'ChartBarIcon',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      name: 'Tools & Platforms',
      icon: 'WrenchScrewdriverIcon',
      skills: ['Git', 'Docker', 'AWS', 'Jupyter'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
            <Icon name="SparklesIcon" size={18} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Skills & Technologies
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive toolkit for building data-driven solutions from analysis to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-background rounded-xl p-6 space-y-4 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg`}
              >
                <Icon
                  name={category.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>

              <h3 className="text-lg font-semibold text-text-primary">
                {category.name}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-2 text-sm text-text-secondary"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/skills"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-card hover:shadow-elevated focus-ring"
          >
            <span>Explore All Skills</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;