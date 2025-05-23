import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';

const FullContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-[#11071F] to-[#1a0f29] min-h-screen text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-96 w-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="h-80 w-80 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-full blur-3xl absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="h-64 w-64 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl absolute top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '2s', animationDuration: '10s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">Get In Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:border-white/20 group">
              <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">Contact Information</h2>
              
              <div className="space-y-7">
                <div className="flex items-start group/item">
                  <div className="p-3 bg-white/5 group-hover/item:bg-white/10 rounded-lg mr-4 transition-all duration-300 border border-white/5 shadow-lg">
                    <Mail className="text-purple-300 group-hover/item:text-purple-200 transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Email</h3>
                    <p className="text-white group-hover/item:text-purple-200 transition-all duration-300">hello@yourportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group/item">
                  <div className="p-3 bg-white/5 group-hover/item:bg-white/10 rounded-lg mr-4 transition-all duration-300 border border-white/5 shadow-lg">
                    <Phone className="text-purple-300 group-hover/item:text-purple-200 transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                    <p className="text-white group-hover/item:text-purple-200 transition-all duration-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start group/item">
                  <div className="p-3 bg-white/5 group-hover/item:bg-white/10 rounded-lg mr-4 transition-all duration-300 border border-white/5 shadow-lg">
                    <MapPin className="text-purple-300 group-hover/item:text-purple-200 transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Location</h3>
                    <p className="text-white group-hover/item:text-purple-200 transition-all duration-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pb-4">
                <h3 className="text-lg font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20">
                    <svg className="w-5 h-5 fill-current text-purple-300 hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20">
                    <svg className="w-5 h-5 fill-current text-purple-300 hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20">
                    <svg className="w-5 h-5 fill-current text-purple-300 hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20">
                    <svg className="w-5 h-5 fill-current text-purple-300 hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:border-white/20">
              <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">Send a Message</h2>
              
              {submitted ? (
                <div className="p-8 rounded-xl text-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                          placeholder="John Doe"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                          placeholder="john@example.com"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                        placeholder="Project Inquiry"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.4)] disabled:opacity-70 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center relative z-10">
                        <Loader className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center relative z-10">
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullContact;