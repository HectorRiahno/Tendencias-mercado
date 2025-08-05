import { useState } from 'react'
import { Star, Flame, Clock, Heart, Gift } from 'lucide-react';
import './App.css'

function App() {
  const [email, setEmail] = useState('');

  const products = [
    {
      id: 1,
      name: 'Vela Lavanda Relajante',
      description: 'Perfecta para momentos de relajación y meditación',
      price: '$24.99',
      image: '/api/placeholder/250/250',
      isNew: true
    },
    {
      id: 2,
      name: 'Vela Vainilla Canela',
      description: 'Aroma cálido y acogedor para tu hogar',
      price: '$22.99',
      image: '/api/placeholder/250/250'
    },
    {
      id: 3,
      name: 'Vela Rosa Damascena',
      description: 'Romántica y refinada con cada fragancia',
      price: '$28.99',
      image: '/api/placeholder/250/250'
    },
    {
      id: 4,
      name: 'Vela Eucalipto Fresh',
      description: 'Energizante y purificante para espacios frescos',
      price: '$26.99',
      image: '/api/placeholder/250/250'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      rating: 5,
      text: 'Las velas son increíbles, el aroma dura todo y la calidad es excepcional. Totalmente recomendadas.'
    },
    {
      name: 'Carlos Mendoza',
      rating: 5,
      text: 'Excelente servicio al cliente y productos únicamente. El packaging es hermoso.'
    },
    {
      name: 'Ana Ruiz',
      rating: 5,
      text: 'Me encantan todas las fragancias, me ayudan mucho a relajarme después del trabajo.'
    }
  ];

  const features = [
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: 'Cera Natural',
      description: 'Elaboradas con cera de soja 100% natural libre de toxinas'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Larga Duración',
      description: 'Hasta 50 horas de aromático ambiente sin perder'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Hechas con Amor',
      description: 'Cada vela es creada artesanalmente con dedicación y cuidado'
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: 'Regalo Perfecto',
      description: 'Presentación elegante, ideal para obsequiar en cualquier ocasión'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">LuzAroma</span>
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm xl:text-base">Productos</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm xl:text-base">Nosotros</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm xl:text-base">Testimonios</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm xl:text-base">Contacto</a>
            </nav>
            <button className="bg-orange-500 text-white px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full hover:bg-orange-600 transition-colors">
              <span className="hidden sm:inline">Comprar Ahora</span>
              <span className="sm:hidden">Comprar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-orange-100 text-orange-800">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Velas Calendula Premium 2024
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Velas Aromáticas<br />
            <span className="text-orange-500">Artesanales</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Transforma tu hogar en un oasis de tranquilidad con nuestras velas 
            aromáticas premium. Hechas con cera natural y fragancias excepcionales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base">
              Ver Colección
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors font-semibold text-sm sm:text-base">
              Conoce Más
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-center">
                <div className="w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Flame className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-white opacity-80" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Arte en cada vela</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Diseños únicos inspirados en el arte urbano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Productos Destacados</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Descubre nuestra selección de velas aromáticas más populares, cada una 
              cuidadosamente elaborada para crear la atmósfera perfecta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center">
                      <Flame className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-orange-500">{product.price}</span>
                    <button className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-xs sm:text-sm font-semibold">
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">¿Por Qué Elegir LuzAroma?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Cada vela que creamos es el resultado de años de experiencia y pasión por
              la aromaterapia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-full group-hover:bg-orange-50 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Miles de clientes satisfechos respaldan la calidad de nuestras velas
              aromáticas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Hogar?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Únete a miles de personas que ya disfrutan de la magia de nuestras velas
            aromáticas. Envío gratis en pedidos superiores a $50.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Ver Todas las Velas
            </button>
            <input
              type="email"
              placeholder="Tu email aquí"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">LuzAroma</span>
              </div>
              <p className="text-gray-400">
                Creando momentos mágicos con velas
                artesanales de calidad desde 2020.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Velas Aromáticas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sets de Regalos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accesorios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NUEVAS CATEGORIZADAS</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +1 (555) 123-4567</p>
                <p>📧 info@luzaroma.com</p>
                <p>🏠 Bogotá, Colombia</p>
                <p>🕒 Lun-Vie: 9:00-18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 LuzAroma. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
