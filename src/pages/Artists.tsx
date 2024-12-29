import React from 'react';
import { ArtistCard } from '../components/ArtistCard';

const artists = [
  {
    name: "Yuki Morita",
    avatar: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800",
    specialty: "Digital Art & Illustration",
    followers: "245K",
  },
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&w=800",
    specialty: "Traditional Painting",
    followers: "189K",
  },
  {
    name: "Marcus Rivera",
    avatar: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800",
    specialty: "Character Design",
    followers: "156K",
  },
  {
    name: "Emma Watson",
    avatar: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800",
    specialty: "Abstract Art",
    followers: "134K",
  },
  {
    name: "Liam Chen",
    avatar: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800",
    specialty: "Concept Art",
    followers: "198K",
  },
  {
    name: "Sofia Rodriguez",
    avatar: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?auto=format&fit=crop&w=800",
    specialty: "Photography & Mixed Media",
    followers: "167K",
  }
];

export function Artists() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
          Featured Artists
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover talented creators from around the world, each bringing their unique vision and style to our community.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  );
}