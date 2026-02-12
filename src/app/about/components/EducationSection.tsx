'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  image: string;
  alt: string;
}

interface Certification {
  title: string;
  provider: string;
  year: string;
  icon: string;
}

export default function EducationSection() {
  const education: Education[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'Premier Engineering College',
    duration: '2018 - 2023',
    cgpa: '8.5/10',
    highlights: [
    'Specialized in Data Structures and Algorithms',
    'Completed advanced coursework in Machine Learning',
    'Led technical projects in data analysis and visualization',
    'Active member of coding and analytics clubs'],

    image: "https://images.unsplash.com/photo-1604306748004-5ebc73dd331f",
    alt: 'Modern university campus building with glass facade and students walking on pathway with green lawns'
  }];


  const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera - Stanford University',
    year: '2022',
    icon: 'CpuChipIcon'
  },
  {
    title: 'Data Science Professional Certificate',
    provider: 'IBM',
    year: '2022',
    icon: 'ChartBarIcon'
  },
  {
    title: 'Python for Data Science',
    provider: 'DataCamp',
    year: '2021',
    icon: 'CodeBracketIcon'
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera - deeplearning.ai',
    year: '2023',
    icon: 'CircleStackIcon'
  },
  {
    title: 'SQL for Data Analysis',
    provider: 'Udacity',
    year: '2021',
    icon: 'TableCellsIcon'
  },
  {
    title: 'Advanced Statistics',
    provider: 'MIT OpenCourseWare',
    year: '2022',
    icon: 'CalculatorIcon'
  }];


  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Strong academic foundation complemented by continuous professional development and industry-recognized certifications.
          </p>
        </div>

        <div className="mb-16">
          {education.map((edu, index) =>
          <div
            key={index}
            className="bg-card rounded-2xl shadow-elevated overflow-hidden">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <AppImage
                  src={edu.image}
                  alt={edu.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:bg-gradient-to-r"></div>
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust text-white rounded-lg">
                      <Icon name="TrophyIcon" size={20} />
                      <span className="font-semibold">CGPA {edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-text-secondary mb-1">{edu.institution}</p>
                      <p className="text-sm text-text-tertiary">{edu.duration}</p>
                    </div>
                    <div className="hidden lg:block">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust text-white rounded-lg">
                        <Icon name="TrophyIcon" size={20} />
                        <span className="font-semibold">CGPA {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
                      <Icon name="StarIcon" size={20} className="text-accent" />
                      <span>Key Highlights</span>
                    </h4>
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, idx) =>
                    <li key={idx} className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={20} className="text-trust flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{highlight}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) =>
            <div
              key={index}
              className="bg-card rounded-xl shadow-card p-6 hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 group">

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={cert.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-2 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-1">{cert.provider}</p>
                    <div className="flex items-center space-x-2">
                      <Icon name="CalendarIcon" size={16} className="text-text-tertiary" />
                      <span className="text-sm text-text-tertiary">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-card">
            <Icon name="AcademicCapIcon" size={24} />
            <span className="font-semibold">Committed to Continuous Learning & Professional Development</span>
          </div>
        </div>
      </div>
    </section>);

}