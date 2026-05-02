'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Users, Award } from 'lucide-react';

const stats = [
  { icon: Globe, label: 'Nationwide Delivery', value: '100%' },
  { icon: Users, label: 'Happy Retailers', value: '500+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Showroom" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">About TravelGear</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              The Leading Wholesale Partner for Your Travel Business
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2011, TravelGear has grown into the nation's most trusted wholesaler of suitcases and travel supplies. 
              We bridge the gap between world-class manufacturing and local retailers, ensuring you get premium products at competitive prices.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Direct-from-manufacturer wholesale rates',
                'Comprehensive range of sizes and styles',
                'Strict quality control on every shipment',
                'Reliable logistics and nationwide shipping'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
