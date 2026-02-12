import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative data science projects and explore new opportunities. Whether you're looking for a data scientist, ML engineer, or analytical problem solver, let's connect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-accent rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-elevated focus-ring w-full sm:w-auto justify-center"
          >
            <Icon name="DocumentTextIcon" size={20} />
            <span>Download Resume</span>
          </Link>

          <a
            href="mailto:shreyabhat224@gmail.com.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 focus-ring w-full sm:w-auto justify-center"
          >
            <Icon name="EnvelopeIcon" size={20} />
            <span>Get In Touch</span>
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center space-x-6">
          <a
            href="https://github.com/Shreyabhat11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-250 focus-ring"
            aria-label="GitHub Profile"
          >
            <Icon name="CodeBracketIcon" size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-bhat-3169b1248/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-250 focus-ring"
            aria-label="LinkedIn Profile"
          >
            <Icon name="UserGroupIcon" size={24} />
          </a>

          <a
            href="mailto:shreyabhat224@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-250 focus-ring"
            aria-label="Email Contact"
          >
            <Icon name="EnvelopeIcon" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;