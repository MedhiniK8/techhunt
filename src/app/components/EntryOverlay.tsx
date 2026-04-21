import { motion } from 'motion/react';
import { Anchor } from 'lucide-react';

interface EntryOverlayProps {
  onEnter: () => void;
}

export default function EntryOverlay({ onEnter }: EntryOverlayProps) {
  return (
    <div className="relative size-full bg-gradient-to-b from-[#0a1628] via-[#152847] to-[#0d1b2a] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(210,180,140,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Anchor className="w-16 h-16 text-amber-400 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />

          <motion.h1
            className="font-['Cinzel_Decorative'] text-5xl md:text-7xl font-black mb-4 tracking-wider"
            style={{
              background: 'linear-gradient(180deg, #fbbf24 0%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(251,191,36,0.3)',
            }}
          >
            TECH X HUNT
          </motion.h1>

          <motion.p
            className="font-['Cinzel_Decorative'] text-xl md:text-2xl text-amber-200 mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Ultimate Showdown
          </motion.p>

          <motion.button
            onClick={onEnter}
            className="group relative px-12 py-5 text-lg font-['Manrope'] font-bold tracking-wider overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-2 border-amber-300/50 rounded-lg group-hover:border-amber-200 transition-colors"></div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            <span className="relative z-10 text-white drop-shadow-lg">
              SET SAIL FOR ADVENTURE
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-2 text-amber-300/60 text-sm font-['Manrope']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300/60"></div>
          <span>Embark on the Grand Line</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300/60"></div>
        </motion.div>
      </div>
    </div>
  );
}
