import { motion } from 'motion/react';

export default function JourneySection() {
  return (
    <section
      id="journey-section"
      className="relative py-24 bg-gradient-to-b from-[#1a1f2e] via-[#0d1520] to-[#0a0e1a] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.07),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="font-['Cinzel_Decorative'] text-5xl md:text-7xl lg:text-8xl font-bold"
          style={{
            background: 'linear-gradient(135deg,#fde68a 0%,#fbbf24 60%,#d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 18px rgba(251,191,36,0.5))',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Journey To Become
          <br />
          Pirate King
        </motion.h2>
      </div>
    </section>
  );
}
