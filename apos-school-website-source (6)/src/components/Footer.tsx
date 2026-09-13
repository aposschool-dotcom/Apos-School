import React from 'react';
import { AposLogo } from './AposLogo';
import { APOS_CONTACT } from '../data/aposData';
import { Phone, MessageCircle, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEnrollment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollment }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <AposLogo size={46} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  APOS <span className="text-amber-400">School</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block">
                  Ameer PopcornWala Online School
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students, beginners, entrepreneurs, and homemakers with modern practical skills
              in AI, Digital Marketing, and Freelancing to build sustainable digital livelihoods.
            </p>

            <div className="pt-2 text-xs text-amber-300 font-serif">
              "ہم صرف ہنر نہیں سکھاتے، ہم بااعتماد اور باصلاحیت افراد بناتے ہیں۔"
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About APOS
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-amber-400 transition-colors">
                  Learning Philosophy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Course Catalog
                </a>
              </li>
              <li>
                <a href="#kids-school" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">
                  APOS Kids School
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#facebook-reviews" className="hover:text-amber-400 transition-colors">
                  Student Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Courses List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white">
              Core Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">AI + Digital Marketing Program</li>
              <li className="text-slate-300">Freelancing ABCD Workshop</li>
              <li className="text-slate-300">Level 1 Digital Skills Program</li>
              <li className="text-slate-300">Level 2 Advanced Learning Program</li>
              <li className="text-slate-300">SMM Batch Programs</li>
              <li className="text-amber-400 font-semibold">APOS Kids AI & Creativity Wing</li>
            </ul>
          </div>

          {/* Admissions & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white">
              Admissions Desk
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${APOS_CONTACT.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{APOS_CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {APOS_CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${APOS_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{APOS_CONTACT.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnrollment}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-sm"
              >
                Enroll in Upcoming Batch
              </button>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} APOS School (Ameer PopcornWala Online School). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Learn • Practice • Build • Earn</span>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-300">FAQ</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
