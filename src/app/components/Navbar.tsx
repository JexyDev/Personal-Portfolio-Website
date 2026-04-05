import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid #2a2a2a' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <span
          className="tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: '#fff' }}
        >
          Jeremy Darrell Andreas
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative cursor-pointer transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="cursor-pointer transition-all duration-200"
            style={{
              height: '40px',
              padding: '0 16px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '6px',
              background: 'transparent',
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#7F77DD';
              e.currentTarget.style.color = '#7F77DD';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-pointer"
          style={{ background: 'none', border: 'none', color: '#fff' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(13,13,13,0.95)', backdropFilter: 'blur(12px)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none' }}
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => scrollTo('Contact')}
                className="cursor-pointer mt-2"
                style={{
                  height: '40px',
                  padding: '0 16px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '6px',
                  background: 'transparent',
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
