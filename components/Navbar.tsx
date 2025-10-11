'use client';

import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { useCart } from './CartProvider';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout, isLoading } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };
 
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full flex items-center justify-center">
                <span className="text-white  font-bold italic text-4xl">T</span>
              </div>
              <span>Tea With Me</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-2">
            {/* Cart Button - Always visible */}
            <Link 
              href="/cart" 
              className="relative inline-flex items-center p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-all duration-300"
              title="Shopping Cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8M7 13l-1.5-8M12 13v6M9 19h6" />
              </svg>
              {cart.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cart.totalItems}
                </span>
              )}
            </Link>

            {isLoading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            ) : user ? (
              // User is logged in
              <div className="flex items-center space-x-2">
                <div className="hidden sm:flex items-center space-x-1 px-4 py-2 ">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">
                    {user.name}
                  </span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Dashboard
                </Link>
              </div>
            ) : (
              // User is not logged in
              <div className="flex items-center space-x-4">
                <Link 
                  href="/auth/login" 
                  className="inline-flex items-center px-4 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  Get Started
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}