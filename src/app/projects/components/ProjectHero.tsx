import Icon from '@/components/ui/AppIcon';

interface ProjectHeroProps {
  totalProjects: number;
  featuredCount: number;
}

const ProjectHero = ({ totalProjects, featuredCount }: ProjectHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Icon name="BriefcaseIcon" size={20} className="text-white" />
            <span className="text-white text-sm font-medium">Portfolio Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Data Science Projects
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforming complex data into actionable insights through innovative machine learning solutions, analytical precision, and measurable business impact
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{totalProjects}</div>
              <div className="text-white/80 text-sm mt-1">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{featuredCount}</div>
              <div className="text-white/80 text-sm mt-1">Featured Works</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">$12M+</div>
              <div className="text-white/80 text-sm mt-1">Business Impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">90%+</div>
              <div className="text-white/80 text-sm mt-1">Avg Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;