'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import SkillCard from './SkillCard';
import SkillDetailModal from './SkillDetailModal';
import SkillComparisonChart from './SkillComparisonChart';
import LearningTimeline from './LearningTimeline';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;

  icon: string;
  description: string;

  projects: number;
  technologies?: string[];
}


const mockSkills: Skill[] = [
  {
    id: 1,
    name: 'Python',
    category: 'Programming',
    proficiency: 95,
    yearsOfExperience: 3.5,
    icon: 'CodeBracketIcon',
    description:
      'Core language for data science, automation, ML pipelines and backend APIs.',
    projects: 20,
    technologies: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'FastAPI',
      'Flask'
    ]
  },

  {
    id: 2,
    name: 'Machine Learning',
    category: 'AI / Data Science',
    proficiency: 90,
    yearsOfExperience: 2.5,
    icon: 'CpuChipIcon',
    description:
      'End-to-end ML systems: feature engineering, modeling, evaluation and deployment.',
    projects: 12,
    technologies: [
      'Regression',
      'Classification',
      'XGBoost',
      'Random Forest',
      'Model Deployment'
    ]
  },

  {
    id: 3,
    name: 'SQL & Databases',
    category: 'Data Engineering',
    proficiency: 90,
    yearsOfExperience: 3,
    icon: 'CircleStackIcon',
    description:
      'Complex queries, joins, optimization, schema design and analytics pipelines.',
    projects: 15,
    technologies: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Query Optimization',
      'ETL'
    ]
  },

  {
    id: 4,
    name: 'React & Frontend',
    category: 'Full Stack',
    proficiency: 85,
    yearsOfExperience: 2,
    icon: 'Squares2X2Icon',
    description:
      'Modern UI development for dashboards, analytics apps and interactive systems.',
    projects: 10,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind',
      'Next.js',
      'Charts',
      'UI/UX'
    ]
  },

  {
    id: 5,
    name: 'Backend APIs (Django/Flask)',
    category: 'Full Stack',
    proficiency: 88,
    yearsOfExperience: 2.5,
    icon: 'ServerIcon',
    description:
      'REST APIs, authentication, database integration and ML model serving.',
    projects: 11,
    technologies: [
      'Django',
      'Flask',
      'REST',
      'JWT',
      'PostgreSQL',
      'Deployment'
    ]
  },

  {
    id: 6,
    name: 'Industrial Automation & SCADA',
    category: 'Engineering Systems',
    proficiency: 85,
    yearsOfExperience: 2,
    icon: 'CogIcon',
    description:
      'Instrumentation, BMS/SCADA systems, process monitoring and industrial data integration.',
    projects: 6,
    technologies: [
      'SCADA',
      'BMS',
      'PLC',
      'Sensors',
      'Control Systems',
      'Monitoring'
    ]
  },

  {
    id: 7,
    name: 'Data Visualization & Analytics',
    category: 'Analytics',
    proficiency: 88,
    yearsOfExperience: 2,
    icon: 'ChartBarIcon',
    description:
      'Interactive dashboards and business insights for decision making.',
    projects: 14,
    technologies: [
      'Power BI',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Dashboards'
    ]
  }
];


export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [proficiencyFilter, setProficiencyFilter] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'comparison' | 'timeline'>('grid');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(mockSkills.map(skill => skill.category)))];

  const filteredSkills = mockSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProficiency = 
      proficiencyFilter === 'All' ||
      (proficiencyFilter === 'Expert' && skill.proficiency >= 90) ||
      (proficiencyFilter === 'Advanced' && skill.proficiency >= 75 && skill.proficiency < 90) ||
      (proficiencyFilter === 'Intermediate' && skill.proficiency >= 60 && skill.proficiency < 75) ||
      (proficiencyFilter === 'Beginner' && skill.proficiency < 60);

    return matchesCategory && matchesSearch && matchesProficiency;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Technical Skills <span className="text-gradient">Observatory</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            Comprehensive overview of technical proficiencies, learning progression, and hands-on experience across data science, machine learning, and engineering domains.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-250 ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'bg-muted text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Squares2X2Icon" size={18} className="inline mr-2" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-250 ${
                  viewMode === 'comparison' ? 'bg-primary text-white' : 'bg-muted text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="ChartBarIcon" size={18} className="inline mr-2" />
                Comparison
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-250 ${
                  viewMode === 'timeline' ? 'bg-primary text-white' : 'bg-muted text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="ClockIcon" size={18} className="inline mr-2" />
                Timeline
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative flex-1 lg:w-64">
                <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-text-secondary mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-250 ${
                      selectedCategory === category
                        ? 'bg-primary text-white' :'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:w-48">
              <label className="block text-sm font-medium text-text-secondary mb-2">Proficiency Level</label>
              <select
                value={proficiencyFilter}
                onChange={(e) => setProficiencyFilter(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="All">All Levels</option>
                <option value="Expert">Expert (90%+)</option>
                <option value="Advanced">Advanced (75-89%)</option>
                <option value="Intermediate">Intermediate (60-74%)</option>
                <option value="Beginner">Beginner (&lt;60%)</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-text-secondary">
            <span>Showing {filteredSkills.length} of {mockSkills.length} skills</span>
            <span>Total Projects: {mockSkills.reduce((sum, skill) => sum + skill.projects, 0)}</span>
          </div>
        </div>

        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                {...skill}
                isActive={selectedSkill?.id === skill.id}
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        )}

        {viewMode === 'comparison' && (
          <SkillComparisonChart skills={filteredSkills} />
        )}

        {viewMode === 'timeline' && (
          <LearningTimeline skills={filteredSkills} />
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <Icon name="MagnifyingGlassIcon" size={48} className="mx-auto text-text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">No skills found</h3>
            <p className="text-text-secondary">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>

      {selectedSkill && (
        <SkillDetailModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
}