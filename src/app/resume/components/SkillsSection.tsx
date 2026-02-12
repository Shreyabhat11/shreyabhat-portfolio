interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export default function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-3 py-1 bg-background text-text-secondary text-xs rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}