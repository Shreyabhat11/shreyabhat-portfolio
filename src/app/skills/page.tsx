import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Technical Skills - Shreya Portfolio',
  description: 'Comprehensive overview of technical proficiencies in data science, machine learning, and engineering. Interactive skill matrix with proficiency levels, learning timeline, and hands-on project experience.',
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <SkillsInteractive />
    </>
  );
}