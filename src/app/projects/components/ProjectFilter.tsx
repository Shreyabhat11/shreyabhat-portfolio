'use client';

import Icon from '@/components/ui/AppIcon';

interface ProjectFiltersProps {
  categories: string[];
  selectedCategory: string;
  allTags: string[];
  selectedTags: string[];
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
  resultCount: number;
}

const ProjectFilters = ({
  categories,
  selectedCategory,
  allTags,
  selectedTags,
  searchQuery,
  onCategoryChange,
  onTagToggle,
  onSearchChange,
  onClearFilters,
  resultCount
}: ProjectFiltersProps) => {
  const hasActiveFilters = selectedCategory !== 'All' || selectedTags.length > 0 || searchQuery !== '';

  return (
    <div className="space-y-6 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search projects, technologies, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-250"
          />
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center space-x-2 px-4 py-3 bg-muted text-text-secondary rounded-lg hover:bg-muted/80 transition-all duration-250 focus-ring"
          >
            <Icon name="XMarkIcon" size={18} />
            <span className="text-sm font-medium">Clear Filters</span>
          </button>
        )}
      </div>

      <div className="bg-card rounded-lg p-6 space-y-6 shadow-card">
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="FolderIcon" size={18} />
            <span>Categories</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 focus-ring ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'bg-muted text-text-secondary hover:bg-muted/80 hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="TagIcon" size={18} />
            <span>Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-250 focus-ring ${
                  selectedTags.includes(tag)
                    ? 'bg-accent text-accent-foreground shadow-subtle'
                    : 'bg-muted text-text-secondary hover:bg-muted/80 hover:text-text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-text-secondary">
        <span>
          Showing <span className="font-semibold text-text-primary">{resultCount}</span> {resultCount === 1 ? 'project' : 'projects'}
        </span>
        {hasActiveFilters && (
          <span className="flex items-center space-x-1">
            <Icon name="FunnelIcon" size={16} />
            <span>Filters active</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;