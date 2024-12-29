import React from 'react';
import { Icons } from '../components/icons';
import { ArtworkCard } from '../components/ArtworkCard';

const categories = [
  { name: 'Trending', icon: <Icons.Trending className="w-5 h-5 text-purple-600 dark:text-purple-400" /> },
  { name: 'Popular', icon: <Icons.Fire className="w-5 h-5 text-purple-600 dark:text-purple-400" /> },
  { name: 'Featured', icon: <Icons.Award className="w-5 h-5 text-purple-600 dark:text-purple-400" /> },
  { name: 'Recent', icon: <Icons.Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" /> },
];

const artworks = [
  {
    title: "Neon Dreams",
    artist: "Yuki Morita",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800",
    likes: "45.2K",
    category: "Digital Art"
  },
  {
    title: "Urban Poetry",
    artist: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800",
    likes: "38.9K",
    category: "Photography"
  },
  {
    title: "Crystal Visions",
    artist: "Marcus Rivera",
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=800",
    likes: "32.1K",
    category: "3D Art"
  },
  {
    title: "Ethereal Dance",
    artist: "Emma Watson",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800",
    likes: "29.7K",
    category: "Traditional"
  },
  {
    title: "Future City",
    artist: "Liam Chen",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&w=800",
    likes: "27.3K",
    category: "Concept Art"
  },
  {
    title: "Nature's Whisper",
    artist: "Sofia Rodriguez",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800",
    likes: "25.8K",
    category: "Photography"
  }
];

export function Explore() {
  return (
    <div className="space-y-12">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Amazing Art
        </h1>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
            >
              {category.icon}
              <span className="text-gray-900 dark:text-white">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.title} {...artwork} />
        ))}
      </div>
    </div>
  );
}