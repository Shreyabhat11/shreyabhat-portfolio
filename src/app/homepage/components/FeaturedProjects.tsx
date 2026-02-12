import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

import type { Project } from '@/type/project';

const FeaturedProjects = () => {
  const projects: Project[] = [
  
{
    id: 1,
    title: "Generative AI Test Data Synthesis",
    category: "Generative AI",
    description:
      "Generated realistic synthetic datasets using generative models to preserve privacy while maintaining statistical similarity to real-world data.",
    tags: ["GAN", "Synthetic Data"],
    technologies: ["Python", "GANs", "TensorFlow"],
    githubUrl: "https://github.com/shreya/test-data-synthesis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Loading",
    status: 'completed'
  },

  {
    id: 2,
    title: "AI Hallucination Detector",
    category: "LLM Evaluation",
    description:
      "Designed a system to detect hallucinations in LLM outputs by validating responses against factual references and confidence scoring.",
    tags: ["LLM", "Evaluation"],
    technologies: ["Python", "LLMs", "Streamlit"],
    githubUrl: "https://github.com/shreya/ai-hallucination-detector",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    alt: "Loading",
    status: 'completed'
  },
  {
    id: 3,
    title: "Resume Skill Matcher",
    category: "NLP",
    description:
      "Developed an NLP system that matches resumes to job descriptions by extracting skills and computing similarity scores to automate candidate screening.",
    tags: ["NLP", "Text Processing"],
    technologies: ["Python", "TF-IDF", "Cosine Similarity", "Flask"],
    githubUrl: "https://github.com/shreya/resume-skill-matcher",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    alt: "Loading",
    status: 'completed'
  }];


  return (
    <section id="featured-work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
            <Icon name="SparklesIcon" size={18} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Recent Projects
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Showcasing data-driven solutions that transform business challenges into measurable outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
          <div
            key={project.id}
            className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt ?? project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-250">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-2 py-1 bg-muted rounded text-xs font-medium text-text-secondary">

                      {tag}
                    </span>
                )}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {project.metrics?.map((metric) =>
                <div key={metric.label}>
                      <p className="text-xs text-text-secondary">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-accent">
                        {metric.value}
                      </p>
                    </div>
                )}
                </div>

                <Link
                href="/projects"
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-250 font-medium focus-ring rounded-md">

                  <span>View Details</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 shadow-card hover:shadow-elevated focus-ring">

            <span>View All Projects</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;