'use client';

import { useState, useEffect } from 'react';
import ResumeHeader from './ResumeHeader';
import PersonalInfo from './PersonalInfo';
import ProfessionalSummary from './ProfessionalSummary';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import ProjectsSection from './ProjectsSection';
import ContactCTA from './ContactCTA';

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export default function ResumeInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const personalInfo = {
    name: "Shreya Bhat",
    title: "Python | SQL | Machine Learning | Data Science Learner",
    email: "shreyabhat545@gmail.com",
    phone: "+91 9380040180",
    location: "Bangalore, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/shreya-bhat-3169b1248/",
    github: "https://github.com/Shreyabhat11",
    portfolio: "https://shreya-portfolio.com",
  };

  const professionalSummary = `Analytical and detail-oriented engineering professional transitioning into data analysis and data
science. Strong background in instrumentation engineering with hands-on experience in machine
learning, predictive modeling, and data-driven problem-solving. Passionate about leveraging Python,
SQL, and statistical methods to deliver insights, optimize processes, and support decision-making.`;

  const experiences: Experience[] = [
    {
      id: 1,
      company: "CIPLA Ltd",
      position: "Engineering Trainee",
      location: "Goa, India",
      duration: "June 2024 - June 2025",
      responsibilities: [
        "Monitored and analyzed real-time process data using BMS/SCADA systems, improving equipment performance and reliability.",
        "Maintained calibration and performance logs of critical instruments, supporting data-driven predictive maintenance and reducing downtime.",
        "Prepared structured reports and visualizations of sensor data, reducing troubleshooting time by 15% and supporting informed operational decisions.",
        "Collaborated with cross-functional teams to apply data insights in pharmaceutical manufacturing and quality control."
      ],
      achievements: [
        "Led a team project that saved ₹2.5 crore annually through supply chain optimization",
        "Received 'Innovation Excellence Award' for implementing ML-based anomaly detection system",
        "Published internal research paper on predictive maintenance strategies",
        "Mentored 3 junior analysts in data science best practices and tools",
      ],
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Electronics and Instrumentation Engineering",
      institution: "Bangalore Institute of Technology",
      location: "Bangalore, India",
      duration: "2020 - 2024",
      cgpa: "8.5/10.0",
      highlights: [
        "Specialized in Machine Learning and Data Analytics",
        "Final year project: 'Predictive Healthcare Analytics using Deep Learning' - Grade: A+",
        "Member of Data Science Club and AI Research Group",
        "Published paper in IEEE conference on 'Neural Networks for Medical Diagnosis'",
      ],
    },
    {
      id: 2,
      degree: "PGP in Data Science with Specialization in Generative AI",
      institution: "Great learning",
      location: "Bangalore, India",
      duration: "2025 - 2026",
      cgpa: "92.4%",
      highlights: [
        "Science stream with Mathematics, Physics, Chemistry",
        "School topper in Mathematics",
      ],
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python(Adv)", "SQL(Adv)", "REST APIs", "HTML", "CSS", "Javascript"],
    },
    {
      category: "Data Science & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "Hypothesis Testing and Statistical analysis", " Neural Networks", "Model Evaluation"],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
    },
    {
      category: "Model Deployment & Cloud",
      skills: ["Gradio", "Flask", "Django", "AWS Lambda", "REST APIs", "Streamlit", "MERN stack(basic)"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "Jupyter", "VS Code", "Google Colab"],
    },
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "September 2023",
      credentialId: "ML-CERT-2023-9876",
    },
    {
      id: 2,
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "July 2023",
      credentialId: "DL-SPEC-2023-5432",
    },
    {
      id: 3,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-CCP-2023-1234",
    },
    {
      id: 4,
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "January 2023",
      credentialId: "IBM-DS-2023-7890",
    },
    {
      id: 5,
      name: "Advanced SQL for Data Scientists",
      issuer: "DataCamp",
      date: "November 2022",
      credentialId: "DC-SQL-2022-4567",
    },
    {
      id: 6,
      name: "Python for Data Science",
      issuer: "Microsoft",
      date: "August 2022",
      credentialId: "MS-PY-2022-3456",
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: "Medicine recommendation system using ML",
      description:
        "End-to-end ML pipeline for predicting the diagnosis and recommending medicines based on patient data.",
      technologies: ["Python", "Machine Learning", "Flask"],
      highlights: [
        "Developed ML models to predict diseases from symptoms with high accuracy.",
        "Deployed via Flask, providing preventive health insights (diet, workout, medication) to enhance user engagement.",
        "Implemented feature engineering and data preprocessing for better model accuracy and interpretability.",
        "Enabled real-time symptom-based predictions through a user-friendly Flask interface connected to the ML backend.",
      ],
    },
    {
      id: 2,
      name: "Human activity recognition using smartphone data",
      description:
        "Processed smartphone sensor data to train classification models (DT, RF, SVM, ANN).",
      technologies: ['Python', 'Scikit-learn', 'Machine Learning'],
      highlights: [
        "Achieved strong performance in recognizing unseen activity patterns, improving model generalizability.",
        "Applied time-series feature extraction and dimensionality reduction to enhance model efficiency.",
        "Validated results through confusion matrices and cross-validation, demonstrating robust multi-class classification accuracy.",
      ],
    },
    {
      id: 3,
      name: "Customer Churn Prediction Model",
      description:
        "Predictive analytics solution for identifying at-risk customers and recommending retention strategies.",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Tableau"],
      highlights: [
        "Achieved 89% precision in churn prediction",
        "Identified top 15 factors influencing customer retention",
        "Enabled proactive retention campaigns saving 12% customer base",
        "Created interactive dashboard for business stakeholders",
      ],
    },
  ];

  const handleDownloadPDF = () => {
    if (!isHydrated) return;
    alert('PDF download initiated. In production, this would generate and download a PDF version of the resume.');
  };

  const handleDownloadWord = () => {
    if (!isHydrated) return;
    alert('Word document download initiated. In production, this would generate and download a .docx version of the resume.');
  };

  const handlePrint = () => {
    if (!isHydrated) return;
    window.print();
  };

  const lastUpdated = "November 20, 2025";

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-card border-b border-border"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-96 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader
        onDownloadPDF={handleDownloadPDF}
        onDownloadWord={handleDownloadWord}
        onPrint={handlePrint}
        lastUpdated={lastUpdated}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-lg shadow-card p-6 sm:p-8 mb-8 print:shadow-none print:p-0">
          <PersonalInfo {...personalInfo} />
          <ProfessionalSummary summary={professionalSummary} />
          <ExperienceSection experiences={experiences} />
          <EducationSection education={education} />
          <SkillsSection skillCategories={skillCategories} />
          <ProjectsSection projects={projects} />
          <CertificationsSection certifications={certifications} />
        </div>

        <ContactCTA
          email={personalInfo.email}
          linkedin={personalInfo.linkedin}
          phone={personalInfo.phone}
        />
      </main>

      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          header,
          .no-print {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          main {
            max-width: 100%;
            padding: 0;
          }
          .bg-card {
            background: white;
          }
          .border-l-2 {
            border-left-width: 1px;
          }
          * {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}