import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg")'
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Discover the Future of {' '}
              <span className="text-blue-600 dark:text-blue-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build your dream project with the best tools and modern tech. Let’s innovate together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: 'Lightning Fast',
            description: 'Quick delivery and instant support for all your tech needs'
          },
          {
            icon: <Shield className="w-8 h-8 text-green-600" />,
            title: 'Secure Shopping',
            description: 'Your data and payments are protected with enterprise-grade security'
          },
          {
            icon: <Truck className="w-8 h-8 text-orange-600" />,
            title: 'Free Shipping',
            description: 'Free shipping on orders over $50 with fast delivery options'
          },
          {
            icon: <HeadphonesIcon className="w-8 h-8 text-purple-600" />,
            title: '24/7 Support',
            description: 'Expert customer support available around the clock'
          }
        ].map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our hand-picked selection of premium electronics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg">
              View All Products
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest tech news, exclusive deals, and product launches delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Button variant="secondary" size="lg">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
};