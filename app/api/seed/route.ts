import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

// GET /api/seed - Add sample products to the database
export async function GET() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    
    const sampleProducts = [
      {
        title: "Premium Earl Grey Tea",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 24.99,
        stock: 50,
        discount: 10,
        category: "tea",
        description: "A classic Earl Grey blend with bergamot oil and cornflower petals."
      },
      {
        title: "Organic Green Tea",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 19.99,
        stock: 75,
        discount: 0,
        category: "tea",
        description: "Fresh organic green tea leaves with antioxidants and natural flavor."
      },
      {
        title: "Colombian Coffee Beans",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1559056961-84584a6b0c82?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1559056961-84584a6b0c82?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 32.99,
        stock: 30,
        discount: 15,
        category: "coffee",
        description: "Premium Colombian coffee beans with rich flavor and medium roast."
      },
      {
        title: "Espresso Blend",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1587734195503-904fca47e0df?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1587734195503-904fca47e0df?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 28.99,
        stock: 40,
        discount: 5,
        category: "coffee",
        description: "Dark roast espresso blend perfect for morning coffee."
      },
      {
        title: "Traditional Singara",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop"
        },
        quantity: 6,
        price: 12.99,
        stock: 25,
        discount: 0,
        category: "snacks",
        description: "Crispy triangular pastries filled with spiced potatoes and vegetables."
      },
      {
        title: "Delicious Samosa",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop"
        },
        quantity: 8,
        price: 14.99,
        stock: 35,
        discount: 20,
        category: "snacks",
        description: "Golden brown samosas with savory filling and aromatic spices."
      },
      {
        title: "Masala Chai",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 22.99,
        stock: 60,
        discount: 0,
        category: "tea",
        description: "Authentic Indian masala chai blend with cardamom, cinnamon, and ginger."
      },
      {
        title: "French Roast Coffee",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 26.99,
        stock: 45,
        discount: 10,
        category: "coffee",
        description: "Bold French roast coffee with intense flavor and aroma."
      },
      {
        title: "Mixed Snack Platter",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 18.99,
        stock: 20,
        discount: 25,
        category: "snacks",
        description: "Assorted traditional snacks including mini samosas, pakoras, and nuts."
      },
      {
        title: "Chamomile Tea",
        photo: {
          thumbnail: "https://images.unsplash.com/photo-1597318985989-d9902ff8e90e?w=150&h=150&fit=crop",
          cover: "https://images.unsplash.com/photo-1597318985989-d9902ff8e90e?w=400&h=300&fit=crop"
        },
        quantity: 1,
        price: 16.99,
        stock: 55,
        discount: 0,
        category: "tea",
        description: "Relaxing chamomile tea perfect for evening relaxation and sleep."
      }
    ];
    
    await Product.insertMany(sampleProducts);
    
    return NextResponse.json({
      message: 'Sample products added successfully!',
      count: sampleProducts.length
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}