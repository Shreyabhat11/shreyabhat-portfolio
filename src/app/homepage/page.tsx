import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
// import AchievementCallouts from './components/AchievementCallouts';
import SkillsPreview from './components/SkillsPreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Home - Shreya Portfolio',
  description:
    'Welcome to Shreya\'s professional portfolio. Data Scientist and ML Engineer specializing in transforming complex data into actionable insights through analytical excellence and innovative solutions.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjects />
        {/* <AchievementCallouts /> */}
        <SkillsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}