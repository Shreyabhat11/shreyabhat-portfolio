'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  title: string;
  description: string;
  metric?: string;
}

interface Skill {
  id: number;
  name: string;
  category: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  description: string;
  achievements: Achievement[];
  skills: Skill[];
  projects?: string[];
}

const ExperienceTimeline = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "CIPLA Ltd",
    role: "Engineering Trainee – Instrumentation Engineer",
    duration: "1 year",
    startDate: "2024",
    endDate: "2025",
    location: "Goa, India",
    type: "Full-time",

    description:
      "Worked on pharmaceutical manufacturing operations by monitoring real-time process data, maintaining instrumentation reliability, and supporting data-driven decision making using BMS/SCADA systems.",

    achievements: [
      {
        id: 1,
        title: "Real-time Process Monitoring",
        description:
          "Monitored and analyzed real-time process data using BMS/SCADA systems to improve equipment performance and reliability."
      },
      {
        id: 2,
        title: "Predictive Maintenance Support",
        description:
          "Maintained calibration and performance logs of critical instruments, enabling data-driven maintenance and reducing downtime."
      },
      {
        id: 3,
        title: "Operational Reporting",
        description:
          "Prepared structured reports and visualizations of sensor data, reducing troubleshooting time by 15%."
      },
      {
        id: 4,
        title: "Cross-functional Collaboration",
        description:
          "Collaborated with production, quality, and engineering teams to apply insights for better operational efficiency."
      }
    ],

    skills: [
      { id: 1, name: "BMS/SCADA", category: "Domain" },
      { id: 2, name: "Process Monitoring", category: "Domain" },
      { id: 3, name: "Instrumentation & Calibration", category: "Domain" },
      { id: 4, name: "Data Analysis", category: "Analytics" },
      { id: 5, name: "Reporting & Dashboards", category: "Visualization" },
      { id: 6, name: "Excel", category: "Analytics" },
      { id: 7, name: "Python", category: "Programming" },
      { id: 8, name: "SQL", category: "Database" }
    ]
  }
];


  const skillCategories = ['all', 'Programming', 'AI/ML', 'Analytics', 'Visualization', 'Database', 'Domain'];

  const getFilteredSkills = (skills: Skill[]) => {
    if (selectedCategory === 'all') return skills;
    return skills.filter(skill => skill.category === selectedCategory);
  };

  const toggleExpand = (id: number) => {
    if (!isHydrated) return;
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCategoryChange = (category: string) => {
    if (!isHydrated) return;
    setSelectedCategory(category);
  };

  if (!isHydrated) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-card animate-pulse">
            <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 focus-ring ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-subtle'
                : 'bg-muted text-text-secondary hover:bg-muted/80 hover:text-text-primary'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative mb-12 last:mb-0">
            <div className="md:pl-20">
              <div className="absolute left-5 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-card hidden md:block z-10"></div>

              <div className="bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {exp.type}
                        </span>
                        {index === 0 && (
                          <span className="px-3 py-1 bg-trust/10 text-trust text-xs font-semibold rounded-full flex items-center gap-1">
                            <Icon name="CheckCircleIcon" size={14} variant="solid" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-1">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Icon name="CalendarIcon" size={16} />
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="ClockIcon" size={16} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MapPinIcon" size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-250 focus-ring rounded-md px-2 py-1"
                  >
                    <span>{expandedId === exp.id ? 'Show Less' : 'View Details'}</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className={`transform transition-transform duration-250 ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedId === exp.id && (
                    <div className="mt-6 pt-6 border-t border-border space-y-6 animate-fade-in">
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                          <Icon name="TrophyIcon" size={20} className="text-accent" />
                          Key Achievements
                        </h4>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement.id}
                              className="bg-background rounded-lg p-4 hover:bg-muted/50 transition-colors duration-250"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-text-primary mb-1">
                                    {achievement.title}
                                  </h5>
                                  <p className="text-sm text-text-secondary">{achievement.description}</p>
                                </div>
                                {achievement.metric && (
                                  <span className="px-3 py-1 bg-trust/10 text-trust text-sm font-semibold rounded-full whitespace-nowrap">
                                    {achievement.metric}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                          <Icon name="CodeBracketIcon" size={20} className="text-accent" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {getFilteredSkills(exp.skills).map((skill) => (
                            <span
                              key={skill.id}
                              className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors duration-250"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {exp.projects && exp.projects.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                            <Icon name="BriefcaseIcon" size={20} className="text-accent" />
                            Related Projects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-lg"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;