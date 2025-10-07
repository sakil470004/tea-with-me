
# Tea With Me - E-commerce Platform

A full-stack Next.js application for selling tea, coffee, and snacks with complete authentication and product management features.

## Features

### Authentication
- User registration and login
- JWT-based authentication with HTTP-only cookies
- Protected dashboard routes
- Logout functionality

### Product Management
- Full CRUD operations for products
- Advanced filtering by name, price, and category
- Pagination with customizable items per page
- Optimized search functionality
- Product photo support (thumbnail and cover images)
- Toast notifications for all operations

### Product Model
- Title
- Photo (thumbnail and cover)
- Quantity
- Price
- Stock management
- Discount percentage
- Category (tea, coffee, snacks)
- Description

## Tech Stack

- **Frontend**: Next.js 15.5.4, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **UI**: React Hot Toast for notifications
- **Image Handling**: Next.js Image component

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/tea-with-me?retryWrites=true&w=majority
secretKey=your-secret-key
App_URL=http://localhost:3000
```

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB database and update the `.env` file
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify authentication

### Products
- `GET /api/products` - Get all products with filtering and pagination
- `POST /api/products` - Create new product (requires authentication)
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product (requires authentication)
- `DELETE /api/products/[id]` - Delete product (requires authentication)

## Usage

1. **Home Page**: Welcome page with navigation to login/register
2. **Registration**: Create a new account
3. **Login**: Sign in to access the dashboard
4. **Dashboard**: 
   - View all products in a table format
   - Filter products by name, price range, and category
   - Add new products with the "Add Product" button
   - Edit existing products by clicking "Edit"
   - Delete products with confirmation
   - Navigate through pages using pagination

## Product Management Features

- **Filtering**: Search by name, filter by price range and category
- **Pagination**: Configurable items per page (5, 10, 20, 50)
- **Search Optimization**: Text-based search in title and description
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Image Support**: Thumbnail and cover image URLs
- **Stock Management**: Track inventory levels
- **Discount System**: Percentage-based discounts

## Security Features

- Password hashing with bcryptjs
- JWT tokens stored in HTTP-only cookies
- Protected API routes requiring authentication
- Input validation and sanitization
- CORS protection

## Project Structure

```
tea-with-me/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── verify/route.ts
│   │   └── products/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthProvider.tsx
│   ├── Loading.tsx
│   └── ToastProvider.tsx
├── lib/
│   ├── auth.ts
│   └── mongodb.ts
├── models/
│   ├── Product.ts
│   └── User.ts
├── public/
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
