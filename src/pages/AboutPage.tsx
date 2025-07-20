import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Their satisfaction is our top priority.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Quality Products',
      description: 'We partner with leading brands to ensure every product meets our high standards.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: 'Global Reach',
      description: 'Serving customers worldwide with fast, reliable shipping and local support.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passionate Team',
      description: 'Our team of tech enthusiasts is dedicated to helping you find the perfect products.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Swastik Electronics
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Founded with humble beginnings, Swastik Electronics started as a small electronics reseller in India focused on providing quality components to students and hobbyists. Over the years, our dedication to quality, customer service, and community trust helped us grow into a full-fledged platform with thousands of customers across the country.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             At Swastik Electronics, our mission is to empower innovation by making electronics accessible to all. Whether you're a hobbyist, student, or professional, we believe that great tools and components should be within reach.
              We aim to build a thriving community of creators and support the next generation of engineers and makers by offering quality products, educational resources, and exceptional service.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              1M+
            </div>
            <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              50K+
            </div>
            <p className="text-gray-600 dark:text-gray-400">Products Sold</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              99.9%
            </div>
            <p className="text-gray-600 dark:text-gray-400">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The passionate people behind ElectroStore
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'CEO & Founder',
              image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
            },
            {
              name: 'Michael Chen',
              role: 'CTO',
              image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
            },
            {
              name: 'Emma Davis',
              role: 'Head of Customer Success',
              image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};