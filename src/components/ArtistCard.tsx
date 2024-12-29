import React from 'react';
import { Icons } from './icons';

interface ArtistCardProps {
  name: string;
  avatar: string;
  specialty: string;
  followers: string;
}

export function ArtistCard({ name, avatar, specialty, followers }: ArtistCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={avatar}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{specialty}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Heart className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            <span className="text-gray-600 dark:text-gray-400">{followers}</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Icons.Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Icons.Star className="w-5 h-5 text-yellow-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}