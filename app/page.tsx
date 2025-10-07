import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-orange-200/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
                  Premium <span className="text-amber-500">Tea</span> & 
                  <span className="text-orange-400"> Coffee</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl">Experience</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                  Discover the finest collection of handpicked teas, artisan coffees, and traditional snacks. 
                  From the serene tea gardens to your cup, every sip tells a story.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/register" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="#products" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-500 bg-white border-2 border-amber-400 hover:bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Explore Products
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-500 font-medium">100% Organic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-500 font-medium">Fresh Daily</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800&h=600&fit=crop"
                  alt="Premium tea setup"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Our Premium Collection</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Carefully curated selection of the world&apos;s finest teas, coffees, and traditional snacks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tea Category */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&h=300&fit=crop"
                  alt="Premium Tea Collection"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Premium Teas</h3>
                  <p className="text-sm opacity-90">From around the world</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 mb-4">
                  Discover our handpicked collection of Earl Grey, Green Tea, Masala Chai, and more exotic blends.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-semibold">From $16.99</span>
                  <Link href="/auth/register" className="text-amber-400 hover:text-amber-500 font-medium">
                    Explore →
                  </Link>
                </div>
              </div>
            </div>

            {/* Coffee Category */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559056961-84584a6b0c82?q=80&w=400&h=300&fit=crop"
                  alt="Artisan Coffee Collection"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Artisan Coffee</h3>
                  <p className="text-sm opacity-90">Freshly roasted</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 mb-4">
                  Premium Colombian, French Roast, and Espresso blends sourced from the finest coffee farms.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-semibold">From $26.99</span>
                  <Link href="/auth/register" className="text-amber-400 hover:text-amber-500 font-medium">
                    Explore →
                  </Link>
                </div>
              </div>
            </div>

            {/* Snacks Category */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&h=300&fit=crop"
                  alt="Traditional Snacks"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Traditional Snacks</h3>
                  <p className="text-sm opacity-90">Authentic flavors</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 mb-4">
                  Delicious Singara, Samosa, and other traditional snacks perfect with your tea or coffee.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-semibold">From $12.99</span>
                  <Link href="/auth/register" className="text-amber-400 hover:text-amber-500 font-medium">
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Why Choose Tea With Me?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              We&apos;re passionate about bringing you the finest tea and coffee experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-200 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Premium Quality</h3>
              <p className="text-gray-500">Handpicked and sourced from the finest gardens worldwide</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-200 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Fresh Daily</h3>
              <p className="text-gray-500">Daily fresh preparations to ensure maximum flavor and aroma</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-200 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Made with Love</h3>
              <p className="text-gray-500">Every product crafted with care and traditional methods</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-200 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Fast Delivery</h3>
              <p className="text-gray-500">Quick and secure delivery right to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-500">Join thousands of satisfied tea and coffee lovers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mb-6 italic">
                &ldquo;The Earl Grey tea is absolutely divine! The quality and flavor are unmatched. 
                It&apos;s become my daily ritual.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-700">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">Tea Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mb-6 italic">
                &ldquo;Best coffee beans I&apos;ve ever had! The Colombian blend is rich and perfect for my morning routine. 
                Highly recommended!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-700">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">Coffee Lover</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mb-6 italic">
                &ldquo;The traditional snacks are authentic and delicious! Perfect companions for tea time. 
                Fast delivery too!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-700">Priya Sharma</h4>
                  <p className="text-gray-400 text-sm">Food Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Tea Journey?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Join our community of tea and coffee enthusiasts. Get access to exclusive blends, 
            special offers, and expert brewing guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/register" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-400 bg-white hover:bg-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Create Account
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/auth/login" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-amber-400 rounded-xl transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Tea With Me</h3>
              <p className="text-gray-200 mb-6 max-w-md">
                Your premium destination for the finest teas, coffees, and traditional snacks. 
                Bringing you authentic flavors from around the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/auth/register" className="text-gray-200 hover:text-amber-300 transition-colors">Register</Link></li>
                <li><Link href="/auth/login" className="text-gray-200 hover:text-amber-300 transition-colors">Login</Link></li>
                <li><a href="#products" className="text-gray-200 hover:text-amber-300 transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-200 hover:text-amber-300 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-200">
                <li>📧 hello@teawithme.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 123 Tea Street, Brew City</li>
                <li>🕒 Mon-Fri: 8AM-8PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Tea With Me. All rights reserved. Made with ❤️ for tea lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
