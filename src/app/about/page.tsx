import type { Metadata } from 'next';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About - Shreya Portfolio',
  description: 'Learn about Shreya\'s journey from engineering professional to data scientist, her technical philosophy, and professional values that drive analytical excellence.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutContent />
    </main>
  );
}