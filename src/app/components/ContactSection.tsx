import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'JerxyDev@gmail.com', href: 'mailto:JerxyDev@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+62 817 6695 922', href: 'https://wa.me/628176695922' },
  { icon: Github, label: 'GitHub', value: 'github.com/Jerxydev', href: 'https://github.com/Jerxydev' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Jeremy Darrell Andreas', href: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto p-8 md:p-16" style={{ backgroundColor: '#111', borderRadius: '16px', border: '0.5px solid #2a2a2a' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 600, color: '#fff' }}>
            Let's Build Something Together.
          </h2>
          <p className="mt-4 mx-auto max-w-md" style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.45)' }}>
            Open to internship, freelance, or collaboration. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 group transition-all duration-200 block no-underline"
              style={{
                backgroundColor: '#161616',
                border: '0.5px solid #2a2a2a',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#7F77DD')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              <contact.icon size={20} style={{ color: '#7F77DD' }} />
              <div className="mt-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                {contact.label}
              </div>
              <div className="mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#fff', wordBreak: 'break-all' }}>
                {contact.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
