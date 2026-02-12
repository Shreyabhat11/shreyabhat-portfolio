'use client';

import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: 'education' | 'work' | 'skill';
}

export default function JourneyTimeline() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2018',
      title: 'Engineering Foundation',
      description: 'Began engineering studies, developing strong analytical and problem-solving skills that would later become the foundation for data science expertise.',
      icon: 'AcademicCapIcon',
      category: 'education'
    },
    {
      year: '2020',
      title: 'Data Science Discovery',
      description: 'Discovered passion for data analysis and machine learning. Started self-learning Python, statistics, and data visualization techniques.',
      icon: 'LightBulbIcon',
      category: 'skill'
    },
    {
      year: '2021',
      title: 'Professional Experience at CIPLA',
      description: 'Joined CIPLA Ltd, applying engineering principles to real-world problems while developing expertise in data-driven decision making.',
      icon: 'BriefcaseIcon',
      category: 'work'
    },
    {
      year: '2022',
      title: 'Advanced Analytics Mastery',
      description: 'Deepened expertise in machine learning algorithms, statistical modeling, and big data technologies. Completed multiple certification programs.',
      icon: 'ChartBarIcon',
      category: 'skill'
    },
    {
      year: '2023',
      title: 'Academic Excellence',
      description: 'Graduated with CGPA 8.5, demonstrating consistent academic performance and deep understanding of technical concepts.',
      icon: 'TrophyIcon',
      category: 'education'
    },
    {
      year: '2024',
      title: 'Full-Stack Data Scientist',
      description: 'Evolved into a comprehensive data science professional, bridging engineering discipline with modern ML/AI methodologies for business impact.',
      icon: 'RocketLaunchIcon',
      category: 'skill'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-primary text-primary-foreground';
      case 'work':
        return 'bg-accent text-white';
      case 'skill':
        return 'bg-trust text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="ClockIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Career Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            My Journey to Data Science
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From engineering foundations to data science expertise—a continuous learning journey driven by curiosity and analytical passion.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-trust"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card rounded-xl shadow-card p-6 sm:p-8 hover:shadow-elevated transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${getCategoryColor(event.category)} flex items-center justify-center`}>
                        <Icon name={event.icon as any} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-primary">{event.year}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                </div>

                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}