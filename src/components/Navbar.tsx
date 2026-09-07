import React, { useState, useEffect } from 'react';
import { AposLogo } from './AposLogo';
import { APOS_CONTACT } from '../data/aposData';
import { Phone, MessageCircle, Menu, X, Sparkles, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Courses', href: '#courses' },
    { name: 'APOS Kids', href: '#kids-school', highlight: true },
    { name: 'Why APOS', href: '#why-us' },
    { name: 'Stories', href: '#success-stories' },
    { name: 'Fee Plan', href: '#fee-enrollment' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro-bar for urgent admissions notification & direct phone */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-[11px] border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Admissions Open 2026 Batch
            </span>
            <span className="hidden sm:inline text-slate-400">
              120 Days Project-Based Training • Only Rs. 410 every 10th day
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={`tel:${APOS_CONTACT.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{APOS_CONTACT.phoneFormatted}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={APOS_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-2.5 focus:outline-none group">
            <AposLogo size={46} />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-navy-700 leading-tight">
                APOS <span className="text-amber-500">School</span>
              </span>
              <span className="text-[10.5px] font-semibold text-slate-500 tracking-wider uppercase">
                Ameer PopcornWala Online School
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  link.highlight
                    ? 'text-amber-600 font-semibold bg-amber-50 hover:bg-amber-100 border border-amber-200/60'
                    : 'hover:text-blue-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={APOS_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs"
              title="Chat with Admissions on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnrollment()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-sm shadow-amber-400/20"
            >
              <GraduationCap className="w-4 h-4 text-slate-950" />
              <span>Join Courses</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnrollment()}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 shadow-xs"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    link.highlight
                      ? 'bg-amber-50 text-amber-800 font-semibold border border-amber-200'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-amber-400 text-slate-950 hover:bg-amber-300"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Join Our Courses (Enroll Now)</span>
              </button>
              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (0307-1639292)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
