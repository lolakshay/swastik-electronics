import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Package, ShoppingCart, User, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export const DashboardPage: React.FC = () => {
  const { user, orders } = useAuth();
  const { itemCount, total } = useCart();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const stats = [
    {
      icon: <Package className="w-6 h-6" />,
      label: 'Total Orders',
      value: orders.length,
      color: 'text-blue-600'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      label: 'Cart Items',
      value: itemCount,
      color: 'text-green-600'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: 'Wishlist',
      value: 12,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3">
              <div className={`${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Orders
          </h2>
          {orders.length > 0 ? (
            <div className="space-y-3">
              {orders.slice(0, 3).map(order => (
                <div key={order.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Order #{order.id}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {order.date}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'delivered' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
              <Link
                to="/orders"
                className="block text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View all orders →
              </Link>
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No orders yet</p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Current Cart
          </h2>
          {itemCount > 0 ? (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Items</span>
                <span className="font-medium">{itemCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total</span>
                <span className="font-bold text-lg">${total.toLocaleString()}</span>
              </div>
              <Link
                to="/cart"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Cart
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-3">Your cart is empty</p>
              <Link
                to="/products"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Start shopping →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};