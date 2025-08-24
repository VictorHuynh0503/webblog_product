import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types';
import { PostCard } from '../components/common/PostCard';
import { CategoryCard } from '../components/common/CategoryCard';
import { fetchFeaturedPosts, fetchCategories } from '../services/api';

const HomePage: React.FC = () => {
  const { data: featuredPosts, isLoading: postsLoading, error: postsError } = useQuery<Post[]>({
    queryKey: ['posts', 'featured'],
    queryFn: () => fetchFeaturedPosts()
  });

  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories()
  });

  if (postsError || categoriesError) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl text-red-600">Error loading content</h2>
        <p className="text-gray-600 mt-2">
          {postsError?.message || categoriesError?.message || 'Please try again later'}
        </p>
      </div>
    );
  }

  if (postsLoading || categoriesLoading) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore. Learn. Share.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover insights across engineering, science, and technology
        </p>
        {/* Write feature temporarily disabled 
        <a
          href="/write"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Start Writing
        </a>
        */}
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="space-y-8">
          {featuredPosts?.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} variant="featured" />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
