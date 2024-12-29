import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Icons } from './icons';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Icons.Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <Icons.Sun className="w-5 h-5 text-gray-300" />
      )}
    </button>
  );
}