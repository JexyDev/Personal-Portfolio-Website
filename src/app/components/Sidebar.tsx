import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useTheme } from 'next-themes';
import { 
  Home, 
  LayoutDashboard, 
  FolderOpen, 
  User, 
  Mail, 
  BookOpen, 
  Search,
  Moon,
  Sun,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Sidebar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Guestbook', path: '/guestbook', icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-900 text-white p-3 rounded-lg border border-gray-800"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-800 flex flex-col transition-transform duration-300 z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1676288869178-1761f567ea91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMGluZG9uZXNpYW4lMjBtYWxlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3NTEyMzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jeremy Darrell Andreas"
                className="w-14 h-14 rounded-full object-cover"
              />
              <CheckCircle2 className="absolute bottom-0 right-0 w-4 h-4 text-blue-500 bg-gray-950 rounded-full" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm">Jeremy Darrell</h2>
              <p className="text-gray-400 text-xs">@jeremydarrell</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-900 text-white text-sm pl-10 pr-4 py-2 rounded-lg border border-gray-800 focus:border-gray-700 focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-600">⌘K</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Apps Section */}
          <div className="mt-8">
            <p className="text-xs text-gray-600 uppercase px-3 mb-2">Apps</p>
            <a
              href="https://jsfiddle.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
            >
              <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-xs font-bold text-black">
                JS
              </div>
              <span>JS Playground</span>
            </a>
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="p-4 border-t border-gray-800">
          <div className="text-xs text-gray-600 uppercase mb-2">Theme</div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors text-sm"
          >
            {mounted && theme === 'dark' ? (
              <>
                <Moon className="w-4 h-4" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4" />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}