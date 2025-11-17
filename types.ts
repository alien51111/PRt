export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  image: string;
  overview: string;
  approach?: string[];
  impact: string[];
}

export interface CoreBelief {
  title: string;
  description:string;
  icon?: string;
}

export interface ValueStat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface Job {
  title: string;
  location: string;
  type: string;
}

export interface Insight {
  topic: string;
  expertName: string;
  expertTitle: string;
  expertImage: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
}
