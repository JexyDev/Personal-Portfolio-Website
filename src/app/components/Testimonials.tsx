import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Setiawan',
      role: 'CEO at TechStartup ID',
      content: 'Jeremy adalah developer muda yang sangat berbakat! Dia berhasil membangun aplikasi web kami dengan kualitas profesional. Sangat impressive untuk usianya.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Melissa',
      role: 'Product Manager',
      content: 'Bekerja dengan Jeremy sangat menyenangkan. Dia cepat memahami requirements dan selalu deliver hasil yang melebihi ekspektasi. Highly recommended!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      role: 'Senior Developer',
      content: 'Jeremy menunjukkan skill fullstack yang solid. Code-nya clean, well-structured, dan mudah di-maintain. Pasti akan menjadi developer yang hebat!',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="relative backdrop-blur-md bg-white/50 dark:bg-black/50 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-300 dark:text-gray-700">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
