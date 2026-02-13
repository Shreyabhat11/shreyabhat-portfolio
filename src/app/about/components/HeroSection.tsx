'use client';

import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust/10 rounded-full">
              <Icon name="SparklesIcon" size={18} className="text-trust" />
              <span className="text-sm font-medium text-trust">
                Open to Data Science & Analytics Roles
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Engineer turned
              <span className="text-gradient block mt-2">
                Data Scientist
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              I combine engineering discipline with machine learning and analytics
              to solve real-world business problems. Experienced in Python, SQL,
              ML models, and production-ready data applications.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="BriefcaseIcon" size={20} className="text-accent" />
                <span className="font-medium">CIPLA – Engineering Associate</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="ChartBarIcon" size={20} className="text-primary" />
                <span className="font-medium">ML • SQL • Analytics</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="AcademicCapIcon" size={20} className="text-trust" />
                <span className="font-medium">CGPA 8.5</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                View Projects
              </a>

              <a
                href="mailto:shreyabhat545@gmail.com"
                className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT PANEL (clean professional block instead of photo) */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated space-y-6">

            <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
              <Icon name="RocketLaunchIcon" size={22} className="text-accent" />
              What I Bring
            </h3>

            <ul className="space-y-4 text-text-secondary">
              <li>✔ Real-world industry experience (BMS, SCADA, process systems)</li>
              <li>✔ End-to-end ML projects & dashboards</li>
              <li>✔ Strong Python, SQL & data pipelines</li>
              <li>✔ Production-ready web apps (React + Django/Flask)</li>
              <li>✔ Fast learner with engineering mindset</li>
            </ul>

            <div className="pt-4 border-t border-border text-sm text-text-tertiary">
              Actively seeking full-time Data Analyst / Data Scientist opportunities.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
