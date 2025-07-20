import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Product, SortOption, FilterOption } from '../../types';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/Button';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (filterBy !== 'all' && product.category !== filterBy) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      return true;
    });

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'popular':
      default:
        return filtered.sort((a, b) => b.reviews - a.reviews);
    }
  }, [products, sortBy, filterBy, priceRange]);

  const categories = [
    { value: 'all' as FilterOption, label: 'All Products' },
    { value: 'soldering' as FilterOption, label: 'soldering' },
    { value: 'boards' as FilterOption, label: 'boards' },
    { value: 'sensor-modules' as FilterOption, label: 'sensor-modules' },
    { value: 'motor-drivers' as FilterOption, label: 'motor-drivers' },
    { value: 'motors' as FilterOption, label: 'motors' },
    { value: 'batteries' as FilterOption, label: 'batteries' },
    { value: 'wireless-modules' as FilterOption, label: 'wireless-modules' },
    { value: 'voltmeters' as FilterOption, label: 'voltmeters' }
    
  ];

  const sortOptions = [
    { value: 'popular' as SortOption, label: 'Most Popular' },
    { value: 'price-low' as SortOption, label: 'Price: Low to High' },
    { value: 'price-high' as SortOption, label: 'Price: High to Low' },
    { value: 'rating' as SortOption, label: 'Highest Rated' },
    { value: 'newest' as SortOption, label: 'Newest First' }
  ];

  return (
    <div className="space-y-6">
      {/* Filter and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </Button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          {filteredAndSortedProducts.length} products found
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block w-full sm:w-64 space-y-6`}>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
            </h3>
            
            {/* Category Filter */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Category</h4>
              {categories.map(category => (
                <label key={category.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={filterBy === category.value}
                    onChange={(e) => setFilterBy(e.target.value as FilterOption)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {category.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="space-y-2 mt-6">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>₹0</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};