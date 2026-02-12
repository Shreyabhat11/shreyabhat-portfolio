'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  testimonial: string;
  relationship: string;
}

const Testimonials = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Senior Manager - Data Science",
    company: "CIPLA Ltd",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d77ea83-1763292305993.png",
    alt: "Professional headshot of middle-aged Indian man with gray hair and glasses in navy blue suit",
    testimonial: "Shreya has been instrumental in transforming our data analytics capabilities. Her ability to bridge engineering principles with advanced data science has resulted in significant operational improvements. She consistently delivers high-quality solutions and mentors junior team members effectively.",
    relationship: "Direct Manager"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Lead Data Engineer",
    company: "CIPLA Ltd",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1acd953c0-1763293371113.png",
    alt: "Professional portrait of young Indian woman with long black hair in white blazer smiling confidently",
    testimonial: "Working with Shreya has been a great learning experience. Her analytical approach to problem-solving and attention to detail are exceptional. She has a unique talent for explaining complex technical concepts in simple terms, making collaboration seamless across teams.",
    relationship: "Colleague"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Operations Head",
    company: "CIPLA Ltd",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e86435d4-1763295802223.png",
    alt: "Professional headshot of Indian man with short black hair and beard in gray suit",
    testimonial: "Shreya's data-driven insights have directly impacted our operational efficiency. The predictive models she developed have saved us significant costs while improving quality metrics. Her work ethic and commitment to excellence are truly commendable.",
    relationship: "Cross-functional Partner"
  }];


  if (!isHydrated) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) =>
        <div key={i} className="bg-card rounded-xl p-6 shadow-card animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-muted rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded"></div>
              <div className="h-3 bg-muted rounded"></div>
              <div className="h-3 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        )}
      </div>);

  }

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
      <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <Icon name="ChatBubbleLeftRightIcon" size={28} className="text-primary" />
        Professional Recommendations
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) =>
        <div
          key={testimonial.id}
          className="bg-background rounded-lg p-6 hover:bg-muted/50 transition-all duration-300 group">

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-250">
                <AppImage
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-full object-cover" />

              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary truncate">{testimonial.name}</h4>
                <p className="text-sm text-text-secondary truncate">{testimonial.role}</p>
                <p className="text-xs text-primary font-medium">{testimonial.company}</p>
              </div>
            </div>

            <div className="mb-4">
              <Icon name="QuoteIcon" size={24} className="text-accent/30" />
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-6">
              {testimonial.testimonial}
            </p>

            <div className="flex items-center gap-2 text-xs text-text-tertiary">
              <Icon name="UserIcon" size={14} />
              <span>{testimonial.relationship}</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://linkedin.com/in/shreya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-250 focus-ring shadow-subtle hover:shadow-card">

          <Icon name="UserGroupIcon" size={20} />
          View All Recommendations on LinkedIn
        </a>
      </div>
    </div>);

};

export default Testimonials;