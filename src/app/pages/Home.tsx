import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Home() {
  const tools = [
    { name: 'MySQL', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'TailwindCSS', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
    { name: 'Webstorm', color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
    { name: 'VS Code', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Redux', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { name: 'Next.js', color: 'bg-gray-500/10 text-gray-300 border-gray-500/20' },
    { name: 'React.js', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
    { name: 'jQuery', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
    { name: 'Prisma', color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
    { name: 'Vercal', color: 'bg-gray-500/10 text-gray-300 border-gray-500/20' },
    { name: 'CSS', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Vercel', color: 'bg-gray-500/10 text-gray-300 border-gray-500/20' },
    { name: 'CSS', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Postgres', color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
    { name: 'MySQL', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { name: 'Laravel', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { name: 'jQuery', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
  ];

  const testimonials = [
    {
      name: 'Addza',
      role: 'Mahasiswa',
      rating: 5.0,
      text: '"Membantu saya menyelesaikan project sempro dengan sangat baik. Responsenya cepat dan sabar dalam menjelaskan konsep-konsep yang sulit."',
      company: 'Universitas Pelawan',
      badge: 'testimonial'
    },
    {
      name: 'Thufa',
      role: 'HR Manager',
      rating: 5.0,
      text: '"Keren banget, harga murah, pengerjaannya cepat banget!, mirip hosting 3 hari, pada saat udah jalar, pake didalam jjar, hahaha"',
      company: 'Travel Agency',
      badge: 'testimonial'
    },
    {
      name: 'BI Kemampuan',
      role: 'toast waktu',
      rating: 5.0,
      text: '"BI Kemampuan toast waktu, gdus. Fokus it kami Nargal."',
      company: 'testimonial',
      badge: 'testimonial'
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
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            Hi, I'm Jeremy 👋
          </h1>
          <div className="flex items-center gap-3 text-gray-400 mb-6 flex-wrap">
            <span>• Based in Bogor, Indonesia 🇮🇩</span>
            <span>• Web Developer</span>
            <span>• Open To Work</span>
          </div>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Seasoned Full-Stack Engineer with a strong passion for backend development. I specialize in architecting and 
            building robust, scalable systems and APIs. I enjoy collaborating with teams to deliver high-performance, 
            secure, and reliable web applications from the ground up.
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Tools Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tools That I Have Used</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${tool.color}`}
              >
                {tool.name}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Clients & Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Clients & Partners</h2>
          <p className="text-cyan-400 mb-8">
            Trusted by founders, product teams, and students to deliver reliable and scalable digital solutions tailored to 
            their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-yellow-500">{testimonial.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{testimonial.company}</span>
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                    {testimonial.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Call to Action */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What I've Been Working On</h2>
          <p className="text-gray-300 mb-6">
            I'm a <span className="text-orange-400">skilled</span> web developer who creates custom websites{' '}
            <span className="text-orange-400">tailored</span> to <span className="text-orange-400">your</span> specific needs. 
            From small businesses to large corporations, I can help you build a strong online presence.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold">Let's work together!</h3>
            </div>
            <p className="text-gray-400 mb-6">
              I'm open for freelance projects, feel free to email me to see how can we collaborate.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
              Contact me
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
