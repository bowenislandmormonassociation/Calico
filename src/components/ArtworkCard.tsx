import React from 'react';
import { Icons } from './icons';

interface ArtworkCardProps {
  title: string;
  artist: string;
  image: string;
  likes: string;
  category: string;
}

export function ArtworkCard({ title, artist, image, likes, category }: ArtworkCardProps) {
  return (
    <div className="group relative">
      <div className="relative h-96 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-200">by {artist}</p>
            <div className="mt-2 flex items-center space-x-2">
              <Icons.Fire className="w-5 h-5 text-pink-500" />
              <span className="text-white">{likes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium shadow-sm">
          {category}
        </span>
      </div>
    </div>
  );
}