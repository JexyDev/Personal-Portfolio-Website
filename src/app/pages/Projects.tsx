import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Projects() {
  const projects = [
    {
      title: 'EVOConnect',
      description: 'EvoConnect adalah platform jejaring sosial lengkap dan komprehensif dirancang untuk koneksi profesional, pencarian kerja, dan pengembangan karier.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc1MTIzNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
      featured: true
    },
    {
      title: 'Jurnalku',
      description: 'Aplikasi cerdas untuk memantau dan mengelola kompetensi keahlian siswa secara efektif terstruktur, dan real-time.',
      image: 'https://images.unsplash.com/photo-1758685733664-4cde7bbe4713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50JTIwbGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzUxMjM0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Laravel', 'MySQL'],
      featured: true
    },
    {
      title: 'Good Gaming Shop',
      description: 'Web ecommerce',
      image: 'https://images.unsplash.com/photo-1666848305706-c5275d5e7d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBnYW1pbmclMjBzdG9yZXxlbnwxfHx8fDE3NzUxMjM0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'NuxtJS', 'Strapi']
    },
    {
      title: 'Sea Leader',
      description: 'Platform web komersial untuk kebutuhan branding, informasi destinasi/fleet, dan sistem booking kapal wisata.',
      image: 'https://images.unsplash.com/photo-1685975875980-f19fbd4d36a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjB0b3VyaXNtJTIwYmVhY2glMjBpc2xhbmR8ZW58MXx8fHwxNzc1MTIzNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'NuxtJS', 'ExpressJS']
    },
    {
      title: 'STIK SINT CAROLUS',
      description: 'Portal resmi STIK Sint Carolus untuk publik. Menampilkan info program studi, berita dan event, dan mudah diakses, sekaligus menjadi etalase profil institusi.',
      image: 'https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBjbGluaWN8ZW58MXx8fHwxNzc1MTIzNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'NuxtJS', 'WP']
    },
    {
      title: 'Klinik Mata Tritya',
      description: 'Web Company profile klinik mata fullstack dengan manajemen informasi data website.',
      image: 'https://images.unsplash.com/photo-1773846969630-cbbbd76ab5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBjbGluaWMlMjBvcHRvbWV0cnl8ZW58MXx8fHwxNzc1MTIzNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Laravel', 'jQuery', 'MySQL']
    },
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
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400">
            Several projects that I have worked on, both private and open source.
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  ⭐ Featured
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading More */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Loading...</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
