export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  impact: string;
  image: string;
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