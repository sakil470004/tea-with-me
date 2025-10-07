
# 🍵 Tea With Me - Premium E-commerce Platform

A beautiful, full-stack Next.js e-commerce application specializing in premium teas, artisanal coffee, and delicious snacks. Built with modern web technologies and featuring a comprehensive product management system.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue)

## ✨ Features

### 🔐 Authentication System
- User registration and login with validation
- JWT-based authentication with HTTP-only cookies
- Protected dashboard and API routes
- Session management and logout functionality
- Email verification system

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse products by categories (Tea, Coffee, Snacks)
- **Product Details**: Individual product pages with full descriptions
- **Shopping Cart**: Add to cart functionality with localStorage persistence
- **Category Pages**: Dedicated pages for viewing all products by category
- **Search & Filter**: Advanced filtering by name, price, and category
- **Responsive Design**: Beautiful UI that works on all devices

### 📦 Product Management (Dashboard)
- Complete CRUD operations for products
- Advanced filtering and search capabilities
- Pagination with customizable items per page
- Real-time product updates with toast notifications
- Image upload support (thumbnail and cover images)
- Stock management and discount system

### 🎨 User Experience
- **Beautiful Design**: Professional gradient themes for each category
- **Loading States**: Skeleton loaders and smooth transitions
- **Error Handling**: Graceful image error handling with themed placeholders
- **Toast Notifications**: User-friendly feedback for all actions
- **Responsive Navigation**: Dynamic navbar based on authentication state

### 🔧 Technical Features
- **Image Error Handling**: Custom placeholders for failed image loads
- **Performance Optimized**: Static generation and optimized images
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Tailwind CSS with custom gradients and animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5.4, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes with App Router
- **Database**: MongoDB Atlas with Mongoose ODM
- **Authentication**: JWT with bcryptjs hashing
- **UI Components**: Custom components with Tailwind CSS
- **Image Handling**: Next.js Image component with error fallbacks
- **Notifications**: React Hot Toast
- **Deployment Ready**: Production-optimized build system

## 📱 Pages & Routes

### Public Routes
- **`/`** - Home page with product sections
- **`/auth/login`** - User login page
- **`/auth/register`** - User registration page
- **`/categories/tea`** - All tea products
- **`/categories/coffee`** - All coffee products  
- **`/categories/snacks`** - All snack products
- **`/products/[id]`** - Individual product detail pages

### Protected Routes
- **`/dashboard`** - Admin dashboard for product management

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000

# Database
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/tea-with-me?retryWrites=true&w=majority

# JWT Secret
secretKey=your-super-secret-jwt-key

# Application URL
App_URL=https://tea-with-me.vercel.app/
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sakil470004/tea-with-me.git
   cd tea-with-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection string
   - Set your JWT secret key
   ```bash
   cp .env.example .env
   ```

4. **Set up the database**
   ```bash
   # Seed the database with sample products && I can reset all data in database so that Someone cannot mess with database. 
   npm run dev
   # In another terminal:
   curl https://tea-with-me.vercel.app/api/seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [https://tea-with-me.vercel.app/](https://tea-with-me.vercel.app/)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📡 API Endpoints

### Authentication Routes
```
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/logout       # User logout
GET    /api/auth/verify       # Verify JWT token
```

### Product Routes
```
GET    /api/products          # Get all products (with filtering & pagination)
POST   /api/products          # Create product (auth required)
GET    /api/products/[id]     # Get single product
PUT    /api/products/[id]     # Update product (auth required)
DELETE /api/products/[id]     # Delete product (auth required)
```

### Utility Routes
```
GET   /api/seed              # Seed database with sample data
```

### Query Parameters for /api/products
```
?category=tea|coffee|snacks   # Filter by category
?search=keyword               # Search in title/description
?minPrice=10&maxPrice=50      # Price range filter
?page=1&limit=10              # Pagination
```

## 🎯 Usage Guide

### For Customers
1. **Browse Products**: Visit the home page to see featured products in each category
2. **Category Shopping**: Click "View All" buttons to browse complete categories
3. **Product Details**: Click any product to see detailed information and add to cart
4. **Shopping Cart**: Products persist in cart using localStorage

### For Administrators
1. **Login**: Access the dashboard at `/auth/login`
2. **Product Management**: 
   - View all products in a searchable, filterable table
   - Add new products with the "Add Product" button
   - Edit existing products by clicking the "Edit" button
   - Delete products with confirmation dialogs
3. **Advanced Features**:
   - Filter by category, price range, and search terms
   - Paginate through products (5, 10, 20, 50 per page)
   - Real-time notifications for all operations

## 🏗️ Project Structure

```
tea-with-me/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API Routes
│   │   ├── 📁 auth/                 # Authentication endpoints
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── verify/route.ts
│   │   ├── 📁 products/            # Product CRUD endpoints
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── 📁 seed/                # Database seeding
│   │       └── route.ts
│   ├── 📁 auth/                     # Authentication pages
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── 📁 categories/               # Category listing pages
│   │   ├── tea/page.tsx
│   │   ├── coffee/page.tsx
│   │   └── snacks/page.tsx
│   ├── 📁 products/                 # Product detail pages
│   │   └── [id]/page.tsx
│   ├── 📁 dashboard/                # Admin dashboard
│   │   └── page.tsx
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page
├── 📁 components/                   # Reusable components
│   ├── AuthProvider.tsx             # Authentication context
│   ├── Navbar.tsx                   # Navigation component
│   ├── Loading.tsx                  # Loading states
│   ├── ToastProvider.tsx            # Toast notifications
│   ├── TeaSection.tsx               # Tea products section
│   ├── CoffeeSection.tsx            # Coffee products section
│   └── SnacksSection.tsx            # Snacks products section
├── 📁 lib/                          # Utility functions
│   ├── auth.ts                      # JWT utilities
│   └── mongodb.ts                   # Database connection
├── 📁 models/                       # Database models
│   ├── Product.ts                   # Product schema
│   └── User.ts                      # User schema
├── 📁 public/                       # Static assets
│   └── (images & icons)
├── package.json                     # Dependencies & scripts
├── next.config.ts                   # Next.js configuration
├── tailwind.config.js              # Tailwind CSS config
├── tsconfig.json                    # TypeScript config
└── .env                            # Environment variables
```

## 📊 Database Schema

### User Model
```typescript
{
  _id: ObjectId
  name: string
  email: string (unique)
  password: string (hashed)
  createdAt: Date
  updatedAt: Date
}
```

### Product Model
```typescript
{
  _id: ObjectId
  title: string
  photo: {
    thumbnail: string (URL)
    cover: string (URL)
  }
  quantity: number
  price: number
  stock: number
  discount: number (percentage)
  category: 'tea' | 'coffee' | 'snacks'
  description: string
  createdAt: Date
  updatedAt: Date
}
```

## 🔒 Security Features

- **Password Security**: Bcrypt hashing with salt rounds
- **JWT Authentication**: HTTP-only cookies for token storage
- **Route Protection**: Middleware-based authentication checks
- **Input Validation**: Server-side validation for all endpoints
- **CORS Protection**: Configured for production security
- **Environment Variables**: Sensitive data stored securely
- **SQL Injection Prevention**: MongoDB with Mongoose ORM protection

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all `.env` variables in Vercel dashboard
3. **Deploy**: Automatic deployments on push to main branch

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Setup for Production
```env
# Production Environment Variables
PORT=3001
DB_URI=mongodb+srv://user:pass@cluster.mongodb.net/tea-with-me-prod
secretKey=super-secret-production-key
App_URL=https://your-domain.com
NODE_ENV=production
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build test
npm run build

# Type checking
npm run type-check
```

## 📈 Performance Features

- **Static Generation**: Pre-rendered pages for better SEO
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic bundle splitting for faster loads
- **Caching**: Optimized caching strategies
- **Responsive Images**: Multiple sizes for different screen resolutions

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git fork https://github.com/sakil470004/tea-with-me.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow TypeScript best practices
   - Maintain consistent code style
   - Add proper error handling

4. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

5. **Submit a pull request**
   - Provide clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **MongoDB** - For the robust database solution
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For inspiration and resources

## 📞 Support

If you encounter any issues or have questions:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact the maintainer**: [sakil470004](https://github.com/sakil470004)

---

**Made with ❤️ by [Sakil](https://github.com/sakil470004)**

*Bringing premium tea and coffee experiences to the digital world* ☕🍵
