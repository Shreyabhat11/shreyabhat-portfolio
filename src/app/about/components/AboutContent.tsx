'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import JourneyTimeline from './JourneyTimeline';
import PhilosophySection from './PhilosophySection';
import EducationSection from './EducationSection';
import ValuesSection from './ValuesSection';
import SocialConnect from './SocialConnect';

export default function AboutContent() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="h-96 bg-muted rounded-lg"></div>
              <div className="h-64 bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <JourneyTimeline />
        <PhilosophySection />
        <EducationSection />
        <ValuesSection />
        <SocialConnect />
      </div>
    </div>
  );
}