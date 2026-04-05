import { Github, Linkedin, Phone } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/Jexydev' },
  { icon: Linkedin, href: '#' },
  { icon: Phone, href: 'https://wa.me/628176695922' },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8" style={{ borderTop: '0.5px solid #2a2a2a' }}>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
          &copy; 2025 Jeremy Darrell Andreas
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
          Designed & Built with purpose.
        </span>
        <div className="flex gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
