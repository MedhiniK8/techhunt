import { motion } from 'motion/react';
import heroImg from '../../imports/herofinal.jpeg';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060a12]">
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
    </section>
  );
}