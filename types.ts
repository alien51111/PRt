export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ProjectSummary {
  title: string;
  description: string;
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
  description: string;
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
