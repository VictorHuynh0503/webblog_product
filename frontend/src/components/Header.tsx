import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Blog & Analytics</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">Blog</Link>
            <Link to="/analytics" className="hover:text-gray-300">Analytics</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
