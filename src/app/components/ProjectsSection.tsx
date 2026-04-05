import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Calculator UI',
    description: 'A responsive calculator with modern UI, keyboard support, and dark/light theme toggle.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    statusColor: '#22c55e',
  },
  {
    title: 'Modern Portfolio Concept',
    description: 'A clean, animated portfolio template built with React and Framer Motion for developers.',
    tags: ['React'],
    status: 'In Progress',
    statusColor: '#f59e0b',
  },
  {
    title: 'Simple Task Manager',
    description: 'A fullstack task management app with authentication, CRUD operations, and REST API.',
    tags: ['Laravel'],
    status: 'Coming Soon',
    statusColor: '#6b7280',
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
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1a1a1a', border: '0.5px solid #2a2a2a' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{'</>'}</span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>Preview</span>
              </div>
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
