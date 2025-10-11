'use client';

import { useCart } from '@/components/CartProvider';
import { calculateItemPrice } from '@/lib/cart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart } = useCart();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartItemQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-lg text-gray-600 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
              <p className="text-gray-600">
                {cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            {cart.items.length > 0 && (
              <button
                onClick={clearCart}
                className="inline-flex items-center px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 border border-red-200 rounded-lg text-sm font-medium transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Cart
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cart.items.map((item) => {
                  const itemPrice = calculateItemPrice(item);
                  const totalItemPrice = itemPrice * item.quantity;

                  return (
                    <div key={item._id} className="p-6">
                      <div className="flex items-start space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-20 h-20 relative">
                          {imageErrors[item._id] ? (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          ) : (
                            <Image
                              src={item.photo.thumbnail}
                              alt={item.title}
                              fill
                              className="object-cover rounded-lg"
                              onError={() => setImageErrors(prev => ({ ...prev, [item._id]: true }))}
                            />
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 hover:text-amber-600">
                                <Link href={`/products/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                              {item.discount > 0 && (
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-sm text-gray-500 line-through">
                                    ${item.price.toFixed(2)}
                                  </span>
                                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                    {item.discount}% OFF
                                  </span>
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                              title="Remove item"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          {/* Quantity and Price */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-gray-600">Qty:</span>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                  className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-l-lg transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 text-center min-w-[3rem] border-l border-r border-gray-300">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                  className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-r-lg transition-colors"
                                  disabled={item.quantity >= item.stock}
                                >
                                  +
                                </button>
                              </div>
                              <span className="text-sm text-gray-500">
                                (Stock: {item.stock})
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-800">
                                ${formatPrice(totalItemPrice)}
                              </div>
                              <div className="text-sm text-gray-500">
                                ${formatPrice(itemPrice)} each
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.totalItems} items)</span>
                  <span>${formatPrice(cart.totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total</span>
                  <span>${formatPrice(cart.totalPrice)}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/"
                className="block w-full text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}