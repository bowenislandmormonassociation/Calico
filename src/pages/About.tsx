import React from 'react';
import { Icons } from '../components/icons';

export function About() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
          About{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            Calico
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're building the future of digital art sharing and protection. Our platform combines cutting-edge AI protection with blockchain technology to create a safe and rewarding space for artists.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Calico was founded with a simple yet powerful mission: to create a space where artists can share their work without fear of AI exploitation while building meaningful connections with their audience.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Values</h2>
          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Join Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    value: '2024',
    label: 'Founded',
  },
  {
    value: '50+',
    label: 'Team Members',
  },
  {
    value: '15+',
    label: 'Countries',
  },
  {
    value: '$2M+',
    label: 'Artist Earnings',
  },
];

const values = [
  {
    icon: <Icons.Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Artist Protection',
    description: 'We prioritize protecting your intellectual property through advanced AI-poisoning techniques.',
  },
  {
    icon: <Icons.Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Community First',
    description: 'Building a supportive and engaging environment for artists and art lovers alike.',
  },
  {
    icon: <Icons.Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Innovation',
    description: 'Constantly pushing the boundaries of technology to better serve our community.',
  },
  {
    icon: <Icons.Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Security',
    description: 'Your work and data are protected by state-of-the-art security measures.',
  },
];

const features = [
  {
    icon: <Icons.Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: 'Creator Studio',
    description: 'Access professional tools designed specifically for digital artists.',
  },
  {
    icon: <Icons.Coins className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: 'Crypto Rewards',
    description: 'Earn cryptocurrency through donations and content monetization.',
  },
  {
    icon: <Icons.Gift className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: 'Special Events',
    description: 'Participate in our annual Easter ARG and other community events.',
  },
];