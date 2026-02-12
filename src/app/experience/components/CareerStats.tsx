'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  label: string;
  value: string;
  icon: string;
  description: string;
}

const CareerStats = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const stats: Stat[] = [
    {
      id: 1,
      label: "Years of Experience",
      value: "1",
      icon: "ClockIcon",
      description: "Professional experience in engineering and data science"
    },

    {
      id: 2,
      label: "Projects Completed",
      value: "10+",
      icon: "CheckCircleIcon",
      description: "Data science and analytics projects delivered"
    },
  ];

  if (!isHydrated) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-card animate-pulse">
            <div className="h-12 w-12 bg-muted rounded-lg mb-4"></div>
            <div className="h-8 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-250">
              <Icon name={stat.icon as any} size={24} className="text-primary" />
            </div>
          </div>
          <div className="text-3xl font-bold text-text-primary mb-2">{stat.value}</div>
          <div className="text-sm font-semibold text-text-primary mb-1">{stat.label}</div>
          <p className="text-xs text-text-secondary leading-relaxed">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CareerStats;