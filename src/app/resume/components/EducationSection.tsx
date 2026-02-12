interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
}

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Education
      </h2>

      <div className="space-y-5">
        {education.map((edu) => (
          <div key={edu.id} className="relative pl-4 border-l-2 border-accent">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {edu.degree}
              </h3>
              <p className="text-accent font-medium">{edu.institution}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary mt-1">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{edu.duration}</span>
                {/* <span>•</span> */}
                {/* <span className="font-semibold text-trust">CGPA: {edu.cgpa}</span> */}
              </div>
            </div>

            {/* {edu.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary mt-2">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}