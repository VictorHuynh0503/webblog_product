import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory, fetchCategory } from '../../services/api';
import { PostCard } from '../../components/common/PostCard';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: category } = useQuery({
    queryKey: ['category', slug],
    queryFn: () => fetchCategory(slug as string)
  });

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts', 'category', slug],
    queryFn: () => fetchPostsByCategory(slug as string)
  });

  if (!category) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{category.name}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* All Articles Section */}
      {posts && posts.length > 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-8 text-gray-900">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(3).map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2">
                  <a 
                    href={`/post/${post.slug}`}
                    className="hover:text-indigo-600 transition-colors duration-200"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                  <a 
                    href={`/post/${post.slug}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading articles...</p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && (!posts || posts.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
