'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear()?.toString());
  }, []);

  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
  ];

  const resources = [
    { label: 'Resume', href: '/resume' },
    { label: 'GitHub', href: 'https://github.com/Shreyabhat11', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreya-bhat-3169b1248/', external: true },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-lg font-semibold">Shreya</span>
                <span className="text-xs text-white/70 block -mt-1">
                  Data Scientist
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Transforming complex data into actionable insights through analytical excellence and innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-250 focus-ring rounded-md"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources?.map((link) => (
                <li key={link?.href}>
                  {link?.external ? (
                    <a
                      href={link?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors duration-250 focus-ring rounded-md"
                    >
                      {link?.label}
                    </a>
                  ) : (
                    <Link
                      href={link?.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-250 focus-ring rounded-md"
                    >
                      {link?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Shreyabhat11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-250 focus-ring"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-bhat-3169b1248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-250 focus-ring"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserGroupIcon" size={20} />
              </a>
              <a
                href="mailto:shreyabhat224@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-250 focus-ring"
                aria-label="Email Contact"
              >
                <Icon name="EnvelopeIcon" size={20} />
              </a>
            </div>
            <p className="text-sm text-white/70 mt-4">
              shreyabhat224@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-white/70">
            {isHydrated ? `© ${currentYear}` : '© 2025'} Shreya. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;