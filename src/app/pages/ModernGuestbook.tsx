import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Send, User as UserIcon, Calendar, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Label } from '../components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
  avatar: string;
}

export default function ModernGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Amazing portfolio! Your projects are really impressive and the attention to detail is outstanding. Keep up the great work! 🚀',
      date: '2026-03-28',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 2,
      name: 'Ahmad Rizky',
      message: 'Keren banget portfolionya mas! Inspirasinya buat gue juga. Semoga sukses terus di karir developmentnya ya! 💪',
      date: '2026-03-27',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      message: 'Your work is outstanding! Really clean design and great functionality. Would love to collaborate on a project sometime. ✨',
      date: '2026-03-26',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
    },
    {
      id: 4,
      name: 'Budi Santoso',
      message: 'Mantap bang! Projectnya keren-keren semua. Salut sama dedikasi dan skill yang dimiliki. Good luck! 🔥',
      date: '2026-03-25',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi'
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
      date: new Date().toISOString().split('T')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
    };

    setEntries([newEntry, ...entries]);
    toast.success('Thank you for signing my guestbook! 🎉');
    setFormData({ name: '', message: '' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-8 py-12 lg:px-16 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">Guestbook</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Leave your mark! Share your thoughts, feedback, or just say hi 👋
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sign Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Send className="w-5 h-5" />
                  <h2 className="font-bold text-xl">Sign the Guestbook</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="guestName">Your Name *</Label>
                    <Input
                      id="guestName"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guestMessage">Your Message *</Label>
                    <Textarea
                      id="guestMessage"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Leave your message here..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Heart className="w-4 h-4" />
                    Sign Guestbook
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{entries.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Signatures</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Entries List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Entries</h2>
              <Badge variant="secondary" className="text-sm">
                {entries.length} messages
              </Badge>
            </div>

            <AnimatePresence mode="popLayout">
              {entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 ring-2 ring-gray-200 dark:ring-gray-800">
                          <AvatarImage src={entry.avatar} />
                          <AvatarFallback>
                            <UserIcon className="w-6 h-6" />
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{entry.name}</h3>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(entry.date)}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {entry.message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {entries.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    No entries yet. Be the first to sign!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
