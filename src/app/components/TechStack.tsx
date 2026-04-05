import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Smartphone, Sparkles } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: 'React JS', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Laravel', icon: Server, color: 'from-red-500 to-orange-500' },
    { name: 'Tailwind CSS', icon: Layout, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', icon: Sparkles, color: 'from-yellow-500 to-amber-500' },
    { name: 'PHP', icon: Database, color: 'from-purple-500 to-pink-500' },
    { name: 'MySQL', icon: Database, color: 'from-blue-600 to-indigo-600' },
    { name: 'API Development', icon: Server, color: 'from-green-500 to-emerald-500' },
    { name: 'Responsive Design', icon: Smartphone, color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-md bg-white/50 dark:bg-black/50 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
