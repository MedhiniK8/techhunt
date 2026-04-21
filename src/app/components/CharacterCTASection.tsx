import { motion } from 'motion/react';
import { ArrowRight, Scroll } from 'lucide-react';
import ohhbhaiImg from '../../imports/ohhbhai.png';

interface CharacterCTASectionProps {
  onRegisterClick: () => void;
}

const crewLines = [
  'Rally your crew.',
  'Solve the clues.',
  'Claim the treasure.',
  'Become the Pirate King.',
];

export default function CharacterCTASection({ onRegisterClick }: CharacterCTASectionProps) {
  const handleExploreClick = () => {
    document.getElementById('treasure-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0f1520] to-[#1a1f2e] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(251,191,36,0.07),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(30,64,175,0.08),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Character image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background halo */}
            <div className="absolute w-72 h-72 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle,rgba(251,191,36,0.14),transparent 70%)' }}
            />

            {/* Floating + slight rock */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={ohhbhaiImg}
                alt="Monkey D. Luffy – Captain of the Straw Hat Pirates"
                className="relative w-full max-w-sm mx-auto object-contain"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 0 28px rgba(251,191,36,0.4)) drop-shadow(0 8px 20px rgba(0,0,0,0.5))',
                }}
                animate={{ rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main heading */}
            <motion.h2
              className="font-['Cinzel_Decorative'] text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{ textShadow: '0 2px 16px rgba(255,255,255,0.15)' }}
            >
              Your Adventure Awaits
            </motion.h2>

            {/* Gold ambient call lines */}
            <div className="space-y-2">
              {crewLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="font-['Cinzel_Decorative'] text-lg md:text-xl"
                  style={{
                    background: 'linear-gradient(135deg,#fde68a 0%,#fbbf24 60%,#f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.35))',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Body copy */}
            <p className="font-['Manrope'] text-amber-100/70 leading-relaxed">
              Dive into legendary rounds of wit, tech, and adventure. Only the sharpest
              crew will claim the ultimate prize.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                onClick={onRegisterClick}
                className="group relative px-8 py-4 rounded-lg font-['Manrope'] font-bold text-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg,#b45309,#d97706,#f59e0b)',
                  boxShadow: '0 0 24px rgba(251,191,36,0.35)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative flex items-center gap-2 text-white">
                  Register Your Crew Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleExploreClick}
                className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-amber-600/40 rounded-lg font-['Manrope'] font-bold text-lg hover:border-amber-500 hover:bg-slate-800/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-amber-200">
                  Explore Event
                  <Scroll className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}