import { Post } from '../types';

const STORAGE_KEY = 'blog_posts';

export const StorageService = {
  getPosts: (): Post[] => {
    const posts = localStorage.getItem(STORAGE_KEY);
    return posts ? JSON.parse(posts) : [];
  },

  savePosts: (posts: Post[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  },

  addPost: (post: Post): void => {
    const posts = StorageService.getPosts();
    posts.push(post);
    StorageService.savePosts(posts);
  },

  getPostsByCategory: (categorySlug: string): Post[] => {
    const posts = StorageService.getPosts();
    return posts.filter(
      post => post.status === 'published' && post.category.slug === categorySlug
    );
  },

  getFeaturedPosts: (): Post[] => {
    const posts = StorageService.getPosts();
    return posts
      .filter(post => post.status === 'published')
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 6);
  },

  getPostBySlug: (slug: string): Post | undefined => {
    const posts = StorageService.getPosts();
    return posts.find(post => post.slug === slug);
  }
};
