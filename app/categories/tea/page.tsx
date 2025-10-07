'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Product {
  _id: string;
  title: string;
  photo: {
    thumbnail: string;
    cover: string;
  };
  price: number;
  stock: number;
  discount: number;
  category: string;
  description: string;
}

export default function AllTeaPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const router = useRouter();

  useEffect(() => {
    fetchTeaProducts();
  }, []);

  const fetchTeaProducts = async () => {
    try {
      const response = await fetch('/api/products?category=tea');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      } else {
        console.error('Failed to fetch tea products');
      }
    } catch (error) {
      console.error('Error fetching tea products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount / 100);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-12 bg-green-200 rounded-lg mb-8 w-64 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center mb-6 text-green-600 hover:text-green-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
            🍵 Premium Tea Collection
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Discover our finest selection of premium teas from around the world. From classic black teas to exotic herbal blends.
          </p>
          <div className="mt-6 text-sm text-green-600">
            Showing {products.length} tea{products.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍵</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">No teas found</h3>
            <p className="text-green-600">Our tea collection is currently being updated.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-green-100 hover:border-green-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    {imageErrors[product._id] ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-green-600 text-xs">🍵 Tea Image</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={product.photo.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageErrors(prev => ({ ...prev, [product._id]: true }))}
                      />
                    )}
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.discount}% OFF
                      </div>
                    )}
                    {product.stock === 0 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        {product.discount > 0 ? (
                          <>
                            <span className="text-lg font-bold text-green-600">
                              ${calculateDiscountedPrice(product.price, product.discount).toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              ${product.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-green-600">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}