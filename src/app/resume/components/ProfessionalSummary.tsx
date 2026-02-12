interface ProfessionalSummaryProps {
  summary: string;
}

export default function ProfessionalSummary({
  summary,
}: ProfessionalSummaryProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        Professional Summary
      </h2>
      <p className="text-text-secondary leading-relaxed">{summary}</p>
    </section>
  );
}