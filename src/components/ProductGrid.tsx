'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Titanium Hardshell Suite',
    category: 'Premium Series',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Explorer Softside Spinner',
    category: 'Business Class',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Urban Backpack XL',
    category: 'Travel Essentials',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Nomad Carry-On Case',
    category: 'Lightweight',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Duffel Weekender Pro',
    category: 'Premium Series',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Global Organizer Set',
    category: 'Accessories',
    price: 'Wholesale Only',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Catalog</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Wholesale Featured Products
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            High-quality travel gear designed for longevity and performance. Available for bulk orders nationwide.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={item}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href="#contact" 
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-bold text-gray-700">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                  <ShoppingBag size={20} className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8 italic">Need a custom catalog or bulk pricing list?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
          >
            Download Wholesale Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
