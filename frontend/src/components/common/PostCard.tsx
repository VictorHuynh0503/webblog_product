import React from 'react';
import { Post } from '../../types';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

export const PostCard: React.FC<PostCardProps> = ({ post, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link to={`/post/${post.slug}`} className="block">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:flex">
          {post.featuredImage && (
            <div className="lg:w-1/2">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          )}
          <div className="p-8 lg:w-1/2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {post.category.name}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">{post.title}</h2>
            <p className="mt-3 text-gray-600">{post.excerpt}</p>
            <div className="mt-6 flex items-center">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()} · {post.readTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="text-sm text-indigo-500">{post.category.name}</span>
            <span className="mx-2 text-gray-300">·</span>
            <span className="text-sm text-gray-500">{post.readTime || 5} min read</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          {post.author && (
            <div className="flex items-center">
              <img
                src={post.author.avatarUrl || 'https://via.placeholder.com/32'}
                alt={post.author.name}
                className="h-8 w-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">{post.author.name}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
