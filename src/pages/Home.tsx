import React from 'react';
import { Icons } from '../components/icons';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            Calico
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A revolutionary social platform for artists and creators, featuring advanced AI protection
          and integrated cryptocurrency support.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Join Our Creative Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Icons.Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'AI Protection',
    description: 'Advanced AI-poisoning techniques to protect your intellectual property.',
  },
  {
    icon: <Icons.Coins className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Crypto Donations',
    description: 'Seamless cryptocurrency integration for supporting creators.',
  },
  {
    icon: <Icons.Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Creator Studio',
    description: 'Professional tools for artists to showcase and monetize their work.',
  },
  {
    icon: <Icons.Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Community',
    description: 'Connect with fellow artists and participate in events.',
  },
];

const stats = [
  {
    value: '10K+',
    label: 'Active Artists',
  },
  {
    value: '100K+',
    label: 'Daily Visitors',
  },
  {
    value: '1M+',
    label: 'Artworks Shared',
  },
];