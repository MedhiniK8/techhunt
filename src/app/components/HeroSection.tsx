import { motion } from 'motion/react';
import heroImg from '../../imports/herofinal.jpeg';
import clubLogo from '../../imports/codeclublogo.png';

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#060a12] flex flex-col items-center justify-center">
      {/* Club Logo */}
      <div className="absolute top-2 left-2 md:top-8 md:left-8 z-40">
        <img src={clubLogo} alt="Club Logo" className="w-7 h-7 md:w-20 md:h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </div>
      {/* Subtle ambient glow behind image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(251,191,36,0.12),transparent_65%)] z-10 pointer-events-none" />

      {/* Full image — no cropping */}
      <img
        src={heroImg}
        alt="Tech X Hunt – One Piece"
        className="w-full h-auto block"
        style={{ filter: 'brightness(0.93) saturate(1.08)' }}
      />

      {/* Bottom blend into site background */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: '30%',
          background: 'linear-gradient(to top, #0a0e1a 0%, #0a0e1a 20%, transparent 100%)',
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060a12] to-transparent z-20 pointer-events-none" />

      {/* Sparkle particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-300/50 z-30"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
          }}
          animate={{ opacity: [0.1, 0.85, 0.1], scale: [1, 1.7, 1] }}
          transition={{
            duration: 2.5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Action Buttons & Scroll Down over shadows */}
      <div className="absolute bottom-2 md:bottom-[15%] left-0 right-0 z-40 flex flex-col items-center gap-2 md:gap-8 px-4 md:px-0">
        <div className="flex flex-col items-center gap-1.5 md:gap-0">
          {/* Desktop & Mobile Register Button */}
          <button
            onClick={onRegisterClick}
            className="px-3 py-1 md:px-8 md:py-4 rounded-lg font-['Cinzel_Decorative'] font-bold text-[8px] md:text-lg text-white border border-black/80 md:border-2 transition-transform transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg,#b45309,#d97706,#f59e0b)',
              boxShadow: '0 0 24px rgba(251,191,36,0.35)',
            }}
          >
            Register Now
          </button>

          {/* Mobile Only: Join CodeClub Community */}
          <button
            onClick={() => {
              const el = document.getElementById('community');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:hidden px-2 py-[2px] rounded-full border border-emerald-500/80 text-emerald-500 font-bold font-['Cinzel_Decorative'] uppercase tracking-wider text-[6.5px] hover:bg-emerald-500 hover:text-white transition-colors"
          >
            Join CodeClub Community
          </button>
        </div>

        <div className="text-amber-400 font-bold font-['Cinzel_Decorative'] tracking-widest uppercase text-[7px] md:text-sm animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex flex-col items-center">
          <span className="mb-0.5 md:mb-2 uppercase tracking-[0.2em] px-0.5 py-0.5 md:px-3 md:py-1 bg-transparent md:bg-black/30 rounded-full border-0 md:border border-amber-500/30">Scroll Down</span>
          <svg className="w-3 h-3 md:w-5 md:h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}