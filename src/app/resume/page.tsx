import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResumeInteractive from './components/ResumeInteractive';

export const metadata: Metadata = {
  title: 'Professional Resume - Shreya Portfolio',
  description: 'Comprehensive professional resume of Shreya Bhat, Data Scientist with expertise in machine learning, statistical analysis, and data visualization. Download in multiple formats including PDF and Word.',
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <ResumeInteractive />
    </>
  );
}