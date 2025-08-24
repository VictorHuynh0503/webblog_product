import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {category.imageUrl && (
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};
