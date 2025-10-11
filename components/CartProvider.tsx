'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Cart, CartItem, getCart, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateCartItemQuantity as updateCartItemQuantityUtil, clearCart as clearCartUtil } from '@/lib/cart';
import toast from 'react-hot-toast';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>({ items: [], totalItems: 0, totalPrice: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = getCart();
    setCart(savedCart);
    setIsLoading(false);
  }, []);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    try {
      const updatedCart = addToCartUtil(product, quantity);
      setCart(updatedCart);
      toast.success(`${product.title} added to cart!`, {
        duration: 2000,
        icon: '🛒',
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    }
  };

  const removeFromCart = (productId: string) => {
    try {
      const updatedCart = removeFromCartUtil(productId);
      setCart(updatedCart);
      toast.success('Item removed from cart', {
        duration: 2000,
        icon: '🗑️',
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to remove item from cart');
    }
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    try {
      const updatedCart = updateCartItemQuantityUtil(productId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const clearCart = () => {
    try {
      const updatedCart = clearCartUtil();
      setCart(updatedCart);
      toast.success('Cart cleared', {
        duration: 2000,
        icon: '🧹',
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
    }
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    isLoading,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}