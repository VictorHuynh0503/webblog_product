import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Engineering', slug: 'engineering' },
  { name: 'Science', slug: 'science' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Programming', slug: 'programming' },
  { name: 'Mathematics', slug: 'mathematics' }
];

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            TechBlog
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {categories.map(category => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/guidelines"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Guidelines
            </Link>
            {/* Write feature temporarily disabled
            <Link
              to="/write"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Write
            </Link>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
};
