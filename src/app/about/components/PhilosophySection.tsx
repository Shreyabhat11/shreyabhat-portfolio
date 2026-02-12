'use client';

import Icon from '@/components/ui/AppIcon';

interface Philosophy {
  title: string;
  description: string;
  icon: string;
}

export default function PhilosophySection() {
  const philosophies: Philosophy[] = [
    {
      title: 'Data-Driven Decision Making',
      description: 'Every insight must be backed by rigorous analysis and statistical validation. I believe in letting data tell the story while maintaining critical thinking about what the numbers truly represent.',
      icon: 'ChartBarIcon'
    },
    {
      title: 'Continuous Learning',
      description: 'The data science landscape evolves rapidly. I commit to staying current with emerging technologies, methodologies, and best practices through ongoing education and hands-on experimentation.',
      icon: 'BookOpenIcon'
    },
    {
      title: 'Engineering Precision',
      description: 'My engineering background instills a methodical approach to problem-solving. I apply systematic thinking to break down complex challenges into manageable, solvable components.',
      icon: 'CogIcon'
    },
    {
      title: 'Business Impact Focus',
      description: 'Technical excellence means nothing without real-world application. I prioritize solutions that deliver measurable business value and align with organizational objectives.',
      icon: 'PresentationChartLineIcon'
    },
    {
      title: 'Collaborative Innovation',
      description: 'The best solutions emerge from diverse perspectives. I value cross-functional collaboration and believe in sharing knowledge to elevate team capabilities.',
      icon: 'UserGroupIcon'
    },
    {
      title: 'Ethical Analytics',
      description: 'With great data comes great responsibility. I advocate for transparent, unbiased analysis that respects privacy and considers the broader societal implications of data science work.',
      icon: 'ShieldCheckIcon'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="LightBulbIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Core Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Technical Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The guiding principles that shape my approach to data science and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card p-6 sm:p-8 hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={philosophy.icon as any} size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {philosophy.title}
                  </h3>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {philosophy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-card rounded-2xl shadow-elevated p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-trust flex items-center justify-center">
                <Icon name="SparklesIcon" size={40} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Engineering Precision Meets Data Science Innovation
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                My unique value proposition lies in bridging traditional engineering discipline with modern data science innovation. This combination enables me to approach complex problems with both analytical rigor and creative problem-solving, making me an ideal candidate for organizations seeking professionals who understand technical implementation and business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}