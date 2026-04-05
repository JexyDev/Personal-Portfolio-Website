import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'TOMALO — Local Food Marketplace',
    image: '/projects/tomalo.png',
    bg: '#E0D7FF',
    description: "TOMALO: Where Nusantara's Heart Meets Your Table. A modern hyper-local food hub bringing the authentic taste of Indonesia—from ready-to-eat traditional snacks to fresh farm-to-table ingredients—directly to your fingertips.",
    tags: ['Figma', 'UI/UX', 'Product Design'],
    status: 'Design Phase',
    statusColor: '#7F77DD',
  },
  {
    title: 'Dukuh Dalam: Digital Heritage',
    image: '/projects/dukuh.png',
    bg: '#121412',
    description: "An immersive digital journey to preserve the ancestral traditions and historical legacy of Kampung Adat Dukuh Dalam. A cultural documentation platform designed for impact.",
    tags: ['Next.js', 'Storytelling', 'Culture'],
    status: 'Live',
    statusColor: '#22c55e',
  },
  {
    title: 'ArduSense: Intelligent IoT System',
    image: '/projects/iot.png',
    bg: '#0A0D11',
    description: "A real-world IoT implementation integrating ultrasonic, motion, and climate sensors for smart automation. Features real-time data processing and a custom LCD interface.",
    tags: ['Arduino', 'IoT', 'C++', 'Electronics'],
    status: 'Live',
    statusColor: '#22c55e',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: '#7F77DD',
            textTransform: 'uppercase',
          }}
        >
          / Projects
        </span>
        <h2
          className="mt-4 mb-12"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 600,
            color: '#FFFFFF',
          }}
        >
          What I've Been Building
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
            style={{
              backgroundColor: '#161616',
              border: '0.5px solid #2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* Image placeholder */}
            <div
              className="relative flex items-center justify-center"
              style={{
                aspectRatio: '16/9',
                backgroundColor: '#111',
                borderBottom: '0.5px solid #2a2a2a',
              }}
            >
              {project.image ? (
                <div className="w-full h-full flex items-center justify-center p-1" style={{ backgroundColor: project.bg }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1a1a1a', border: '0.5px solid #2a2a2a' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{'</>'}</span>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>Preview</span>
                </div>
              )}
              {/* Status badge */}
              <span
                className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1"
                style={{
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '0.5px solid #2a2a2a',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.statusColor }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                  {project.status}
                </span>
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 600, color: '#fff' }}>
                {project.title}
              </h3>
              <p className="mt-2 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)' }}>
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.4)',
                        border: '0.5px solid #2a2a2a',
                        borderRadius: '4px',
                        backgroundColor: '#1a1a1a',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 cursor-pointer transition-colors" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                  >
                    <Github size={16} />
                  </button>
                  <button className="p-2 cursor-pointer transition-colors" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
