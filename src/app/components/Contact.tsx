import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, User, MessageSquare, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Andi Pratama',
      message: 'Portfolio yang keren banget! Sukses terus Jeremy! 🚀',
      timestamp: '2 days ago',
    },
    {
      id: 2,
      name: 'Lisa Permata',
      message: 'Impressive work for a 17 year old developer. Keep it up!',
      timestamp: '5 days ago',
    },
    {
      id: 3,
      name: 'Dimas Raharja',
      message: 'Clean design dan smooth animations. Love it! ✨',
      timestamp: '1 week ago',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: 'Just now',
    };

    setGuestbookEntries([newEntry, ...guestbookEntries]);
    setFormData({ name: '', message: '' });
    toast.success('Thank you for signing my guestbook! 🎉');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's work together or just say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/50 dark:bg-black/50 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:jeremy@example.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">jeremy@example.com</span>
                </motion.a>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Find me on
                  </h4>
                  <div className="flex gap-3">
                    {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                      <motion.button
                        key={platform}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {platform}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Guestbook Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/50 dark:bg-black/50 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <MessageSquare className="w-5 h-5" />
                Leave a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave a nice message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>

              {/* Recent Guestbook Entries */}
              <div>
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Heart className="w-4 h-4" />
                  Recent messages ({guestbookEntries.length})
                </h4>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {guestbookEntries.map((entry) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-gray-900 dark:text-white">
                          {entry.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {entry.message}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
