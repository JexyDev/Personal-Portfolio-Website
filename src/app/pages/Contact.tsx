import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Github, Clock, Video } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jeremy@example.com',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'Github',
      icon: Github,
      url: 'https://github.com',
      color: 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
    }
  ];

  return (
    <div className="min-h-screen text-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-orange-400">
            Feel free to get in touch and let's have a discussion about how we can work together.
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Social Media Links */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Find me on social media</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${link.color} text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-medium text-sm`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Book a Call */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Book a Call</h2>
          <div className="bg-teal-900/30 border border-teal-500/30 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">1 on 1 Chit-chat Session</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Let's find some time to talk about anything
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>Google Meet</span>
                  </div>
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Or send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message*
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-lg transition-colors font-medium"
            >
              Send Message
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Avg. response: 1-2 hours (Working Hours, GMT+7)</span>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
