// Cart utilities for localStorage management
export interface CartItem {
  _id: string;
  title: string;
  photo: {
    thumbnail: string;
    cover: string;
  };
  price: number;
  quantity: number;
  stock: number;
  discount: number;
  category: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const CART_STORAGE_KEY = 'tea-with-me-cart';

// Get cart from localStorage
export const getCart = (): Cart => {
  if (typeof window === 'undefined') {
    return { items: [], totalItems: 0, totalPrice: 0 };
  }

  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    if (cartData) {
      const cart = JSON.parse(cartData);
      return {
        ...cart,
        totalItems: calculateTotalItems(cart.items),
        totalPrice: calculateTotalPrice(cart.items)
      };
    }
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
  }

  return { items: [], totalItems: 0, totalPrice: 0 };
};

// Save cart to localStorage
export const saveCart = (cart: Cart): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Add item to cart
export const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart => {
  const cart = getCart();
  const existingItemIndex = cart.items.findIndex(item => item._id === product._id);

  if (existingItemIndex > -1) {
    // Update quantity if item already exists
    const newQuantity = cart.items[existingItemIndex].quantity + quantity;
    cart.items[existingItemIndex].quantity = Math.min(newQuantity, product.stock);
  } else {
    // Add new item to cart
    cart.items.push({
      ...product,
      quantity: Math.min(quantity, product.stock)
    });
  }

  cart.totalItems = calculateTotalItems(cart.items);
  cart.totalPrice = calculateTotalPrice(cart.items);
  
  saveCart(cart);
  return cart;
};

// Remove item from cart
export const removeFromCart = (productId: string): Cart => {
  const cart = getCart();
  cart.items = cart.items.filter(item => item._id !== productId);
  
  cart.totalItems = calculateTotalItems(cart.items);
  cart.totalPrice = calculateTotalPrice(cart.items);
  
  saveCart(cart);
  return cart;
};

// Update item quantity in cart
export const updateCartItemQuantity = (productId: string, quantity: number): Cart => {
  const cart = getCart();
  const itemIndex = cart.items.findIndex(item => item._id === productId);

  if (itemIndex > -1) {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity (ensure it doesn't exceed stock)
      cart.items[itemIndex].quantity = Math.min(quantity, cart.items[itemIndex].stock);
    }
  }

  cart.totalItems = calculateTotalItems(cart.items);
  cart.totalPrice = calculateTotalPrice(cart.items);
  
  saveCart(cart);
  return cart;
};

// Clear entire cart
export const clearCart = (): Cart => {
  const emptyCart = { items: [], totalItems: 0, totalPrice: 0 };
  saveCart(emptyCart);
  return emptyCart;
};

// Calculate total items in cart
export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

// Calculate total price with discounts
export const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const discountedPrice = item.price * (1 - item.discount / 100);
    return total + (discountedPrice * item.quantity);
  }, 0);
};

// Calculate item price with discount
export const calculateItemPrice = (item: CartItem): number => {
  return item.price * (1 - item.discount / 100);
};

// Get cart item count for a specific product
export const getCartItemQuantity = (productId: string): number => {
  const cart = getCart();
  const item = cart.items.find(item => item._id === productId);
  return item ? item.quantity : 0;
};