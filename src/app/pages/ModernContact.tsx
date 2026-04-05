import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Linkedin, Github, Instagram, Calendar, Clock, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      username: 'JexyDev@gmail.com',
      icon: Mail,
      url: 'mailto:JexyDev@gmail.com',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      username: '@JexyDev',
      icon: Linkedin,
      url: 'https://linkedin.com/in/JeremyDarrell',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'GitHub',
      username: '@JexyDev',
      icon: Github,
      url: 'https://github.com/JexyDev',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    },
    {
      name: 'Instagram',
      username: '@Jeree.xy',
      icon: Instagram,
      url: 'https://instagram.com/Jeree.xy',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-900'
    }
  ];

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
            <MessageSquare className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me more about your project..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Typical response time: 1-2 hours (GMT+7)</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {link.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <div className="font-medium">Available for work</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Open to freelance projects
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Response time</span>
                    <span className="font-medium">1-2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Timezone</span>
                    <span className="font-medium">GMT+7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Location</span>
                    <span className="font-medium">Bogor, ID</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book a Call */}
            <Card className="border-2 border-black dark:border-white">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="font-bold text-lg mb-2">Schedule a Call</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Let's discuss your project over a 30-minute video call
                </p>
                <Button variant="default" className="w-full">
                  Book a Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}