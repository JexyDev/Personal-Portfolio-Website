import { useState } from 'react';
import { motion } from 'motion/react';
import { FolderOpen, ExternalLink, Github, Star, Filter } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ModernProjects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'PT Tokopedia Indonesia',
      category: 'E-Commerce Platform',
      description: 'Marketplace terbesar di Indonesia dengan sistem pembayaran terintegrasi, sistem rating & review, live chat support, dan dashboard seller yang komprehensif. Mendukung jutaan transaksi per hari dengan performa optimal.',
      image: 'https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MDM5NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
      featured: true,
      year: '2026',
      status: 'Live'
    },
    {
      title: 'PT Gojek Indonesia',
      category: 'Super App Platform',
      description: 'Platform multi-layanan terlengkap dengan fitur transportasi online, food delivery, payment gateway, dan berbagai layanan on-demand lainnya. Real-time tracking dengan teknologi GPS dan maps integration.',
      image: 'https://images.unsplash.com/photo-1762330918617-e135c98d40fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZWR1Y2F0aW9uJTIwYXBwfGVufDF8fHx8MTc3NTEyMzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Go', 'MongoDB', 'WebSocket', 'AWS'],
      featured: true,
      year: '2026',
      status: 'Live'
    },
    {
      title: 'PT Bukalapak',
      category: 'E-Commerce',
      description: 'Platform marketplace dengan fokus pada UMKM Indonesia. Sistem pembayaran multi-channel, program cicilan, merchant dashboard, dan integrasi logistik ke seluruh Indonesia dengan tracking real-time.',
      image: 'https://images.unsplash.com/photo-1644571580646-7048372c491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwY29uc29sZXxlbnwxfHx8fDE3NzUxMjMxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Kubernetes'],
      featured: false,
      year: '2025',
      status: 'Live'
    },
    {
      title: 'PT Traveloka Indonesia',
      category: 'Travel & Booking',
      description: 'Platform booking perjalanan terlengkap untuk tiket pesawat, hotel, kereta api, dan aktivitas wisata. Payment gateway multi-currency, loyalty program, dan customer service 24/7 dengan AI chatbot integration.',
      image: 'https://images.unsplash.com/photo-1571510146576-5b5b0f214bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJvYXQlMjBzYWlsaW5nfGVufDF8fHx8MTc3NTEyMzk5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'Vercel'],
      featured: false,
      year: '2025',
      status: 'Live'
    },
    {
      title: 'PT Shopee Indonesia',
      category: 'E-Commerce Platform',
      description: 'Platform marketplace dengan fitur live streaming shopping, gamification, dan social commerce. Sistem rekomendasi AI-powered, flash sale automation, dan warehouse management system terintegrasi.',
      image: 'https://images.unsplash.com/photo-1695048441307-d081dbd2b5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1MTA5MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Django', 'MySQL', 'TensorFlow', 'GCP'],
      featured: false,
      year: '2025',
      status: 'Live'
    },
    {
      title: 'PT Blibli.com',
      category: 'E-Commerce',
      description: 'Platform belanja online dengan fokus pada produk elektronik dan lifestyle. Fitur cicilan 0%, virtual account payment, product comparison tool, dan augmented reality untuk preview produk.',
      image: 'https://images.unsplash.com/photo-1762505464970-1cf0cb7ec022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzc2VzJTIwZXlld2VhciUyMG9wdGljYWx8ZW58MXx8fHwxNzc1MTIzOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Angular', 'Spring Boot', 'Oracle', 'Redis', 'Jenkins'],
      featured: false,
      year: '2024',
      status: 'Live'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === filter);

  const categories = ['all', 'featured', 'E-Commerce Platform', 'Super App Platform', 'Travel & Booking'];

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
            <FolderOpen className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Portofolio proyek untuk perusahaan teknologi terkemuka di Indonesia
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="E-Commerce Platform">E-Commerce</TabsTrigger>
            <TabsTrigger value="Super App Platform">Super App</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-black dark:hover:border-white">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="gap-1 bg-black dark:bg-white text-white dark:text-black">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:underline">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.category} • {project.year}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1 gap-2 group/btn">
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <FolderOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
