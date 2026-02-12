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
  certifications: string[];
  learningPath: string;
  tools: string[];
  achievements: string[];
  resources: { title: string; url: string; type: string }[];
  githubRepos: { name: string; url: string; stars: number }[];
}

const mockSkills: Skill[] = [
  {
    id: 1,
    name: 'Python',
    category: 'Programming Languages',
    proficiency: 95,
    yearsOfExperience: 3.5,
    icon: 'CodeBracketIcon',
    description: 'Advanced proficiency in Python for data science, machine learning, and automation. Extensive experience with NumPy, Pandas, Scikit-learn, and TensorFlow frameworks.',
    projects: 15,
    certifications: ['Python for Data Science - IBM', 'Advanced Python Programming - Coursera'],
    learningPath: 'Self-taught → Professional Projects',
    tools: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn'],
    achievements: [
      'Developed 15+ production-ready data science projects',
      'Optimized data processing pipelines reducing runtime by 60%',
      'Contributed to open-source Python libraries'
    ],
    resources: [
      { title: 'Python Data Science Handbook', url: 'https://github.com/jakevdp/PythonDataScienceHandbook', type: 'Book' },
      { title: 'Real Python Tutorials', url: 'https://realpython.com', type: 'Tutorial' }
    ],
    githubRepos: [
      { name: 'ml-algorithms-implementation', url: 'https://github.com/shreya/ml-algorithms', stars: 45 },
      { name: 'data-analysis-toolkit', url: 'https://github.com/shreya/data-toolkit', stars: 32 }
    ]
  },
  {
    id: 2,
    name: 'Machine Learning',
    category: 'Data Science',
    proficiency: 90,
    yearsOfExperience: 2.5,
    icon: 'CpuChipIcon',
    description: 'Expert in supervised and unsupervised learning algorithms, model optimization, and deployment. Strong foundation in statistical analysis and predictive modeling.',
    projects: 12,
    certifications: ['Machine Learning Specialization - Stanford', 'Deep Learning Specialization - deeplearning.ai'],
    learningPath: 'Academic → Industry Application',
    tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'Keras', 'MLflow'],
    achievements: [
      'Built predictive models with 92% accuracy for business forecasting',
      'Implemented ensemble methods improving model performance by 25%',
      'Deployed ML models serving 10,000+ daily predictions'
    ],
    resources: [
      { title: 'Hands-On Machine Learning', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', type: 'Book' },
      { title: 'ML Course by Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', type: 'Course' }
    ],
    githubRepos: [
      { name: 'ml-model-deployment', url: 'https://github.com/shreya/ml-deployment', stars: 67 },
      { name: 'ensemble-methods', url: 'https://github.com/shreya/ensemble-ml', stars: 28 }
    ]
  },
  {
    id: 3,
    name: 'SQL & Databases',
    category: 'Data Management',
    proficiency: 88,
    yearsOfExperience: 3,
    icon: 'CircleStackIcon',
    description: 'Proficient in complex SQL queries, database design, optimization, and data warehousing. Experience with both relational and NoSQL databases.',
    projects: 10,
    certifications: ['SQL for Data Science - UC Davis', 'Database Management Systems - Coursera'],
    learningPath: 'Academic → Professional Practice',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'BigQuery'],
    achievements: [
      'Optimized database queries reducing execution time by 70%',
      'Designed scalable database schemas for enterprise applications',
      'Managed databases handling 1M+ records efficiently'
    ],
    resources: [
      { title: 'SQL Performance Explained', url: 'https://sql-performance-explained.com/', type: 'Book' },
      { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'Tutorial' }
    ],
    githubRepos: [
      { name: 'sql-optimization-toolkit', url: 'https://github.com/shreya/sql-toolkit', stars: 41 }
    ]
  },
  {
    id: 4,
    name: 'Data Visualization',
    category: 'Analytics',
    proficiency: 85,
    yearsOfExperience: 2,
    icon: 'ChartBarIcon',
    description: 'Creating compelling data stories through interactive dashboards and visualizations. Expert in translating complex data into actionable insights.',
    projects: 18,
    certifications: ['Data Visualization with Tableau - Coursera'],
    learningPath: 'Self-taught → Client Projects',
    tools: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
    achievements: [
      'Created 50+ interactive dashboards for business intelligence',
      'Reduced report generation time by 80% through automation',
      'Presented data insights to C-level executives'
    ],
    resources: [
      { title: 'Storytelling with Data', url: 'https://www.storytellingwithdata.com/', type: 'Book' },
      { title: 'Tableau Public Gallery', url: 'https://public.tableau.com/gallery', type: 'Resource' }
    ],
    githubRepos: [
      { name: 'visualization-templates', url: 'https://github.com/shreya/viz-templates', stars: 53 }
    ]
  },
  {
    id: 5,
    name: 'Statistical Analysis',
    category: 'Data Science',
    proficiency: 87,
    yearsOfExperience: 2.5,
    icon: 'CalculatorIcon',
    description: 'Strong foundation in statistical methods, hypothesis testing, and experimental design. Applied statistics for data-driven decision making.',
    projects: 8,
    certifications: ['Statistics for Data Science - MIT', 'Bayesian Statistics - Duke University'],
    learningPath: 'Academic Foundation → Research',
    tools: ['R', 'Python (SciPy, StatsModels)', 'SPSS', 'Excel'],
    achievements: [
      'Conducted A/B tests improving conversion rates by 35%',
      'Applied statistical methods for quality control in manufacturing',
      'Published research paper on statistical modeling'
    ],
    resources: [
      { title: 'Think Stats', url: 'https://greenteapress.com/thinkstats/', type: 'Book' },
      { title: 'Statistics by Jim', url: 'https://statisticsbyjim.com/', type: 'Blog' }
    ],
    githubRepos: [
      { name: 'statistical-tests-library', url: 'https://github.com/shreya/stats-lib', stars: 36 }
    ]
  },
  {
    id: 6,
    name: 'Deep Learning',
    category: 'Artificial Intelligence',
    proficiency: 82,
    yearsOfExperience: 1.5,
    icon: 'CpuChipIcon',
    description: 'Building and training neural networks for computer vision and NLP tasks. Experience with CNN, RNN, and transformer architectures.',
    projects: 7,
    certifications: ['Deep Learning Specialization - deeplearning.ai', 'TensorFlow Developer Certificate'],
    learningPath: 'Online Courses → Personal Projects',
    tools: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Hugging Face'],
    achievements: [
      'Built image classification model with 94% accuracy',
      'Implemented sentiment analysis system for customer feedback',
      'Fine-tuned transformer models for domain-specific tasks'
    ],
    resources: [
      { title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/', type: 'Book' },
      { title: 'Fast.ai Course', url: 'https://www.fast.ai/', type: 'Course' }
    ],
    githubRepos: [
      { name: 'cnn-architectures', url: 'https://github.com/shreya/cnn-models', stars: 58 },
      { name: 'nlp-transformers', url: 'https://github.com/shreya/nlp-transformers', stars: 42 }
    ]
  },
  {
    id: 7,
    name: 'Big Data Technologies',
    category: 'Data Engineering',
    proficiency: 75,
    yearsOfExperience: 1,
    icon: 'ServerIcon',
    description: 'Working with distributed computing frameworks for processing large-scale datasets. Understanding of data pipeline architecture.',
    projects: 5,
    certifications: ['Big Data Specialization - UC San Diego'],
    learningPath: 'Industry Training → Projects',
    tools: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'AWS EMR'],
    achievements: [
      'Processed 100GB+ datasets using Spark',
      'Built ETL pipelines for real-time data processing',
      'Optimized data workflows reducing processing time by 50%'
    ],
    resources: [
      { title: 'Learning Spark', url: 'https://pages.databricks.com/rs/094-YMS-629/images/LearningSpark2.0.pdf', type: 'Book' },
      { title: 'Spark Documentation', url: 'https://spark.apache.org/docs/latest/', type: 'Documentation' }
    ],
    githubRepos: [
      { name: 'spark-etl-pipeline', url: 'https://github.com/shreya/spark-etl', stars: 29 }
    ]
  },
  {
    id: 8,
    name: 'Cloud Computing',
    category: 'Infrastructure',
    proficiency: 78,
    yearsOfExperience: 1.5,
    icon: 'CloudIcon',
    description: 'Deploying and managing data science solutions on cloud platforms. Experience with serverless architectures and containerization.',
    projects: 9,
    certifications: ['AWS Certified Cloud Practitioner', 'Google Cloud Associate'],
    learningPath: 'Certification → Hands-on Practice',
    tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
    achievements: [
      'Deployed ML models on AWS SageMaker',
      'Managed cloud infrastructure reducing costs by 40%',
      'Implemented CI/CD pipelines for automated deployments'
    ],
    resources: [
      { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', type: 'Documentation' },
      { title: 'Cloud Academy', url: 'https://cloudacademy.com/', type: 'Platform' }
    ],
    githubRepos: [
      { name: 'cloud-ml-deployment', url: 'https://github.com/shreya/cloud-ml', stars: 38 }
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