
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
  updatedAt: string | number;
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
  icon: React.ReactNode;
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
export interface ProjectPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface ImageProps {
  id: number;
  alternativeText: string;
  url: string;
  formats: {
    medium: string;

  }
}


export interface ToolsProps {
  name: string;
}

export interface TechUseProps {
  name: string;
  useCase?: string;
}


export interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  slug: string;
  coverImage: string | ImageProps;
  overview: string;
  githubUrl: string;
  liveUrl: string;
  keyFeatures: string;
  challengesAndProcess: string;

  imageUrl: ImageProps;
  tools: ToolsProps;
  techUse?: TechUseProps;
  screenshots?: ImageProps[];
}




