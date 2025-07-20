import React from 'react';
import { products } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';

export const ProductsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our comprehensive collection of cutting-edge electronics, from everyday essentials to professional-grade equipment.
        </p>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
};