import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'JexyDev@gmail.com', href: 'mailto:JexyDev@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+62 817 6695 922', href: 'https://wa.me/628176695922' },
  { icon: Github, label: 'GitHub', value: 'github.com/JexyDev', href: 'https://github.com/JexyDev' },
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

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '32px' }}>
              Contact Information
            </h3>
            <div className="grid gap-4">
              {contacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank" rel="noopener noreferrer"
                  className="p-4 group transition-all duration-200 flex items-center gap-4"
                  style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '12px', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#7F77DD')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1a1a1a', border: '0.5px solid #2a2a2a' }}>
                    <contact.icon size={18} style={{ color: '#7F77DD' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {contact.label}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#fff' }}>
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '32px' }}>
              Send a Message
            </h3>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Jeremy Darrell A"
                    style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="JeremyDarrell@gmail.com"
                    style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', outline: 'none' }}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Hi Jeremy, I'd like to talk about..."
                  style={{ backgroundColor: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'none' }}
                ></textarea>
              </div>
              <button type="submit" className="mt-2 transition-all duration-200"
                style={{ backgroundColor: '#7F77DD', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6B63C4')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7F77DD')}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
