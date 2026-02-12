'use client';

import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function ValuesSection() {
  const values: Value[] = [
    {
      title: 'Integrity',
      description: 'Maintaining honesty and transparency in all data analysis and professional interactions. I believe in presenting findings objectively, even when they challenge assumptions.',
      icon: 'ShieldCheckIcon',
      color: 'from-primary to-primary/80'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in every project, from data cleaning to model deployment. Mediocrity is not an option when insights drive critical decisions.',
      icon: 'StarIcon',
      color: 'from-accent to-accent/80'
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies while maintaining practical applicability. Innovation should solve real problems, not create complexity.',
      icon: 'LightBulbIcon',
      color: 'from-trust to-trust/80'
    },
    {
      title: 'Collaboration',
      description: 'Fostering teamwork and knowledge sharing across disciplines. The best solutions emerge when diverse perspectives converge on common goals.',
      icon: 'UserGroupIcon',
      color: 'from-conversion to-conversion/80'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust/10 rounded-full mb-4">
            <Icon name="HeartIcon" size={20} className="text-trust" />
            <span className="text-sm font-medium text-trust">Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Professional Values
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The fundamental principles that guide my professional conduct and decision-making process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card p-8 sm:p-10 hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-subtle`}>
                  <Icon name={value.icon as any} size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary via-accent to-trust rounded-2xl shadow-elevated p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="SparklesIcon" size={48} className="mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Making an Impact Through Data
            </h3>
            <p className="text-lg leading-relaxed opacity-90 mb-8">
              My mission is to transform complex data into actionable insights that drive meaningful business outcomes. I believe in the power of data science to solve real-world problems and create positive change in organizations and communities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm opacity-80">Commitment to Quality</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">24/7</p>
                <p className="text-sm opacity-80">Learning Mindset</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">∞</p>
                <p className="text-sm opacity-80">Growth Potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}