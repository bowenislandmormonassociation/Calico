import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Icons } from './icons';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Icons.Palette className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Calico
              </span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-4 py-2 rounded-full bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Explore', path: '/explore' },
  { name: 'Artists', path: '/artists' },
  { name: 'About', path: '/about' },
];