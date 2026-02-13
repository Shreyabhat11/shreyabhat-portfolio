import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceTimeline from './components/ExperienceTimeline';
import CareerStats from './components/CareerStats';
import SkillProgression from './components/SkillProgression';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Experience - Shreya Portfolio',
  description: 'Explore Shreya\'s professional journey from engineering to data science, featuring 4+ years of experience at CIPLA Ltd with quantifiable achievements, skill progression, and industry recognition in pharmaceutical analytics and machine learning.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Icon name="BriefcaseIcon" size={18} />
              Professional Journey
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Experience & Career Growth
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive timeline of my professional evolution from engineering to data science, showcasing quantifiable achievements, continuous learning, and impactful contributions to pharmaceutical analytics and operational excellence.
            </p>
          </div>

          <div className="mb-16">
            <CareerStats />
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-text-primary">Career Timeline</h2>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cta text-white rounded-lg text-sm font-semibold hover:bg-cta/90 transition-all duration-250 focus-ring shadow-subtle hover:shadow-card"
              >
                <Icon name="DocumentTextIcon" size={18} />
                View Full Resume
              </Link>
            </div>
            <ExperienceTimeline />
          </div>

          <div className="mb-16">
            <SkillProgression />
          </div>

          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center shadow-elevated">
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in discussing data science opportunities, collaborative projects, or sharing insights about analytics and machine learning in pharmaceutical manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-250 focus-ring shadow-card"
              >
                <Icon name="BriefcaseIcon" size={20} />
                View My Projects
              </Link>
              <a
                href="https://www.linkedin.com/in/shreyabhat11/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-250 focus-ring backdrop-blur-sm"
              >
                <Icon name="UserGroupIcon" size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Shreya. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Shreyabhat11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-250"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shreyabhat11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-250"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserGroupIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}