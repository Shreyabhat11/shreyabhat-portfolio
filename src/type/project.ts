

export interface Metric {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;

  challenge?: string;
  methodology?: string;
  outcomes?: string[];
  metrics?: Metric[];

  technologies?: string[];

  image: string;
  alt?: string;

  githubUrl?: string;
  liveUrl?: string;

  duration?: string;
  status?: 'completed' | 'in-progress';

  featured?: boolean;
}
