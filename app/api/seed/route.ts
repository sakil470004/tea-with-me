import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

// GET /api/seed - Add sample products to the database
export async function GET() {
  try {
    await connectDB();

    // Clear existing products
    // await Product.deleteMany({});

    const sampleProducts = [
      {
        title: "Premium Earl Grey Tea",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 24.99,
        stock: 50,
        discount: 10,
        category: "tea",
        description:
          "A classic Earl Grey blend with bergamot oil and cornflower petals.",
      },
      {
        title: "Organic Green Tea",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 19.99,
        stock: 75,
        discount: 0,
        category: "tea",
        description:
          "Fresh organic green tea leaves with antioxidants and natural flavor.",
      },
      {
        title: "Colombian Coffee Beans",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1559056961-84584a6b0c82?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1559056961-84584a6b0c82?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 32.99,
        stock: 30,
        discount: 15,
        category: "coffee",
        description:
          "Premium Colombian coffee beans with rich flavor and medium roast.",
      },
      {
        title: "Espresso Blend",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1587734195503-904fca47e0df?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1587734195503-904fca47e0df?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 28.99,
        stock: 40,
        discount: 5,
        category: "coffee",
        description: "Dark roast espresso blend perfect for morning coffee.",
      },
      {
        title: "Traditional Singara",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        },
        quantity: 6,
        price: 12.99,
        stock: 25,
        discount: 0,
        category: "snacks",
        description:
          "Crispy triangular pastries filled with spiced potatoes and vegetables.",
      },
      {
        title: "Delicious Samosa",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop",
        },
        quantity: 8,
        price: 14.99,
        stock: 35,
        discount: 20,
        category: "snacks",
        description:
          "Golden brown samosas with savory filling and aromatic spices.",
      },
      {
        title: "Masala Chai",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 22.99,
        stock: 60,
        discount: 0,
        category: "tea",
        description:
          "Authentic Indian masala chai blend with cardamom, cinnamon, and ginger.",
      },
      {
        title: "French Roast Coffee",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 26.99,
        stock: 45,
        discount: 10,
        category: "coffee",
        description: "Bold French roast coffee with intense flavor and aroma.",
      },
      {
        title: "Mixed Snack Platter",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 18.99,
        stock: 20,
        discount: 25,
        category: "snacks",
        description:
          "Assorted traditional snacks including mini samosas, pakoras, and nuts.",
      },
      {
        title: "Chamomile Tea",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1597318985989-d9902ff8e90e?w=150&h=150&fit=crop",
          cover:
            "https://images.unsplash.com/photo-1597318985989-d9902ff8e90e?w=400&h=300&fit=crop",
        },
        quantity: 1,
        price: 16.99,
        stock: 55,
        discount: 0,
        category: "tea",
        description:
          "Relaxing chamomile tea perfect for evening relaxation and sleep.",
      },
      {
        title: "Earl Grey Supreme",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
          cover:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        },
        quantity: 1,
        price: 24.99,
        stock: 45,
        discount: 10,
        category: "tea",
        description:
          "Premium Earl Grey tea blend with bergamot oil and cornflower petals. A classic British tea with a sophisticated citrus aroma.",
      },
      {
        title: "Dragon Well Green Tea",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
          cover:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
        },
        quantity: 1,
        price: 32.5,
        stock: 30,
        discount: 0,
        category: "tea",
        description:
          "Authentic Chinese green tea with delicate, sweet flavor and beautiful flat leaves. Rich in antioxidants and perfect for daily wellness.",
      },
      {
        title: "Ethiopian Single Origin Coffee",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400",
          cover:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800",
        },
        quantity: 1,
        price: 28.75,
        stock: 25,
        discount: 15,
        category: "coffee",
        description:
          "Single origin Ethiopian coffee beans with bright, fruity notes and wine-like acidity. Hand-picked from high-altitude farms.",
      },
      {
        title: "Himalayan Gold Tea",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400",
          cover:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
        },
        quantity: 1,
        price: 45.0,
        stock: 20,
        discount: 0,
        category: "tea",
        description:
          "Rare high-altitude black tea from the Himalayas. Golden tips and muscatel flavor make this a truly premium tea experience.",
      },
      {
        title: "Colombian Dark Roast",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
          cover:
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
        },
        quantity: 1,
        price: 22.99,
        stock: 60,
        discount: 5,
        category: "coffee",
        description:
          "Rich, full-bodied Colombian coffee with chocolate and caramel notes. Perfect for espresso or French press brewing.",
      },
      {
        title: "Chamomile Dreams",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1627435916821-1f5e4c0b90b6?w=400",
          cover:
            "https://images.unsplash.com/photo-1627435916821-1f5e4c0b90b6?w=800",
        },
        quantity: 1,
        price: 18.5,
        stock: 40,
        discount: 0,
        category: "tea",
        description:
          "Soothing herbal tea blend with chamomile flowers, lavender, and honey. Perfect for relaxation and better sleep.",
      },
      {
        title: "Jamaica Blue Mountain Coffee",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?w=400",
          cover:
            "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?w=800",
        },
        quantity: 1,
        price: 65.0,
        stock: 15,
        discount: 0,
        category: "coffee",
        description:
          "World's most sought-after coffee from Jamaica's Blue Mountains. Mild, smooth flavor with no bitterness. Limited availability.",
      },
      {
        title: "Masala Chai Blend",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400",
          cover:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800",
        },
        quantity: 1,
        price: 21.25,
        stock: 35,
        discount: 8,
        category: "tea",
        description:
          "Traditional Indian spice tea with cardamom, cinnamon, ginger, and cloves. Authentic chai experience in every cup.",
      },
      {
        title: "Artisan Tea Cookies",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400",
          cover:
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800",
        },
        quantity: 12,
        price: 16.99,
        stock: 50,
        discount: 12,
        category: "snacks",
        description:
          "Handcrafted butter cookies infused with Earl Grey tea. Perfect companion for your afternoon tea time.",
      },
      {
        title: "Brazilian Santos Coffee",
        photo: {
          thumbnail:
            "https://images.unsplash.com/photo-1550681560-af9bc1cb339e?w=400",
          cover:
            "https://images.unsplash.com/photo-1550681560-af9bc1cb339e?w=800",
        },
        quantity: 1,
        price: 26.5,
        stock: 42,
        discount: 0,
        category: "coffee",
        description:
          "Smooth Brazilian coffee with nutty undertones and low acidity. Excellent for daily drinking and milk-based beverages.",
      },
    ];

    await Product.insertMany(sampleProducts);

    return NextResponse.json({
      message: "Sample products added successfully!",
      count: sampleProducts.length,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
