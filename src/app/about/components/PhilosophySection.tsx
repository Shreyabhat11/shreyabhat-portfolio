'use client';

import Icon from '@/components/ui/AppIcon';

interface Principle {
  title: string;
  description: string;
  icon: string;
}

export default function PhilosophySection() {
  const principles: Principle[] = [
    {
      title: 'Solve Real Problems',
      description:
        'I focus on practical solutions that improve efficiency, reduce downtime, or support better decisions — not just impressive models that stay in notebooks.',
      icon: 'WrenchScrewdriverIcon'
    },
    {
      title: 'Engineering + Analytics',
      description:
        'My engineering background helps me understand systems, processes, and root causes. I combine this with Python, SQL, and ML to build reliable, production-ready data solutions.',
      icon: 'CogIcon'
    },
    {
      title: 'End-to-End Ownership',
      description:
        'From data collection and cleaning to dashboards and deployment, I handle complete pipelines instead of isolated analysis.',
      icon: 'CircleStackIcon'
    },
    {
      title: 'Continuous Growth',
      description:
        'I constantly learn new tools and frameworks while building real projects — web apps, ML models, and automation systems — to stay industry ready.',
      icon: 'RocketLaunchIcon'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How I Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My approach blends engineering discipline with modern data science to
            deliver solutions that actually make an impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card p-6 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon as any} size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-12 text-center text-text-secondary max-w-3xl mx-auto">
          <p>
            My goal is simple: build clean, reliable, and scalable data solutions that
            create measurable business value — the same mindset I applied while working
            in industrial environments.
          </p>
        </div>
      </div>
    </section>
  );
}
