'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Compass,
  BookOpen,
  Heart,
  Menu,
  X,
  ChevronRight,
  Home,
  GanttChart,
  Plane,
  Building2,
  Info,
  Phone,
} from 'lucide-react';

const menuItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/why-turkiye', label: 'Why Türkiye?', icon: Heart },
  { path: '/services', label: 'Our Services', icon: GanttChart },
  { path: '/universities', label: 'Universities', icon: Building2 },
  { path: '/contact', label: 'Contact', icon: Phone },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-red-500" />
              <span
                className={`text-2xl font-bold turkish-title ${
                  scrolled || isOpen ? 'text-gray-900' : 'text-white'
                }`}
              >
                Sultan Scholars
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    pathname === item.path
                      ? 'bg-red-500 text-white'
                      : scrolled
                      ? 'text-gray-700 hover:bg-red-50'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-red-500 hover:bg-white/90'
                }`}
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled || isOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                        pathname === item.path
                          ? 'bg-red-50 text-red-500'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 z-40"
        />
      )}
    </>
  );
}
