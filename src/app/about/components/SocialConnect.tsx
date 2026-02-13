'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

export default function SocialConnect() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreyabhat11/',
      icon: 'UserGroupIcon',
      description: 'Connect professionally',
      color: 'hover:bg-[#0077B5] hover:text-white'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Shreyabhat11',
      icon: 'CodeBracketIcon',
      description: 'View my code',
      color: 'hover:bg-[#333] hover:text-white'
    }
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/shreya_analytics',
    //   icon: 'ChatBubbleLeftRightIcon',
    //   description: 'Follow updates',
    //   color: 'hover:bg-[#1DA1F2] hover:text-white'
    // },
    // {
    //   name: 'Medium',
    //   url: 'https://medium.com/@shreya-datascience',
    //   icon: 'DocumentTextIcon',
    //   description: 'Read my articles',
    //   color: 'hover:bg-[#000] hover:text-white'
    // }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shreyabhat545@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="LinkIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            I'm always open to discussing data science projects, collaboration opportunities, or simply connecting with fellow professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-card rounded-xl shadow-card p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-elevated group ${link.color}`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-muted group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                  <Icon name={link.icon as any} size={28} className="text-text-primary group-hover:text-current" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-current mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-text-secondary group-hover:text-current/80">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-trust/10 rounded-2xl shadow-card p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-lg text-text-secondary mb-6">
                  Whether you have a project in mind, want to discuss data science opportunities, or simply want to connect, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-subtle hover:shadow-card"
                  >
                    <Icon name="DocumentTextIcon" size={20} />
                    <span>View Resume</span>
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-subtle hover:shadow-card"
                  >
                    <Icon name="BriefcaseIcon" size={20} />
                    <span>View Projects</span>
                  </Link>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-card p-6 sm:p-8">
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
                  <Icon name="EnvelopeIcon" size={24} className="text-accent" />
                  <span>Email Me</span>
                </h4>
                <div className="flex items-center space-x-3 mb-4">
                  <input
                    type="text"
                    value="shreyabhat545@gmail.com"
                    readOnly
                    className="flex-1 px-4 py-3 bg-muted rounded-lg text-text-primary font-medium"
                  />
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0 px-4 py-3 bg-trust text-white rounded-lg hover:bg-trust/90 transition-colors duration-300 focus-ring"
                    aria-label="Copy email address"
                  >
                    <Icon name={copiedEmail ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={20} />
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-sm text-trust flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} />
                    <span>Email copied to clipboard!</span>
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-border">
                  <h5 className="text-sm font-semibold text-text-primary mb-3">Quick Links</h5>
                  <div className="space-y-2">
                    <Link
                      href="/skills"
                      className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      <Icon name="ChevronRightIcon" size={16} />
                      <span className="text-sm">View Technical Skills</span>
                    </Link>
                    <Link
                      href="/experience"
                      className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      <Icon name="ChevronRightIcon" size={16} />
                      <span className="text-sm">Professional Experience</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary">
            <span className="inline-flex items-center space-x-2">
              <Icon name="MapPinIcon" size={18} />
              <span>Based in India | Open to Remote Opportunities</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}