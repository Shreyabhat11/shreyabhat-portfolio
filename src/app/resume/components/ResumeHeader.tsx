'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ResumeHeaderProps {
  onDownloadPDF: () => void;
  onDownloadWord: () => void;
  onPrint: () => void;
  lastUpdated: string;
}

export default function ResumeHeader({
  onDownloadPDF,
  onDownloadWord,
  onPrint,
  lastUpdated,
}: ResumeHeaderProps) {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  return (
    <div className="bg-card border-b border-border sticky top-16 z-40 backdrop-glass">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Professional Resume
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/90 transition-all duration-250 focus-ring"
            >
              <Icon name="PrinterIcon" size={18} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-cta text-white rounded-md text-sm font-semibold hover:bg-cta/90 transition-all duration-250 focus-ring"
              >
                <Icon name="ArrowDownTrayIcon" size={18} />
                <span>Download</span>
                <Icon name="ChevronDownIcon" size={16} />
              </button>

              {showDownloadMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-popover rounded-lg shadow-elevated z-50">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        onDownloadPDF();
                        setShowDownloadMenu(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-text-secondary hover:bg-muted hover:text-text-primary transition-colors duration-250"
                    >
                      <Icon name="DocumentTextIcon" size={18} />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={() => {
                        onDownloadWord();
                        setShowDownloadMenu(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-text-secondary hover:bg-muted hover:text-text-primary transition-colors duration-250"
                    >
                      <Icon name="DocumentIcon" size={18} />
                      <span>Download Word</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}