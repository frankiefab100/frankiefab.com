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

export interface ServicesProps {
  icon: any;
  title: string;
  description: string;
}

export interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
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
      large?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
    alternativeText?: string;
  };
  headerImage?: {
    formats?: {
      large?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
    alternativeText?: string;
  };
  overview?: any[];
  description?: string;
  githubUrl?: string;
  liveUrl?: string;
  ideationImage?: {
    formats?: {
      large?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
    alternativeText?: string;
  };
  technologies?: any[];
  keyFeatures?: any[];
  challengesAndProcess?: any[];
  otherImages?: Array<{
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
  }>;
  achievementsAndSolution?: any[]
}




