'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactCTAProps {
  email: string;
  linkedin: string;
  phone: string;
}

export default function ContactCTA({ email, linkedin, phone }: ContactCTAProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-primary to-accent rounded-lg p-6 sm:p-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Let&apos;s Connect
      </h2>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Interested in discussing data science opportunities or collaboration?
        I&apos;m always open to connecting with fellow professionals and exploring
        new challenges.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-white/90 transition-all duration-250 focus-ring"
        >
          <Icon name={copied ? 'CheckIcon' : 'EnvelopeIcon'} size={20} />
          <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
        </button>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white rounded-md font-semibold hover:bg-white/20 transition-all duration-250 focus-ring"
        >
          <Icon name="UserGroupIcon" size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white rounded-md font-semibold hover:bg-white/20 transition-all duration-250 focus-ring"
        >
          <Icon name="PhoneIcon" size={20} />
          <span>Call</span>
        </a>
      </div>
    </section>
  );
}