import { ArrowRight, Check, Anchor, Users, Shield, Star, Phone, Mail, MapPin, Calendar, Clock, Waves } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AquaRent</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#fleet" className="text-gray-600 hover:text-blue-600 transition-colors">Our Fleet</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Navigate Your
              <span className="text-cyan-300"> Perfect Day</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
              Discover the freedom of the open water with our premium fleet of boats. 
              From sunset cruises to fishing adventures, create unforgettable memories on the waves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
                <Waves className="w-6 h-6" />
                Start Your Adventure
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-colors text-lg font-semibold">
                View Our Fleet
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose AquaRent?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium boat rental services. We provide everything you need for the perfect day on the water.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                All our boats are regularly inspected and equipped with the latest safety equipment. Our experienced team ensures your safety is our top priority.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Crew</h3>
              <p className="text-gray-600 leading-relaxed">
                Our professional captains have years of experience and local knowledge. Sit back, relax, and let us navigate to the best spots.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                <Star className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Fleet</h3>
              <p className="text-gray-600 leading-relaxed">
                From luxury yachts to fishing boats, our diverse fleet is maintained to the highest standards for your comfort and enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our carefully curated selection of boats for every occasion
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Luxury Yacht */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Anchor className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Luxury Yacht Image</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Luxury Yacht</h3>
                <p className="text-gray-600 mb-4">Perfect for special occasions and corporate events. Accommodates up to 12 guests with premium amenities.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">$499</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Fishing Boat */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Anchor className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Fishing Boat Image</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sport Fishing</h3>
                <p className="text-gray-600 mb-4">Equipped with professional fishing gear and fish finders. Perfect for serious anglers and fishing enthusiasts.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">$299</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Speedboat */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Anchor className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Speedboat Image</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Speedboat</h3>
                <p className="text-gray-600 mb-4">High-performance boat for thrill-seekers. Great for water sports, island hopping, and adrenaline adventures.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">$199</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Boat Rental Services
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We handle everything so you can focus on enjoying your time on the water
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-blue-200">Simple online booking system with instant confirmation and flexible scheduling options.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Professional Crew</h3>
              <p className="text-blue-200">Licensed captains and crew members with extensive local knowledge and safety training.</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full Insurance</h3>
              <p className="text-blue-200">Comprehensive insurance coverage for peace of mind during your water adventures.</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-blue-200">Round-the-clock support and emergency assistance whenever you're on the water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees, no surprises. Just honest pricing for unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Half Day */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Half Day</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$149</div>
                <p className="text-gray-500 mb-6">4 hours on the water</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Professional captain included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Safety equipment provided</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Fuel and insurance included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Up to 6 passengers</span>
                  </li>
                </ul>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                  Book Half Day
                </button>
              </div>
            </div>

            {/* Full Day - Popular */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 relative transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Full Day</h3>
                <div className="text-5xl font-bold mb-2">$249</div>
                <p className="text-blue-200 mb-6">8 hours of adventure</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span>Everything in Half Day</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span>Complimentary lunch</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span>Fishing equipment included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span>Island hopping tour</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span>Snorkeling gear provided</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                  Book Full Day
                </button>
              </div>
            </div>

            {/* Sunset Cruise */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sunset Cruise</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$99</div>
                <p className="text-gray-500 mb-6">2.5 hours of magic</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Romantic sunset experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Complimentary champagne</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Light appetizers included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Perfect for couples</span>
                  </li>
                </ul>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                  Book Sunset Cruise
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Absolutely incredible experience! The crew was professional, the boat was immaculate, and the sunset cruise was magical. Will definitely book again!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500">Sunset Cruise</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Perfect for our corporate event! The yacht was luxurious and the service was top-notch. Our clients were thoroughly impressed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                  <p className="text-gray-500">Luxury Yacht</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The fishing trip was amazing! Caught more fish than ever before. The captain knew all the best spots and provided excellent guidance."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">David Rodriguez</h4>
                  <p className="text-gray-500">Fishing Charter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Set Sail?
              </h2>
              <p className="text-xl text-blue-200">
                Contact us today to book your perfect boat rental experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-blue-200">(555) 123-BOAT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-blue-200">info@aquarent.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold">Visit Our Marina</p>
                      <p className="text-blue-200">123 Harbor Drive, Coastal City, CC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Operating Hours</h4>
                  <div className="text-blue-200 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    <p>Holidays: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Booking</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                      <option>Select Boat Type</option>
                      <option>Luxury Yacht</option>
                      <option>Fishing Boat</option>
                      <option>Speedboat</option>
                      <option>Sunset Cruise</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" />
                  </div>
                  <div>
                    <textarea placeholder="Special Requirements or Questions" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Anchor className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold">AquaRent</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for unforgettable water adventures. Creating memories one voyage at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Yacht Rentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fishing Charters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sunset Cruises</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Water Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Fleet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Booking Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AquaRent. All rights reserved. Built with Next.js and Tailwind CSS for deployment testing.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}