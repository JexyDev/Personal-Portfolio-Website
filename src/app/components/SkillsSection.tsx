import { motion } from 'motion/react';
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMysql, SiTypescript, SiBootstrap } from 'react-icons/si';

const hardSkills = [
  { name: 'HTML', color: '#E34F26', level: 90, label: 'Advanced', icon: FaHtml5 },
  { name: 'CSS', color: '#264DE4', level: 85, label: 'Advanced', icon: FaCss3Alt },
  { name: 'JavaScript', color: '#F7DF1E', level: 60, label: 'Intermediate', icon: IoLogoJavascript },
  { name: 'React', color: '#61DAFB', level: 35, label: 'Basic', icon: FaReact },
  { name: 'Laravel', color: '#FF2D20', level: 55, label: 'Intermediate', icon: FaLaravel },
  { name: 'PHP', color: '#777BB4', level: 70, label: 'Advanced', icon: FaPhp },
  { name: 'TailwindCSS', color: '#06B6D4', level: 80, label: 'Advanced', icon: SiTailwindcss },
  { name: 'Node.js', color: '#339933', level: 45, label: 'Basic', icon: FaNodeJs },
  { name: 'MySQL', color: '#4479A1', level: 65, label: 'Intermediate', icon: SiMysql },
  { name: 'Git', color: '#F05032', level: 75, label: 'Advanced', icon: FaGitAlt },
];

const softSkills = ['Critical Thinking', 'Analytical Mindset', 'Self-Discipline', 'Consistent Learner'];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12" style={{ maxWidth: '1440px', margin: '0 auto' }}>
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
          / Skills
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
          My Toolkit
        </h2>
      </motion.div>

      {/* Hard Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {hardSkills.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6"
              style={{
                backgroundColor: '#161616',
                border: '0.5px solid #2a2a2a',
                borderRadius: '12px',
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${skill.color}15` }}>
                <IconComponent style={{ fontSize: '24px', color: skill.color }} />
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#fff' }}>
                {skill.name}
              </div>
              <div className="mt-1 mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
                {skill.label}
              </div>
              {/* Progress bar */}
              <div className="w-full h-1 rounded-full" style={{ backgroundColor: '#2a2a2a' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Soft Skills */}
      <div className="flex flex-wrap gap-3">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              border: '0.5px solid #2a2a2a',
              borderRadius: '999px',
              backgroundColor: '#161616',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}