interface PersonalInfoProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export default function PersonalInfo({
  name,
  title,
  email,
  phone,
  location,
  linkedin,
  github,
  portfolio,
}: PersonalInfoProps) {
  return (
    <div className="text-center border-b border-border pb-6 mb-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
        {name}
      </h1>
      <p className="text-lg sm:text-xl text-accent font-medium mb-4">{title}</p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
        <a
          href={`mailto:${email}`}
          className="hover:text-text-primary transition-colors duration-250"
        >
          {email}
        </a>
        <span className="hidden sm:inline">•</span>
        <a
          href={`tel:${phone}`}
          className="hover:text-text-primary transition-colors duration-250"
        >
          {phone}
        </a>
        <span className="hidden sm:inline">•</span>
        <span>{location}</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cta hover:underline transition-all duration-250"
        >
          LinkedIn
        </a>
        <span>•</span>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cta hover:underline transition-all duration-250"
        >
          GitHub
        </a>
        <span>•</span>
        <a
          href={portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cta hover:underline transition-all duration-250"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}