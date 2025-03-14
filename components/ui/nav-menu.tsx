'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Users,
  Globe2,
  BookOpen,
  Heart,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Trophy,
  FileCheck,
  Plane,
  Star,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'Universities',
      href: '/universities',
      icon: Building2,
      submenu: [
        { label: 'Browse All', href: '/universities', icon: Globe2 },
        { label: 'Rankings', href: '/universities?sort=ranking', icon: Trophy },
        { label: 'Compare', href: '/universities?view=compare', icon: Star },
      ]
    },
    {
      label: 'How to Apply',
      href: '/how-to-apply',
      icon: FileCheck,
      submenu: [
        { label: 'Application Guide', href: '/how-to-apply', icon: BookOpen },
        { label: 'Requirements', href: '/how-to-apply#requirements', icon: FileCheck },
        { label: 'Visa Process', href: '/how-to-apply#visa', icon: Plane },
      ]
    },
    {
      label: 'Student Life',
      href: '/student-life',
      icon: Users,
      badge: 'New',
      submenu: [
        { label: 'Campus Life', href: '/student-life#campus', icon: Building2 },
        { label: 'Activities', href: '/student-life#activities', icon: Heart },
        { label: 'Success Stories', href: '/success-stories', icon: Trophy },
      ]
    },
    {
      label: 'Services',
      href: '/services',
      icon: GraduationCap,
      submenu: [
        { label: 'Admission Support', href: '/services#admission', icon: FileCheck },
        { label: 'Visa Assistance', href: '/services#visa', icon: Plane },
        { label: 'Housing Support', href: '/services#housing', icon: Home },
      ]
    },
    { label: 'FAQ', href: '/faq', icon: MessageCircle },
    { label: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Sultan Scholars
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link 
                  href={item.href}
                  className={`px-4 py-2 rounded-md flex items-center space-x-1 transition-colors
                    ${isScrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                    }
                    ${pathname === item.href ? 'font-semibold' : ''}
                  `}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4 ml-1" />}
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                      {item.badge}
                    </Badge>
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[200px] border">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <subitem.icon className="h-4 w-4 text-primary" />
                          <span>{subitem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Button asChild className="gradient-bg ml-4">
              <Link href="/apply">
                Apply Now
                <GraduationCap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
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
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="ml-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <subitem.icon className="h-4 w-4" />
                          <span>{subitem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 py-4">
                <Button asChild className="w-full gradient-bg">
                  <Link href="/apply" onClick={() => setIsOpen(false)}>
                    Apply Now
                    <GraduationCap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}