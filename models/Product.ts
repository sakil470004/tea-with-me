import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Product title is required'],
    trim: true,
  },
  photo: {
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
    },
    cover: {
      type: String,
      required: [true, 'Cover photo is required'],
    },
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: [0, 'Stock cannot be negative'],
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['tea', 'coffee', 'snacks'],
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Add index for search optimization
ProductSchema.index({ title: 'text', description: 'text' });
ProductSchema.index({ price: 1 });
ProductSchema.index({ category: 1 });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);