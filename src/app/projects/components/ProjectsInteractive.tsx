'use client';

import { useState, useEffect } from 'react';
import ProjectHero from './ProjectHero';
import ProjectFilters from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';

import type { Project } from '@/type/project';

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
      title: "Credit Card Fraud Detection",
      category: "Machine Learning",
      description:
        "Built an anomaly detection system using classification models to identify fraudulent credit card transactions with high precision and recall, minimizing financial losses.",
      tags: ["Python", "Scikit-learn", "XGBoost", "EDA"],
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
      githubUrl: "https://github.com/Shreyabhat11/Credit-card-fraud-detection",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      alt: 'Climate scientist analyzing weather data on computer with multiple screens showing temperature maps and precipitation charts',
      status: 'completed'
    },

    {
      id: 2,
      title: "Netflix Data Analysis",
      category: "Data Analytics",
      description:
        "Performed exploratory data analysis on Netflix titles to uncover trends in genres, content types, release patterns, and viewer preferences using interactive visualizations.",
      tags: ["Python", "EDA", "Visualization"],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Shreyabhat11/netflix-data-analysis",
      image: "https://images.unsplash.com/photo-1586899028174-e7098604235b",
      alt: 'Climate scientist analyzing weather data on computer with multiple screens showing temperature maps and precipitation charts',
      status: 'completed'
    },

    {
      id: 3,
      title: "Telecom Churn Data Analysis",
      category: "Analytics",
      description:
        "Analyzed customer behavior and service usage data to identify churn drivers and business insights that improve retention strategies.",
      tags: ["SQL", "Python", "EDA"],
      technologies: ["Python", "SQL", "Power BI"],
      githubUrl: "https://github.com/Shreyabhat11/Telecom-customer-churn-EDA",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: 'Climate scientist analyzing weather data on computer with multiple screens showing temperature maps and precipitation charts',
      status: 'completed'
    },

    {
      id: 4,
      title: "Movie Recommendation System",
      category: "Machine Learning",
      description:
        "Implemented collaborative filtering and content-based recommendation models to suggest personalized movies based on user preferences.",
      tags: ["Recommendation", "ML"],
      technologies: ["Python", "Scikit-learn", "Cosine Similarity"],
      githubUrl: "https://github.com/Shreyabhat11/Movie_recommendation",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      alt: "Loading",
      status: 'completed'

    },

    {
      id: 5,
      title: "Resume Skill Matcher",
      category: "NLP",
      description:
        "Developed an NLP system that matches resumes to job descriptions by extracting skills and computing similarity scores to automate candidate screening.",
      tags: ["NLP", "Text Processing"],
      technologies: ["Python", "TF-IDF", "Cosine Similarity", "Flask"],
      githubUrl: "https://github.com/Shreyabhat11/resume-matcher",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 6,
      title: "Healthify Clone",
      category: "Full Stack",
      description:
        "Built a health tracking web app to monitor diet, calories, and workouts with personalized insights and progress visualization.",
      tags: ["React", "Full Stack"],
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Shreyabhat11/Healthify_clone",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 7,
      title: "Structural Defect Analyser",
      category: "Computer Vision",
      description:
        "Used computer vision techniques to detect cracks and structural defects from images for automated infrastructure inspection.",
      tags: ["CV", "Deep Learning"],
      technologies: ["TensorFlow", "OpenCV", "CNN"],
      githubUrl: "https://github.com/Shreyabhat11/structural_defect",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 8,
      title: "RAG Chatbot",
      category: "Generative AI",
      description:
        "Built a Retrieval-Augmented Generation chatbot that answers questions using custom documents with vector search and LLMs.",
      tags: ["LLM", "RAG"],
      technologies: ["LangChain", "FAISS", "OpenAI API", "Python"],
      githubUrl: "https://github.com/Shreyabhat11/RAG_chatbot",
      liveUrl: "https://rag-chatbot-demo.vercel.app",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 9,
      title: "Generative AI Test Data Synthesis",
      category: "Generative AI",
      description:
        "Generated realistic synthetic datasets using generative models to preserve privacy while maintaining statistical similarity to real-world data.",
      tags: ["GAN", "Synthetic Data"],
      technologies: ["Python", "GANs", "TensorFlow"],
      githubUrl: "https://github.com/Shreyabhat11/Synthetic_data_generation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 10,
      title: "AI Hallucination Detector",
      category: "LLM Evaluation",
      description:
        "Designed a system to detect hallucinations in LLM outputs by validating responses against factual references and confidence scoring.",
      tags: ["LLM", "Evaluation"],
      technologies: ["Python", "LLMs", "Streamlit"],
      githubUrl: "https://github.com/Shreyabhat11/ai-hallucination-detector",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      alt: "Loading",
      status: 'completed'
    },

    {
      id: 11,
      title: "AI Symptom Checker",
      category: "Healthcare AI",
      description:
        "Built an AI-powered medical assistant that predicts possible diseases from symptoms and suggests preventive measures, diet, and workouts.",
      tags: ["Healthcare", "ML"],
      technologies: ["Django", "ML Models", "Python"],
      githubUrl: "https://github.com/Shreyabhat11/ai_symptom_checker",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      alt: "Loading",
      status: 'completed'
    },
    {
      id: 12,
      title: "Jarvis Agent",
      category: "AI Assistant / Automation",
      description:
        "Developed a JARVIS-like AI assistant that integrates LLMs, voice/text commands, and task automation. It can answer queries, summarize content, execute workflows, and assist daily productivity across desktop and mobile devices.",
      tags: ["AI", "Automation", "LLM"],
      technologies: [
        "Python",
        "Flask",
        "React",
        "Gemini API",
        "Speech Recognition",
        "REST APIs"
      ],
      githubUrl: "https://github.com/Shreyabhat11/jarvis-agent",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      alt: "AI assistant dashboard interface",
      status: "completed"
    },
    {
      id: 13,
      title: "AI MOM Generator",
      category: "Productivity AI",
      description:
        "Built an AI-powered Meeting Minutes (MOM) generator that converts meeting audio or notes into structured summaries, action items, and decisions using NLP and LLMs. Helps teams save time and automate documentation.",
      tags: ["NLP", "Productivity", "AI"],
      technologies: [
        "Python",
        "Streamlit",
        "Gemini API",
        "Speech-to-Text",
        "Text Summarization",
        "NLP"
      ],
      githubUrl: "https://github.com/Shreyabhat11/MOM_generator",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      alt: "AI meeting notes summarization app",
      status: "completed"
    }


  ];
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