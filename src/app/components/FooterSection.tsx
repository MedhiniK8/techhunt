import { motion } from 'motion/react';
import { Anchor } from 'lucide-react';

// Social icon SVG paths
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/HC2lidYu0J41pmqepGh45v',
    Icon: WhatsAppIcon,
    hoverColor: 'hover:text-green-400 hover:shadow-[0_0_16px_rgba(74,222,128,0.5)]',
    borderHover: 'hover:border-green-400/60',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/code-club-kletu/',
    Icon: LinkedInIcon,
    hoverColor: 'hover:text-sky-400 hover:shadow-[0_0_16px_rgba(56,189,248,0.5)]',
    borderHover: 'hover:border-sky-400/60',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/kletechcodeclub',
    Icon: InstagramIcon,
    hoverColor: 'hover:text-pink-400 hover:shadow-[0_0_16px_rgba(244,114,182,0.5)]',
    borderHover: 'hover:border-pink-400/60',
  },
];

export default function FooterSection() {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-[#0a0e1a] to-[#050810] overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(59,130,246,0.2)"
            d="M0,60 C240,80 480,40 720,60 C960,80 1200,40 1440,60 L1440,120 L0,120 Z"
            animate={{
              d: [
                'M0,60 C240,80 480,40 720,60 C960,80 1200,40 1440,60 L1440,120 L0,120 Z',
                'M0,50 C240,70 480,30 720,50 C960,70 1200,30 1440,50 L1440,120 L0,120 Z',
                'M0,60 C240,80 480,40 720,60 C960,80 1200,40 1440,60 L1440,120 L0,120 Z',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <Anchor className="w-12 h-12 text-amber-400 opacity-60" />
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="font-['Cinzel_Decorative'] text-2xl md:text-3xl text-amber-300/80 italic leading-relaxed mb-4">
              "Inherited Will, The Destiny of the Age, and The Dreams of the People.
              These are things that will not be stopped."
            </p>
            <p className="font-['Manrope'] text-amber-200/60 text-sm">
              — Gol D. Roger
            </p>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map(({ label, href, Icon, hoverColor, borderHover }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-11 h-11 flex items-center justify-center rounded-full border border-amber-600/30 ${borderHover} text-amber-200/60 ${hoverColor} bg-slate-900/60 backdrop-blur-sm transition-colors duration-300`}
                whileHover={{ scale: 1.18, y: -3 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <div className="pt-8 border-t border-amber-600/20">
            <p className="font-['Manrope'] text-slate-400 text-sm">
              © 2026 codeclub, All rights reserved
            </p>
          </div>

          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-amber-400/40"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}