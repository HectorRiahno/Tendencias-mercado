import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Lavender Dreams",
      description: "Soothing lavender scent perfect for relaxation and sleep",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1602874801006-2670998dc11d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Vanilla Bliss",
      description: "Warm vanilla fragrance that creates a cozy atmosphere",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Citrus Burst",
      description: "Energizing citrus blend to brighten any room",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-candle-gold">🕯️ LuxeScents</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-candle-gold px-3 py-2 transition-colors">Home</a>
                <a href="#products" className="text-gray-700 hover:text-candle-gold px-3 py-2 transition-colors">Products</a>
                <a href="#about" className="text-gray-700 hover:text-candle-gold px-3 py-2 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-candle-gold px-3 py-2 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-candle-gold"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-gray-700 hover:text-candle-gold block px-3 py-2">Home</a>
              <a href="#products" className="text-gray-700 hover:text-candle-gold block px-3 py-2">Products</a>
              <a href="#about" className="text-gray-700 hover:text-candle-gold block px-3 py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-candle-gold block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-candle-warm to-candle-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Illuminate Your
                <span className="text-candle-gold block">Sacred Space</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Handcrafted scented candles made with premium soy wax and natural fragrances. 
                Transform your home into a sanctuary of peace and tranquility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Shop Collection</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602874801006-2670998dc11d?w=600&h=600&fit=crop" 
                alt="Beautiful scented candles" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-sm text-gray-600">Premium Quality</p>
                <p className="text-2xl font-bold text-candle-gold">100% Natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LuxeScents?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every candle is carefully crafted with love, using only the finest ingredients 
              to create an unforgettable sensory experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-candle-warm">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Natural Ingredients</h3>
              <p className="text-gray-700">
                Made with 100% soy wax and essential oils, our candles are eco-friendly and safe for your home.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-candle-warm">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Handcrafted</h3>
              <p className="text-gray-700">
                Each candle is individually poured and finished by hand, ensuring unique quality and attention to detail.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-candle-warm">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Long Lasting</h3>
              <p className="text-gray-700">
                Our premium soy wax formula provides up to 50+ hours of clean, even burning for lasting enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600">
              Discover our signature scents, each designed to evoke a unique mood and atmosphere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-candle-gold">{product.price}</span>
                    <button className="bg-candle-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">View All Products</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop" 
                alt="Candle making process" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a passion project in my kitchen has grown into LuxeScents, 
                a brand dedicated to creating exceptional candles that transform spaces and moments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every candle tells a story of craftsmanship, sustainability, and the belief that 
                small luxuries can make everyday life extraordinary. We source the finest materials 
                and pour our hearts into every creation.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-candle-gold">500+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-candle-gold">15+</p>
                  <p className="text-gray-600">Unique Scents</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-candle-gold">100%</p>
                  <p className="text-gray-600">Natural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-candle-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-700">
              Have questions about our candles or want to place a custom order? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <span className="text-lg">hello@luxescents.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📱</span>
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg">Your City, State 12345</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-candle-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
                    <span>📘</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-candle-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
                    <span>📷</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-candle-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors">
                    <span>🐦</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-candle-gold"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-candle-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-candle-gold"
                    placeholder="Tell us about your candle needs..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-candle-gold mb-4">🕯️ LuxeScents</h3>
            <p className="text-gray-400 mb-6">
              Handcrafted candles that illuminate your world
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 LuxeScents. All rights reserved. | Made with ❤️ for candle lovers everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
