
export interface TechToolsProps {
  name: string;
  icon: any;
  color?: string;
}


export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}


export interface RepoType {
  name: string;
  url: string;
  description: string;
  stars: number;
  updatedAt: number;
}

export interface FetchOptions {
  username: string;
  count?: number;
  minStars?: number;
  random?: boolean;
}

interface Post {
  node: {
    coverImage: {
      url: string | null;
    };
    title: string | null;
    brief: string | null;
    url: string | null;
    publishedAt: string;
    readTimeInMinutes: number;
    // tags: {
    //   slug: string;
    // }[];
  };
}

export type Posts = Post[];

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
}


export interface TabItem {
  category: string;
  icon: any;
  items: string[];
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ProjectCardProps {
  project: any;
  cardStyle: string;
}

export interface EventsList {
  id: number;
  category: string;
  date: string;
  title: string;
  desc: string;
  link?: string;
  slide?: string;
}


// types for Strapi CMS
export interface ProjectProps {
  id: string;
  documentId: string;
  slug: string;
  description: string;
  coverImage?: {
    url: string;
    alternativeText: string;
  };
  title: string;
}

export interface ProjectData {
  title: string;
  coverImage?: {
    formats?: {
      medium?: {
        url: string;
      };
    };
    alternativeText?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  overview?: string;
  description?: string;
  tools: Array<{ name: string }>;
  techUse: Array<{ name: string; useCase: string }>;
  keyFeatures?: any[];
  challengesAndProcess?: any[];
  screenshots?: Array<{
    formats: {
      medium: {
        url: string;
      };
    };
  }>;
}




