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
    year: '2020–2024',
    title: 'Electronics & Instrumentation Engineering',
    description:
      'Built strong foundations in sensors, control systems, PLCs, and process automation. Developed analytical thinking and problem-solving skills through core engineering projects and labs.',
    icon: 'AcademicCapIcon',
    category: 'education'
  },
  {
    year: '2024',
    title: 'CIPLA – Engineering Trainee (Instrumentation)',
    description:
      'Worked on BMS and SCADA systems, monitoring plant operations, troubleshooting instrumentation, and improving system reliability using real-time operational data.',
    icon: 'BriefcaseIcon',
    category: 'work'
  },
  {
    year: '2024',
    title: 'Data & Analytics Exposure',
    description:
      'Started analyzing operational data using Excel and Python to identify patterns, automate reports, and support faster decision-making in maintenance and troubleshooting.',
    icon: 'ChartBarIcon',
    category: 'skill'
  },
  {
    year: '2025',
    title: 'Transition to Data Science & ML',
    description:
      'Focused on SQL, statistics, machine learning, and end-to-end data projects. Built predictive models and dashboards while developing a strong foundation in practical data science.',
    icon: 'LightBulbIcon',
    category: 'skill'
  },
  {
    year: '2025 (Ongoing)',
    title: 'GenAI & Applied AI Projects',
    description:
      'Building AI-powered applications including disease diagnosis systems, smart assistants, and interactive web tools using React, Django, and modern ML/GenAI frameworks.',
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