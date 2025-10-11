'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';

interface Order {
  _id: string;
  orderNumber: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  pricing: {
    subtotal: number;
    deliveryFee: number;
    total: number;
  };
  status: string;
  paymentMethod: string;
  deliveryType: string;
  estimatedDelivery: string;
  createdAt: string;
}

export default function OrderConfirmationPage() {
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data.order);
        } else {
          setError('Order not found');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
        setError('Error loading order details');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchOrder();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navbar />
        <Loading />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDeliveryText = (type: string) => {
    switch (type) {
      case 'express':
        return 'Express Delivery (1-2 days)';
      case 'pickup':
        return 'Store Pickup';
      default:
        return 'Standard Delivery (3-5 days)';
    }
  };

  const getPaymentText = (method: string) => {
    switch (method) {
      case 'cash_on_delivery':
        return 'Cash on Delivery';
      case 'card':
        return 'Credit/Debit Card';
      case 'online':
        return 'Online Payment';
      default:
        return method;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your order. We&apos;ll send you updates via email.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4">
            <div className="flex justify-between items-center text-white">
              <div>
                <h2 className="text-xl font-semibold">Order #{order.orderNumber}</h2>
                <p className="text-amber-100">Placed on {formatDate(order.createdAt)}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">${order.pricing.total.toFixed(2)}</div>
                <div className="text-amber-100 capitalize">{order.status}</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Name:</span> {order.customerInfo.name}</p>
                  <p><span className="font-medium">Email:</span> {order.customerInfo.email}</p>
                  <p><span className="font-medium">Phone:</span> {order.customerInfo.phone}</p>
                </div>
              </div>

              {/* Delivery Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Method:</span> {getDeliveryText(order.deliveryType)}</p>
                  <p><span className="font-medium">Estimated Delivery:</span> {formatDate(order.estimatedDelivery)}</p>
                  {order.deliveryType !== 'pickup' && (
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-sm">
                        {order.customerInfo.address.street}<br />
                        {order.customerInfo.address.city}, {order.customerInfo.address.state} {order.customerInfo.address.zipCode}<br />
                        {order.customerInfo.address.country}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Method:</span> {getPaymentText(order.paymentMethod)}</p>
                  <p><span className="font-medium">Status:</span> <span className="capitalize">{order.status}</span></p>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${order.pricing.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>{order.pricing.deliveryFee === 0 ? 'Free' : `$${order.pricing.deliveryFee.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
                    <span>Total:</span>
                    <span>${order.pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Order
          </button>
        </div>

        {/* Support Information */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help?</h3>
          <p className="text-blue-700 mb-2">
            If you have any questions about your order, please contact our customer support:
          </p>
          <div className="text-blue-600">
            <p>📧 Email: support@teawithme.com</p>
            <p>📞 Phone: (555) 123-4567</p>
            <p>🕒 Hours: Monday - Friday, 9 AM - 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}