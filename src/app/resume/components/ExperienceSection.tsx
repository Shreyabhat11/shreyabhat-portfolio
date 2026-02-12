interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-4 border-l-2 border-accent">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {exp.position}
              </h3>
              <p className="text-accent font-medium">{exp.company}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary mt-1">
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.duration}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}