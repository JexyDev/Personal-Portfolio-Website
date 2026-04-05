import { motion } from 'motion/react';
import { GraduationCap, Trophy } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8"
          style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '12px' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#7F77DD15' }}>
              <GraduationCap size={22} style={{ color: '#7F77DD' }} />
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', color: '#7F77DD', textTransform: 'uppercase' as const }}>
                Education
              </span>
              <h3 className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 600, color: '#fff' }}>
                SMK Wikrama Bogor
              </h3>
              <p className="mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                PPLG — Software & Game Development
              </p>
              <p className="mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                2024 – 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8"
          style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '12px' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#F7DF1E15' }}>
              <Trophy size={22} style={{ color: '#F7DF1E' }} />
            </div>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', color: '#7F77DD', textTransform: 'uppercase' as const }}>
                Achievement
              </span>
              <h3 className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 600, color: '#fff' }}>
                2nd Place — Music Competition
              </h3>
              <p className="mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                IBIK Kesatuan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
