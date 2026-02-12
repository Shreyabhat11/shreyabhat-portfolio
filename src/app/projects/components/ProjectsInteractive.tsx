'use client';

import { useState, useEffect } from 'react';
import ProjectHero from './ProjectHero';
import ProjectFilters from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';

interface Technology {
  name: string;
  category: string;
}

interface Metric {
  label: string;
  value: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  methodology: string;
  outcomes: string[];
  metrics: Metric[];
  technologies: Technology[];
  image: string;
  alt: string;
  githubUrl: string;
  liveUrl?: string;
  duration: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
}

const ProjectsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction System',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Data Analysis'],
    description: 'Developed an advanced machine learning model to predict customer churn with 89% accuracy, enabling proactive retention strategies and reducing customer attrition by 23%.',
    challenge: 'The telecommunications company faced a 15% annual customer churn rate, resulting in significant revenue loss. Traditional rule-based approaches failed to identify at-risk customers early enough for effective intervention.',
    methodology: 'Implemented ensemble learning combining Random Forest, XGBoost, and Gradient Boosting algorithms. Performed extensive feature engineering on customer behavior data, transaction history, and service usage patterns. Applied SMOTE for handling class imbalance and used cross-validation for robust model evaluation.',
    outcomes: [
    'Achieved 89% prediction accuracy with 0.85 F1-score',
    'Identified top 10 churn indicators for business strategy',
    'Reduced false positives by 34% compared to baseline model',
    'Enabled targeted retention campaigns saving $2.3M annually'],

    metrics: [
    { label: 'Accuracy', value: '89%', icon: 'ChartBarIcon' },
    { label: 'F1-Score', value: '0.85', icon: 'BeakerIcon' },
    { label: 'Cost Savings', value: '$2.3M', icon: 'CurrencyDollarIcon' },
    { label: 'Churn Reduction', value: '23%', icon: 'ArrowTrendingDownIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'Scikit-learn', category: 'ML Framework' },
    { name: 'XGBoost', category: 'Algorithm' },
    { name: 'Pandas', category: 'Data Processing' },
    { name: 'Matplotlib', category: 'Visualization' }],

    image: "https://images.unsplash.com/photo-1663780852957-0e1f8bda3d0d",
    alt: 'Data scientist analyzing customer behavior patterns on multiple computer screens with colorful charts and graphs',
    githubUrl: 'https://github.com/shreya/customer-churn-prediction',
    liveUrl: 'https://churn-predictor-demo.netlify.app',
    duration: '4 months',
    status: 'completed',
    featured: true
  },
  {
    id: 2,
    title: 'Real-Time Sentiment Analysis Dashboard',
    category: 'NLP',
    tags: ['Python', 'NLTK', 'Flask', 'React', 'MongoDB'],
    description: 'Built a real-time sentiment analysis system processing 10,000+ social media posts daily, providing actionable insights for brand reputation management and customer feedback analysis.',
    challenge: 'Marketing teams struggled to monitor brand sentiment across multiple social platforms in real-time, missing critical customer feedback and potential PR crises. Manual analysis was time-consuming and inconsistent.',
    methodology: 'Developed NLP pipeline using BERT-based transformer models for sentiment classification. Implemented streaming data ingestion with Apache Kafka, real-time processing with Flask backend, and interactive React dashboard. Applied aspect-based sentiment analysis to identify specific product features mentioned.',
    outcomes: [
    'Processed 10,000+ posts daily with 92% sentiment accuracy',
    'Reduced response time to negative feedback from 24hrs to 2hrs',
    'Identified 15 product improvement opportunities from user feedback',
    'Automated 80% of manual sentiment monitoring tasks'],

    metrics: [
    { label: 'Daily Posts', value: '10K+', icon: 'ChatBubbleLeftRightIcon' },
    { label: 'Accuracy', value: '92%', icon: 'CheckCircleIcon' },
    { label: 'Response Time', value: '2hrs', icon: 'ClockIcon' },
    { label: 'Automation', value: '80%', icon: 'BoltIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'NLTK', category: 'NLP Library' },
    { name: 'BERT', category: 'Model' },
    { name: 'Flask', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'MongoDB', category: 'Database' }],

    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    alt: 'Modern analytics dashboard displaying real-time sentiment analysis with colorful pie charts and trend graphs on large monitor',
    githubUrl: 'https://github.com/shreya/sentiment-analysis-dashboard',
    liveUrl: 'https://sentiment-dashboard-demo.vercel.app',
    duration: '3 months',
    status: 'completed',
    featured: true
  },
  {
    id: 3,
    title: 'Predictive Maintenance for Manufacturing',
    category: 'IoT Analytics',
    tags: ['Python', 'TensorFlow', 'Time Series', 'IoT'],
    description: 'Designed predictive maintenance system using IoT sensor data and deep learning to forecast equipment failures 72 hours in advance, reducing unplanned downtime by 45% and maintenance costs by $1.8M.',
    challenge: 'Manufacturing facility experienced frequent unexpected equipment failures causing production delays and costly emergency repairs. Traditional preventive maintenance schedules were inefficient and reactive.',
    methodology: 'Implemented LSTM neural networks for time series analysis of sensor data (temperature, vibration, pressure). Created anomaly detection algorithms using autoencoders. Developed failure prediction models with 72-hour forecast window. Integrated real-time monitoring dashboard with alert system.',
    outcomes: [
    'Predicted failures 72 hours in advance with 87% accuracy',
    'Reduced unplanned downtime by 45%',
    'Decreased maintenance costs by $1.8M annually',
    'Extended equipment lifespan by 18 months on average'],

    metrics: [
    { label: 'Prediction Window', value: '72hrs', icon: 'ClockIcon' },
    { label: 'Accuracy', value: '87%', icon: 'ShieldCheckIcon' },
    { label: 'Downtime Reduction', value: '45%', icon: 'ArrowTrendingDownIcon' },
    { label: 'Cost Savings', value: '$1.8M', icon: 'CurrencyDollarIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'Deep Learning' },
    { name: 'LSTM', category: 'Algorithm' },
    { name: 'Keras', category: 'Framework' },
    { name: 'IoT Sensors', category: 'Hardware' }],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b505a60e-1763644165085.png",
    alt: 'Industrial manufacturing equipment with digital sensors and monitoring screens showing predictive maintenance analytics',
    githubUrl: 'https://github.com/shreya/predictive-maintenance',
    duration: '5 months',
    status: 'completed',
    featured: true
  },
  {
    id: 4,
    title: 'Healthcare Data Analytics Platform',
    category: 'Data Engineering',
    tags: ['Python', 'SQL', 'ETL', 'Power BI', 'Azure'],
    description: 'Architected comprehensive healthcare analytics platform processing 500K+ patient records, enabling data-driven clinical decisions and reducing diagnosis time by 30% through intelligent insights.',
    challenge: 'Hospital network struggled with fragmented patient data across multiple systems, making it difficult to identify treatment patterns, track outcomes, and optimize resource allocation. Data quality issues and lack of standardization hindered analysis.',
    methodology: 'Built robust ETL pipeline using Python and SQL to integrate data from 5 different hospital systems. Implemented data quality checks and standardization protocols. Created dimensional data warehouse with star schema. Developed interactive Power BI dashboards for clinical and operational insights.',
    outcomes: [
    'Integrated 500K+ patient records from 5 hospital systems',
    'Reduced diagnosis time by 30% through pattern recognition',
    'Improved data quality from 67% to 94% accuracy',
    'Enabled real-time bed occupancy and resource optimization'],

    metrics: [
    { label: 'Patient Records', value: '500K+', icon: 'UserGroupIcon' },
    { label: 'Data Quality', value: '94%', icon: 'CheckBadgeIcon' },
    { label: 'Diagnosis Time', value: '-30%', icon: 'ClockIcon' },
    { label: 'Systems Integrated', value: '5', icon: 'ServerIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'SQL', category: 'Database' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'ETL', category: 'Data Pipeline' }],

    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
    alt: 'Healthcare professional reviewing patient data analytics on tablet with medical charts and graphs in modern hospital setting',
    githubUrl: 'https://github.com/shreya/healthcare-analytics',
    duration: '6 months',
    status: 'completed',
    featured: false
  },
  {
    id: 5,
    title: 'E-commerce Recommendation Engine',
    category: 'Machine Learning',
    tags: ['Python', 'Collaborative Filtering', 'Deep Learning', 'AWS'],
    description: 'Developed personalized recommendation system using hybrid collaborative filtering and deep learning, increasing average order value by 28% and customer engagement by 42%.',
    challenge: 'E-commerce platform had generic product recommendations leading to low conversion rates and poor customer engagement. Existing rule-based system failed to capture complex user preferences and behavior patterns.',
    methodology: 'Implemented hybrid recommendation system combining collaborative filtering (user-user and item-item) with content-based filtering. Used neural collaborative filtering with embeddings for deep learning approach. Applied A/B testing framework to validate improvements. Deployed on AWS with real-time inference capabilities.',
    outcomes: [
    'Increased average order value by 28%',
    'Improved click-through rate by 42%',
    'Achieved 0.89 precision@10 for recommendations',
    'Reduced cart abandonment rate by 19%'],

    metrics: [
    { label: 'Order Value', value: '+28%', icon: 'ArrowTrendingUpIcon' },
    { label: 'Engagement', value: '+42%', icon: 'CursorArrowRaysIcon' },
    { label: 'Precision@10', value: '0.89', icon: 'TargetIcon' },
    { label: 'Cart Abandonment', value: '-19%', icon: 'ShoppingCartIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'Collaborative Filtering', category: 'Algorithm' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Redis', category: 'Caching' }],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_116b592ab-1763644166575.png",
    alt: 'Online shopping interface showing personalized product recommendations with colorful items and ratings on laptop screen',
    githubUrl: 'https://github.com/shreya/recommendation-engine',
    liveUrl: 'https://recommendation-demo.herokuapp.com',
    duration: '4 months',
    status: 'completed',
    featured: false
  },
  {
    id: 6,
    title: 'Financial Fraud Detection System',
    category: 'Machine Learning',
    tags: ['Python', 'Anomaly Detection', 'Real-time Processing', 'Kafka'],
    description: 'Built real-time fraud detection system processing 1M+ transactions daily with 95% accuracy, preventing $4.2M in fraudulent transactions while maintaining low false positive rate.',
    challenge: 'Financial institution faced increasing sophisticated fraud attempts with traditional rule-based systems generating excessive false positives (12% rate) and missing emerging fraud patterns. Real-time detection was critical for transaction approval.',
    methodology: 'Developed ensemble model combining isolation forest for anomaly detection, XGBoost for classification, and LSTM for sequential pattern recognition. Implemented streaming architecture with Apache Kafka for real-time processing. Created adaptive learning system to detect new fraud patterns. Applied SHAP for model explainability.',
    outcomes: [
    'Achieved 95% fraud detection accuracy',
    'Reduced false positive rate from 12% to 2.3%',
    'Prevented $4.2M in fraudulent transactions',
    'Processing latency under 100ms for real-time decisions'],

    metrics: [
    { label: 'Accuracy', value: '95%', icon: 'ShieldCheckIcon' },
    { label: 'False Positives', value: '2.3%', icon: 'ExclamationTriangleIcon' },
    { label: 'Fraud Prevented', value: '$4.2M', icon: 'BanknotesIcon' },
    { label: 'Latency', value: '<100ms', icon: 'BoltIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'XGBoost', category: 'Algorithm' },
    { name: 'Kafka', category: 'Streaming' },
    { name: 'LSTM', category: 'Deep Learning' },
    { name: 'SHAP', category: 'Explainability' }],

    image: "https://images.unsplash.com/photo-1654588836190-d8e6c12122f8",
    alt: 'Financial security concept with digital lock icon overlaying credit card and transaction data on dark background',
    githubUrl: 'https://github.com/shreya/fraud-detection',
    duration: '5 months',
    status: 'completed',
    featured: false
  },
  {
    id: 7,
    title: 'Supply Chain Optimization Model',
    category: 'Operations Research',
    tags: ['Python', 'Optimization', 'Linear Programming', 'Tableau'],
    description: 'Developed optimization model for supply chain network reducing logistics costs by 22% and improving delivery times by 18% through intelligent route planning and inventory management.',
    challenge: 'Logistics company struggled with inefficient route planning, suboptimal warehouse locations, and excess inventory costs. Manual planning processes could not handle complexity of multi-modal transportation and dynamic demand patterns.',
    methodology: 'Applied linear programming and mixed-integer optimization using PuLP library. Developed demand forecasting models using ARIMA and Prophet. Created network flow optimization for route planning. Implemented inventory optimization using EOQ and safety stock calculations. Built Tableau dashboards for scenario analysis.',
    outcomes: [
    'Reduced logistics costs by 22% ($3.1M annually)',
    'Improved on-time delivery from 78% to 96%',
    'Decreased inventory holding costs by 15%',
    'Optimized warehouse network reducing facilities from 12 to 8'],

    metrics: [
    { label: 'Cost Reduction', value: '22%', icon: 'ArrowTrendingDownIcon' },
    { label: 'On-time Delivery', value: '96%', icon: 'TruckIcon' },
    { label: 'Inventory Savings', value: '15%', icon: 'CubeIcon' },
    { label: 'Annual Savings', value: '$3.1M', icon: 'CurrencyDollarIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'PuLP', category: 'Optimization' },
    { name: 'Linear Programming', category: 'Algorithm' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Prophet', category: 'Forecasting' }],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a82bc61-1763644164749.png",
    alt: 'Warehouse logistics operation with workers managing inventory and digital supply chain network overlay showing optimization routes',
    githubUrl: 'https://github.com/shreya/supply-chain-optimization',
    duration: '4 months',
    status: 'completed',
    featured: false
  },
  {
    id: 8,
    title: 'Climate Data Analysis Platform',
    category: 'Data Science',
    tags: ['Python', 'Time Series', 'Geospatial', 'Visualization'],
    description: 'Created comprehensive climate data analysis platform processing 20 years of meteorological data, identifying temperature trends and precipitation patterns with interactive geospatial visualizations.',
    challenge: 'Environmental research team needed to analyze vast amounts of historical climate data from multiple sources to identify long-term trends, seasonal patterns, and regional variations. Data was fragmented across different formats and required complex statistical analysis.',
    methodology: 'Aggregated data from NOAA, NASA, and regional weather stations. Applied time series decomposition, trend analysis using Mann-Kendall test, and seasonal pattern detection. Implemented geospatial analysis using GeoPandas and Folium. Created interactive visualizations with Plotly and Dash for exploratory analysis.',
    outcomes: [
    'Analyzed 20 years of climate data from 500+ stations',
    'Identified 1.2°C temperature increase trend over study period',
    'Detected 15% increase in extreme weather events',
    'Published findings in 3 peer-reviewed journals'],

    metrics: [
    { label: 'Data Points', value: '50M+', icon: 'ChartBarIcon' },
    { label: 'Weather Stations', value: '500+', icon: 'MapPinIcon' },
    { label: 'Study Period', value: '20 years', icon: 'CalendarIcon' },
    { label: 'Publications', value: '3', icon: 'DocumentTextIcon' }],

    technologies: [
    { name: 'Python', category: 'Language' },
    { name: 'Pandas', category: 'Data Processing' },
    { name: 'GeoPandas', category: 'Geospatial' },
    { name: 'Plotly', category: 'Visualization' },
    { name: 'Dash', category: 'Dashboard' }],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16f03e2f3-1763644165994.png",
    alt: 'Climate scientist analyzing weather data on computer with multiple screens showing temperature maps and precipitation charts',
    githubUrl: 'https://github.com/shreya/climate-data-analysis',
    liveUrl: 'https://climate-analysis-demo.streamlit.app',
    duration: '6 months',
    status: 'in-progress',
    featured: false
  }];


  const categories = ['All', 'Machine Learning', 'NLP', 'IoT Analytics', 'Data Engineering', 'Operations Research', 'Data Science'];

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
    const searchMatch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return categoryMatch && tagMatch && searchMatch;
  });

  const handleProjectClick = (project: Project) => {
    if (!isHydrated) return;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleCategoryChange = (category: string) => {
    if (!isHydrated) return;
    setSelectedCategory(category);
  };

  const handleTagToggle = (tag: string) => {
    if (!isHydrated) return;
    setSelectedTags((prev) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSearchChange = (query: string) => {
    if (!isHydrated) return;
    setSearchQuery(query);
  };

  const handleClearFilters = () => {
    if (!isHydrated) return;
    setSelectedCategory('All');
    setSelectedTags([]);
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-16 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </main>);

  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <ProjectHero totalProjects={projects.length} featuredCount={projects.filter((p) => p.featured).length} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectFilters
          categories={categories}
          selectedCategory={selectedCategory}
          allTags={allTags}
          selectedTags={selectedTags}
          searchQuery={searchQuery}
          onCategoryChange={handleCategoryChange}
          onTagToggle={handleTagToggle}
          onSearchChange={handleSearchChange}
          onClearFilters={handleClearFilters}
          resultCount={filteredProjects.length} />


        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick} />


        {selectedProject &&
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal} />

        }
      </div>
    </main>);

};

export default ProjectsInteractive;