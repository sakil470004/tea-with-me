'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';
import { useCart } from '@/components/CartProvider';
import toast from 'react-hot-toast';

interface Product {
  _id: string;
  title: string;
  photo: {
    thumbnail: string;
    cover: string;
  };
  quantity: number;
  price: number;
  stock: number;
  discount: number;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart: addToCartAction } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [imageErrors, setImageErrors] = useState({
    cover: false,
    thumbnail: false,
  });

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched product data:', data);
          setProduct(data.product);
        } else {
          toast.error('Product not found');
          router.push('/');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Error loading product');
        router.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchProduct(params.id as string);
    }
  }, [params.id, router]);

  const addToCart = () => {
    if (!product) return;

    try {
      addToCartAction({
        _id: product._id,
        title: product.title,
        photo: product.photo,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        category: product.category,
      }, selectedQuantity);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Error adding to cart');
    }
  };

  const buyNow = () => {
    addToCart();
    // Navigate to cart page
    router.push('/cart');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loading text="Loading product..." />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-100">
                {imageErrors.cover ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 text-sm">Image not available</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={product?.photo?.cover || '/placeholder.jpeg'}
                    alt={product?.title || 'Product image'}
                    fill
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, cover: true }))}
                  />
                )}
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 border-2 border-amber-300">
                  {imageErrors.thumbnail ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  ) : (
                    <Image
                      src={product?.photo?.thumbnail || '/placeholder.jpeg'}
                      alt={product?.title || 'Product thumbnail'}
                      fill
                      className="object-cover"
                      onError={() => setImageErrors(prev => ({ ...prev, thumbnail: true }))}
                    />
                  )}
                </div>
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">More images coming soon</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 capitalize">
                    {product.category}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.discount > 0 && (
                  <p className="text-green-600 font-medium">
                    You save ${(product.price - discountedPrice).toFixed(2)}
                  </p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-16 text-center text-lg font-medium">
                      {selectedQuantity}
                    </span>
                    <button
                      onClick={() => setSelectedQuantity(Math.min(product.stock, selectedQuantity + 1))}
                      disabled={selectedQuantity >= product.stock}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={addToCart}
                    disabled={product.stock === 0}
                    className="flex-1 px-6 py-4 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={buyNow}
                    disabled={product.stock === 0}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <dl className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="text-gray-900 font-medium capitalize">{product.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Stock:</dt>
                    <dd className="text-gray-900 font-medium">{product.stock} units</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Package Size:</dt>
                    <dd className="text-gray-900 font-medium">{product.quantity} {product.category === 'snacks' ? 'pieces' : 'oz'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}