'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProgressionItem {
  id: number;
  year: string;
  title: string;
  skills: string[];
  milestone: string;
}

const SkillProgression = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const progression: ProgressionItem[] = [
    {
      id: 1,
      year: "2020",
      title: "Engineering Foundation",
      skills: ["Python Basics", "Excel", "Process Engineering", "Technical Documentation"],
      milestone: "Started career as Engineering Intern"
    },
    {
      id: 2,
      year: "2021",
      title: "Data Analytics Transition",
      skills: ["SQL", "Data Analysis", "Tableau", "Statistical Methods"],
      milestone: "Joined CIPLA as Engineering Associate"
    },
    {
      id: 3,
      year: "2022",
      title: "Advanced Analytics",
      skills: ["Machine Learning", "Python Advanced", "Power BI", "Data Pipelines"],
      milestone: "Promoted to Data Science Analyst"
    },
    {
      id: 4,
      year: "2023",
      title: "AI/ML Specialization",
      skills: ["TensorFlow", "Computer Vision", "Deep Learning", "MLOps"],
      milestone: "Leading data science initiatives"
    },
    {
      id: 5,
      year: "2024",
      title: "Leadership & Innovation",
      skills: ["Team Mentoring", "Strategic Planning", "Advanced ML", "Cloud Computing"],
      milestone: "Driving organizational data transformation"
    }
  ];

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-card animate-pulse">
            <div className="h-6 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <Icon name="AcademicCapIcon" size={28} className="text-primary" />
        Skill Progression Timeline
      </h3>

      <div className="space-y-6">
        {progression.map((item, index) => (
          <div key={item.id} className="relative">
            {index !== progression.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
            )}

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-card relative z-10">
                  {item.year.slice(-2)}
                </div>
              </div>

              <div className="flex-1 pb-8">
                <div className="bg-background rounded-lg p-4 hover:bg-muted/50 transition-colors duration-250">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                    <Icon name="SparklesIcon" size={16} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary mb-3">{item.milestone}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgression;