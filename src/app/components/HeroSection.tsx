import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const techIcons = [
  { name: 'HTML', color: '#E34F26', icon: FaHtml5 },
  { name: 'CSS', color: '#264DE4', icon: FaCss3Alt },
  { name: 'JavaScript', color: '#F7DF1E', icon: IoLogoJavascript },
  { name: 'React', color: '#61DAFB', icon: FaReact },
  { name: 'Laravel', color: '#FF2D20', icon: FaLaravel },
  { name: 'PHP', color: '#777BB4', icon: FaPhp },
  { name: 'TailwindCSS', color: '#06B6D4', icon: SiTailwindcss },
  { name: 'Node.js', color: '#339933', icon: FaNodeJs },
  { name: 'MySQL', color: '#4479A1', icon: SiMysql },
  { name: 'Git', color: '#F05032', icon: FaGitAlt },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2"
          style={{
            border: '0.5px solid #2a2a2a',
            borderRadius: '999px',
            backgroundColor: '#161616',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
            Available for Internship / Freelance
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Building the Future,
          <br />
          One Line at a Time.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 mx-auto max-w-lg"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}
        >
          Fullstack Developer in progress — passionate about turning ideas into real digital products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer transition-all duration-200 flex items-center gap-2"
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: '6px',
              backgroundColor: '#7F77DD',
              color: '#fff',
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6B63C4')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7F77DD')}
          >
            View My Projects
            <ArrowDown size={16} />
          </button>
          <button
            className="cursor-pointer transition-all duration-200 flex items-center gap-2"
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: '6px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
          >
            <Download size={16} />
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Marquee tech strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ borderTop: '0.5px solid #2a2a2a' }}>
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...techIcons, ...techIcons, ...techIcons].map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <span
                key={i}
                className="mx-8 flex items-center gap-3"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}
              >
                <IconComponent style={{ fontSize: '20px', color: tech.color }} />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{tech.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}