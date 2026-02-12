interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Certifications & Training
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-muted rounded-lg p-4 border border-border"
          >
            <h3 className="text-base font-semibold text-text-primary mb-1">
              {cert.name}
            </h3>
            <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
            <p className="text-xs text-text-secondary">{cert.date}</p>
            {cert.credentialId && (
              <p className="text-xs text-text-tertiary mt-2">
                ID: {cert.credentialId}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}