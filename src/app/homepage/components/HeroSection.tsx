'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML' },
    { name: 'Data Analysis', level: 88, category: 'Analytics' },
    { name: 'SQL', level: 82, category: 'Database' },
    { name: 'TensorFlow', level: 80, category: 'Framework' },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated, skills.length]);

  const scrollToSection = (sectionId: string) => {
    if (!isHydrated) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent">
                  Available for Opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Shreya</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary">
                Data Scientist & ML Engineer
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                Transforming complex data into actionable insights. Bridging engineering precision with data science innovation to drive business impact through analytical excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-cta text-white rounded-lg font-semibold hover:bg-cta/90 transition-all duration-300 transform hover:-translate-y-1 shadow-card hover:shadow-elevated focus-ring"
              >
                <span>View Projects</span>
                <Icon name="ArrowRightIcon" size={20} />
              </Link>

              <button
                onClick={() => scrollToSection('featured-work')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-background border-2 border-border text-text-primary rounded-lg font-semibold hover:bg-muted transition-all duration-300 focus-ring"
              >
                <span>Explore Work</span>
                <Icon name="ChevronDownIcon" size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com/Shreyabhat11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-250 focus-ring rounded-md"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={24} />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shreya-bhat-3169b1248/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-250 focus-ring rounded-md"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserGroupIcon" size={24} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <Link
                href="/resume"
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-250 focus-ring rounded-md"
              >
                <Icon name="DocumentTextIcon" size={24} />
                <span className="text-sm font-medium">Resume</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-elevated">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-trust/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-text-primary">
                    Core Skills
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="ChartBarIcon" size={18} />
                    <span>Live Metrics</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-500 ${
                        isHydrated && index === activeSkillIndex
                          ? 'scale-105' :'scale-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-text-primary">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-accent">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${
                            isHydrated && index === activeSkillIndex
                              ? 'bg-gradient-to-r from-primary to-accent' :'bg-secondary'
                          }`}
                          style={{
                            width: isHydrated ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/skills"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-250 font-medium focus-ring rounded-md"
                >
                  <span>View All Skills</span>
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background border-2 border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-trust to-accent rounded-lg flex items-center justify-center">
                  <Icon name="AcademicCapIcon" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    CGPA 8.5
                  </p>
                  <p className="text-xs text-text-secondary">
                    Academic Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('featured-work')}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors duration-250 focus-ring"
          aria-label="Scroll to featured work"
        >
          <Icon name="ChevronDownIcon" size={24} className="text-text-secondary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;