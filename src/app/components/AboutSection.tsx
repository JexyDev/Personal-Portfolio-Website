import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="relative overflow-hidden mx-auto md:mx-0"
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '380px',
              borderRadius: '12px',
              border: '0.5px solid #2a2a2a',
              backgroundColor: '#161616',
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFsZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwZGFya3xlbnwxfHx8fDE3NzUzMTI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Jeremy Darrell Andreas"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
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
            / About Me
          </span>

          <h2
            className="mt-4 mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#FFFFFF',
            }}
          >
            A Developer Who Thinks Like a Problem Solver.
          </h2>

          <p
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            I'm Jeremy, a PPLG student at SMK Wikrama Bogor on a mission to become a competent Fullstack Developer. I believe great software is built on clarity, consistency, and the courage to keep learning — even when the stack grows fast.
          </p>

          {/* Stat cards */}
          <div className="flex gap-4 mb-8">
            {[
              { value: '2+', label: 'Years Learning' },
              { value: '5+', label: 'Mini Projects Built' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 p-5"
                style={{
                  backgroundColor: '#161616',
                  border: '0.5px solid #2a2a2a',
                  borderRadius: '12px',
                }}
              >
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '28px', fontWeight: 600, color: '#fff' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.35)' }}>
            My goal in the next 1–2 years: contribute to products that help local businesses scale internationally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
