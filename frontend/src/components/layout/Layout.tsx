import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600 max-w-md">
                A platform for sharing knowledge across engineering, science, and technology.
                Join our community of writers and readers.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="/category/engineering" className="text-gray-600 hover:text-gray-900">Engineering</a></li>
                  <li><a href="/category/science" className="text-gray-600 hover:text-gray-900">Science</a></li>
                  <li><a href="/category/technology" className="text-gray-600 hover:text-gray-900">Technology</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                  {/* Write feature temporarily disabled 
                  <li><a href="/write" className="text-gray-600 hover:text-gray-900">Write for us</a></li>
                  */}
                  <li><a href="/guidelines" className="text-gray-600 hover:text-gray-900">Guidelines</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-gray-900">About us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
