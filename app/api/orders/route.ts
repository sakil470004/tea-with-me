import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { verifyToken } from '@/lib/auth';

// GET /api/orders - Get all orders (admin only)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Check authentication
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const status = url.searchParams.get('status');
    const search = url.searchParams.get('search');

    const skip = (page - 1) * limit;

    // Build filter
    const filter: Record<string, unknown> = {};
    if (status && status !== 'all') {
      filter.status = status;
    }
    if (search) {
      filter.$or = [
        { orderNumber: { $regex: search, $options: 'i' } },
        { 'customerInfo.name': { $regex: search, $options: 'i' } },
        { 'customerInfo.email': { $regex: search, $options: 'i' } }
      ];
    }

    const orders = await Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('items.productId', 'title category');

    const totalOrders = await Order.countDocuments(filter);
    const totalPages = Math.ceil(totalOrders / limit);

    return NextResponse.json({
      orders,
      pagination: {
        currentPage: page,
        totalPages,
        totalOrders,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('Get orders error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      customerInfo,
      items,
      pricing,
      paymentMethod,
      deliveryType,
      notes
    } = body;

    // Validate required fields
    if (!customerInfo || !items || !pricing || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate estimated delivery date
    const estimatedDelivery = new Date();
    switch (deliveryType) {
      case 'express':
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 1);
        break;
      case 'pickup':
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 1);
        break;
      default: // standard
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);
    }

    const order = new Order({
      customerInfo,
      items,
      pricing,
      paymentMethod,
      deliveryType,
      estimatedDelivery,
      notes,
      paymentStatus: paymentMethod === 'cash_on_delivery' ? 'pending' : 'pending'
    });

    await order.save();

    return NextResponse.json({
      message: 'Order created successfully',
      order: {
        _id: order._id,
        orderNumber: order.orderNumber,
        estimatedDelivery: order.estimatedDelivery,
        total: order.pricing.total
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}