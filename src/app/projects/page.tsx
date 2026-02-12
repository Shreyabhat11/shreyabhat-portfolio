import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProjectsInteractive from './components/ProjectsInteractive';

export const metadata: Metadata = {
  title: 'Projects - Shreya Portfolio',
  description: 'Explore comprehensive data science projects showcasing analytical expertise, machine learning implementations, and business impact through technical storytelling and quantifiable outcomes.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsInteractive />
    </>
  );
}