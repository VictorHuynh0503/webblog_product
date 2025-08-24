import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/api';
import { Post } from '../types';

const BlogPage: React.FC = () => {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading posts</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <div className="mt-4 text-sm text-gray-500">
              {new Date(post.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
