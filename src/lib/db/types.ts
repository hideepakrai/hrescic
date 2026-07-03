export interface Industry {
  slug: string;
  title: string;
  description?: string;
  pain?: string;
  solution?: string;
  stats?: string;
  suggestedPlan?: string;
  heroImage?: string;
  sections?: Record<string, unknown>[];
  order?: number;
  isPublished?: boolean;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category?: string;
  description?: string;
  client?: string;
  projectUrl?: string;
  featuredImage?: string;
  gallery?: string[];
  tags?: string[];
  industry?: string;
  results?: string[];
  isPublished?: boolean;
}

export interface PageBlock {
  id: string;
  type: string;
  layout: string;
  adminTitle: string;
  props?: Record<string, unknown>;
  content?: PageBlock[];
}
