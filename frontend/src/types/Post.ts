export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  excerpt?: string;
  imageUrl?: string;
  tags?: string[];
  isFeatured?: boolean;
}
