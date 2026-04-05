import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, User, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Amazing portfolio! Your projects are really impressive. Keep up the great work! 🚀',
      date: '2026-03-28'
    },
    {
      id: 2,
      name: 'Ahmad Rizky',
      message: 'Keren banget portfolionya mas! Inspirasinya buat gue juga. Sukses terus ya!',
      date: '2026-03-27'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      message: 'Your work is outstanding! Really clean design and great functionality. Would love to collaborate sometime.',
      date: '2026-03-26'
    },
    {
      id: 4,
      name: 'Budi Santoso',
      message: 'Mantap bang! Projectnya keren-keren. Good luck for your career!',
      date: '2026-03-25'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEntry: GuestbookEntry = {
      id: entries.length + 1,
      name: formData.name,
      message: formData.message,
      date: new Date().toISOString().split('T')[0]
    };

    setEntries([newEntry, ...entries]);
    toast.success('Thank you for signing my guestbook! 🎉');
    setFormData({ name: '', message: '' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen text-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Guestbook</h1>
          <p className="text-gray-400">
            Leave a comment below. It could be anything - appreciation, information, wisdom, or even humor. Surprise me! 😄
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Sign Guestbook Form */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Sign the Guestbook
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div>
              <label htmlFor="guestName" className="block text-sm text-gray-400 mb-2">
                Your Name*
              </label>
              <input
                type="text"
                id="guestName"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="guestMessage" className="block text-sm text-gray-400 mb-2">
                Your Message*
              </label>
              <textarea
                id="guestMessage"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Leave your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Sign Guestbook</span>
            </button>
          </form>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Guestbook Entries */}
        <div>
          <h2 className="text-xl font-bold mb-6">
            Recent Entries ({entries.length})
          </h2>
          
          <div className="space-y-4 max-w-3xl">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{entry.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(entry.date)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {entry.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {entries.length === 0 && (
            <div className="text-center py-12 bg-gray-900/30 border border-gray-800 rounded-xl">
              <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No entries yet. Be the first to sign the guestbook!</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
