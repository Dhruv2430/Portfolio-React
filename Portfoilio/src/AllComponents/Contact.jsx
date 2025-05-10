import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[
#11071F] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 rounded-2xl p-10 shadow-xl backdrop-blur-lg border border-white/10"
      >
        <h2 className="text-white text-4xl font-bold text-center mb-8">Let's Talk</h2>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-white mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Dhruv Panchal"
                className="w-full bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full bg-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-white/50"
              />
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