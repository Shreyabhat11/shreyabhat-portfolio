'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'About', href: '/about', icon: 'UserIcon' },
    { label: 'Skills', href: '/skills', icon: 'AcademicCapIcon' },
    { label: 'Projects', href: '/projects', icon: 'BriefcaseIcon' },
    { label: 'Experience', href: '/experience', icon: 'ClockIcon' },
  ];

  const moreItems: NavigationItem[] = [
    { label: 'Resume', href: '/resume', icon: 'DocumentTextIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-glass shadow-card'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link
            href="/homepage"
            className="flex items-center space-x-2 group focus-ring rounded-md"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-trust rounded-full border-2 border-background"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-text-primary">
                Shreya Bhat
              </span>
              <span className="text-xs text-text-secondary block -mt-1">
                Data Scientist
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-250 focus-ring ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250 focus-ring flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDownIcon" size={16} />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-popover rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 transform origin-top-right">
                <div className="py-2">
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-250 ${
                        isActive(item.href)
                          ? 'bg-muted text-text-primary' :'text-text-secondary hover:bg-muted hover:text-text-primary'
                      }`}
                    >
                      {item.icon && <Icon name={item.icon as any} size={18} />}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://github.com/Shreyabhat11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250 focus-ring"
              aria-label="GitHub Profile"
            >
              <Icon name="CodeBracketIcon" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyabhat11/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250 focus-ring"
              aria-label="LinkedIn Profile"
            >
              <Icon name="UserGroupIcon" size={20} />
            </a>
            <Link
              href="/resume"
              className="px-4 py-2 bg-cta text-white rounded-md text-sm font-semibold hover:bg-cta/90 transition-all duration-250 focus-ring transform hover:-translate-y-0.5 shadow-subtle hover:shadow-card"
            >
              Download Resume
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-colors duration-250 focus-ring"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 overflow-y-auto animate-fade-in">
          <nav className="px-4 py-6 space-y-1">
            {[...navigationItems, ...moreItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-250 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                {item.icon && <Icon name={item.icon as any} size={20} />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="px-4 py-6 border-t border-border space-y-3">
            <a
              href="https://github.com/Shreyabhat11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250"
            >
              <Icon name="CodeBracketIcon" size={20} />
              <span className="text-base font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyabhat11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-250"
            >
              <Icon name="UserGroupIcon" size={20} />
              <span className="text-base font-medium">LinkedIn</span>
            </a>
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center px-4 py-3 bg-cta text-white rounded-lg text-base font-semibold hover:bg-cta/90 transition-all duration-250 shadow-subtle"
            >
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;