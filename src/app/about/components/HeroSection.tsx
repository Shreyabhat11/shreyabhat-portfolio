'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">Data Science Professional</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Transforming Data Into
              <span className="text-gradient block mt-2">Actionable Insights</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Engineering precision meets data science innovation. I bridge traditional engineering discipline with modern analytical methodologies to extract meaningful insights from complex data.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">CGPA</p>
                  <p className="text-lg font-semibold text-text-primary">8.5/10</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="BriefcaseIcon" size={24} className="text-accent" />
                <div>
                  <p className="text-sm text-text-secondary">Experience</p>
                  <p className="text-lg font-semibold text-text-primary">CIPLA Ltd</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 px-4 py-3 bg-card rounded-lg shadow-subtle">
                <Icon name="ChartBarIcon" size={24} className="text-trust" />
                <div>
                  <p className="text-sm text-text-secondary">Specialization</p>
                  <p className="text-lg font-semibold text-text-primary">ML & Analytics</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl shadow-elevated p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative h-96 sm:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_10f6355a8-1763299772313.png"
                    alt="Professional woman data scientist with dark hair in business casual attire working on laptop with data visualizations in modern office setting"
                    className="w-full h-full object-cover" />

                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-trust text-white px-6 py-4 rounded-xl shadow-elevated transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="text-sm font-medium">Available for</p>
                <p className="text-xl font-bold">Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}