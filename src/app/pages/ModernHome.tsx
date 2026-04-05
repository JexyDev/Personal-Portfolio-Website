import { motion } from 'motion/react';
import { ArrowRight, Briefcase, MapPin, Code2, Star, Quote, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

export default function ModernHome() {
  const techStack = [
    'React.js', 'Next.js', 'Vue.js', 'Laravel', 'Node.js', 'Express.js',
    'TailwindCSS', 'TypeScript', 'MySQL', 'MongoDB', 'Prisma', 'Redis',
    'Git', 'Docker', 'Vercel', 'AWS', 'REST API', 'GraphQL'
  ];

  const testimonials = [
    {
      name: 'Addza Rahman',
      role: 'Computer Science Student',
      company: 'Universitas Pelawan',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Addza',
      rating: 5.0,
      text: 'Jeremy membantu saya menyelesaikan project sempro dengan sangat baik. Responsenya cepat, sabar dalam menjelaskan konsep-konsep yang sulit, dan hasil kerjanya melebihi ekspektasi.'
    },
    {
      name: 'Thufa Maulana',
      role: 'HR Manager',
      company: 'Travel Agency Indonesia',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thufa',
      rating: 5.0,
      text: 'Keren banget! Harga terjangkau dengan kualitas premium. Pengerjaannya cepat, website jadi dalam 3 hari dan langsung bisa digunakan. Highly recommended!'
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Startup',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5.0,
      text: 'Professional work ethic and excellent communication. Jeremy delivered our e-commerce platform on time with clean, maintainable code. Will definitely work together again.'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '12+' },
    { label: 'Tech Stack', value: '18+' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="px-8 py-20 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <Badge variant="outline" className="mb-6 text-xs font-medium">
            <MapPin className="w-3 h-3 mr-1" />
            Based in Bogor, Indonesia
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Digital
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
            I'm a <span className="text-black dark:text-white font-medium">Fullstack Developer</span> specializing in 
            architecting and building robust, scalable web applications. Currently studying at{' '}
            <span className="text-black dark:text-white font-medium">SMK WIKRAMA BOGOR</span>, 
            majoring in Software Engineering (PPLG XI).
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </section>

      <Separator className="mx-8 lg:mx-16" />

      {/* Stats Section */}
      <section className="px-8 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="mx-8 lg:mx-16" />

      {/* Tech Stack Section */}
      <section className="px-8 py-16 lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-6 h-6" />
            <h2 className="text-3xl font-bold">Tech Stack</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="mx-8 lg:mx-16" />

      {/* Testimonials Section */}
      <section className="px-8 py-16 lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Quote className="w-6 h-6" />
            <h2 className="text-3xl font-bold">Client Testimonials</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
            Trusted by founders, teams, and students to deliver reliable digital solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black dark:fill-white text-black dark:text-white" />
                      ))}
                      <span className="ml-2 text-sm font-semibold">{testimonial.rating}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="mx-8 lg:mx-16" />

      {/* CTA Section */}
      <section className="px-8 py-16 lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Briefcase className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I'm currently available for freelance projects. Let's create something amazing together.
          </p>
          <Button size="lg" className="gap-2 group">
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}