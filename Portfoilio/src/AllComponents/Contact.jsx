import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#11071F] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Decorative Blurred Background Circles */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 bg-purple-700/40 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 h-64 w-64 bg-pink-600/30 rounded-full blur-3xl z-0" />



      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 rounded-2xl p-10 shadow-xl backdrop-blur-lg border border-white/10 relative z-10"
      >
        <h2 className="text-white text-4xl font-bold text-center mb-8">Let's Talk</h2>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-white mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-white/50" size={18} />
                <input
                  type="text"
                  id="name"
                  placeholder="Dhruv Panchal"
                  className="w-full pl-10 bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-white/50" size={18} />
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-white mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Project Inquiry"
              className="w-full bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              className="w-full bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
