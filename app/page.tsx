import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-800">Tea With Me</h1>
            </div>
            <nav className="flex space-x-4">
              <Link 
                href="/auth/login" 
                className="text-amber-700 hover:text-amber-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Welcome to <span className="text-amber-600">Tea With Me</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Your cozy destination for premium teas, aromatic coffees, and delicious snacks. 
            From classic tea blends to traditional Singara and Samosa, we bring you the finest flavors.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/auth/register" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Get Started
            </Link>
            <Link 
              href="/auth/login" 
              className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🍵</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Teas</h3>
            <p className="text-gray-600">
              Discover our collection of carefully selected teas from around the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Coffee</h3>
            <p className="text-gray-600">
              Enjoy freshly roasted coffee beans brewed to perfection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🥟</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Delicious Snacks</h3>
            <p className="text-gray-600">
              Savor traditional snacks like Singara, Samosa, and more delightful treats.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Tea With Me. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
