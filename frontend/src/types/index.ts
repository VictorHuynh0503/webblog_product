export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  avatarUrl?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: Category;
  author: Author;
  tags: string[];
  created_at: string;
  updated_at: string;
  readTime: number;
  likes: number;
  views: number;
  status: 'draft' | 'published';
  publishedAt?: string;
}

export interface Comment {
  id: number;
  postId: number;
  author: Author;
  content: string;
  created_at: string;
  replies?: Comment[];
}

export interface AnalyticsData {
  id: number;
  date: string;
  visitors: number;
  pageViews: number;
  uniqueVisitors: number;
  categories: {
    [key: string]: number;
  };
}
