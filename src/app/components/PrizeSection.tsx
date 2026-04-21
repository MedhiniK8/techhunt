import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';
import treasureImg from '../../imports/treasure.png';

export default function PrizeSection() {
  const allPrizes = [
    {
      place: '1st Place',
      amount: '₹1000',
      icon: Trophy,
      color: 'from-yellow-400 to-amber-500',
      glow: 'shadow-[0_0_50px_rgba(251,191,36,0.6)]',
      scale: 1.12,
      amountGradient: '#fde68a, #fbbf24, #f59e0b',
      highlighted: true,
    },
    {
      place: '2nd Place',
      amount: '₹800',
      icon: Medal,
      color: 'from-gray-300 to-gray-400',
      glow: 'shadow-[0_0_40px_rgba(209,213,219,0.45)]',
      scale: 1,
      amountGradient: '#d1d5db, #9ca3af',
      highlighted: false,
    },
    {
      place: '3rd Place',
      amount: '₹600',
      icon: Award,
      color: 'from-orange-400 to-orange-600',
      glow: 'shadow-[0_0_35px_rgba(251,146,60,0.45)]',
      scale: 0.95,
      amountGradient: '#fb923c, #ea580c',
      highlighted: false,
    },
  ];

  // Podium display order: 2nd (left) → 1st (centre) → 3rd (right)
  const displayOrder = [allPrizes[1], allPrizes[0], allPrizes[2]];

  return (
    <section id="treasure-section" className="relative pt-10 pb-8 bg-gradient-to-b from-[#0a0e1a] via-[#1a1520] to-[#0f1520] overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(251,191,36,0.08),transparent_70%)]" />

      {/* Floating gold specks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-amber-400/35 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-['Cinzel_Decorative'] text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg,#fde68a 0%,#fbbf24 60%,#d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 14px rgba(251,191,36,0.45))',
            }}
          >
            Treasure Awaits
          </h2>
          <p className="font-['Manrope'] text-xl text-amber-200/70">
            Claim your share of the legendary bounty
          </p>
        </motion.div>

        {/* Podium grid: 2nd | 1st | 3rd — extra top padding for treasure chest */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 max-w-5xl mx-auto pt-[320px] md:pt-[340px]">
          {displayOrder.map((prize, i) => {
            const animDelay = i === 1 ? 0 : i === 0 ? 0.18 : 0.32;
            return (
              <motion.div
                key={prize.place}
                className="relative w-full md:w-72"
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: animDelay, duration: 0.65 }}
                style={{ transform: `scale(${prize.scale})`, transformOrigin: 'bottom center' }}
              >
                {/* Glowing treasure chest above 1st place */}
                {prize.highlighted && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 z-20"
                    style={{ top: '-310px', width: '288px', height: '288px' }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.img
                      src={treasureImg}
                      alt="Treasure Chest"
                      className="w-full h-full object-contain"
                      animate={{
                        filter: [
                          'drop-shadow(0 0 8px rgba(251,191,36,0.6)) drop-shadow(0 0 18px rgba(251,146,60,0.4))',
                          'drop-shadow(0 0 22px rgba(251,191,36,1)) drop-shadow(0 0 40px rgba(251,146,60,0.8))',
                          'drop-shadow(0 0 8px rgba(251,191,36,0.6)) drop-shadow(0 0 18px rgba(251,146,60,0.4))',
                        ],
                        scale: [1, 1.06, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                )}

                {/* Card glow backdrop */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${prize.color} rounded-2xl blur-xl opacity-25`}
                />

                <motion.div
                  className={`relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all group ${
                    prize.highlighted
                      ? 'border-amber-400/70 hover:border-amber-300'
                      : 'border-amber-600/30 hover:border-amber-500/60'
                  } ${prize.glow}`}
                  whileHover={{ y: -10, scale: 1.04 }}
                >
                  {/* Champion badge */}
                  {prize.highlighted && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 text-xs font-['Manrope'] font-bold px-4 py-1 rounded-full shadow-lg tracking-widest uppercase whitespace-nowrap">
                      Champion
                    </div>
                  )}

                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className="relative inline-block">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${prize.color} rounded-full blur-2xl opacity-55`}
                      />
                      <div
                        className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center ${prize.glow}`}
                      >
                        <prize.icon className="w-10 h-10 text-slate-900" />
                      </div>
                    </div>

                    {/* Place + Amount */}
                    <div>
                      <p className="font-['Cinzel_Decorative'] text-amber-300 text-base font-semibold mb-2 tracking-wide">
                        {prize.place}
                      </p>
                      <p
                        className="font-['Cinzel_Decorative'] text-5xl font-black"
                        style={{
                          background: `linear-gradient(135deg,${prize.amountGradient})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {prize.amount}
                      </p>
                    </div>

                    {/* Dot indicators */}
                    <motion.div
                      className="flex justify-center gap-1.5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {[
                        ...Array(
                          prize.highlighted ? 1 : prize.place === '2nd Place' ? 2 : 3
                        ),
                      ].map((_, j) => (
                        <motion.div
                          key={j}
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${prize.color}`}
                          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer quote */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-['Manrope'] text-amber-200/55 text-lg italic">
            "The One Piece is real!" — Claim your treasure and make history
          </p>
        </motion.div>
      </div>
    </section>
  );
}