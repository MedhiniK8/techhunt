import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import wheelImg from '../../imports/wheel.png';
import jinbeImg from '../../imports/jinbe_wheel_holder-1.png';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative size-full bg-gradient-to-b from-[#0a0e1a] via-[#1a1f2e] to-[#0d1520] flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />

      {/* Rain streaks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-8 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 100], opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        {/* Wheel + Jinbe composite */}
        <div className="relative w-80 h-80 mb-12 flex items-center justify-center">
          {/* Outer golden glow */}
          <div className="absolute inset-0 rounded-full bg-amber-400/15 blur-3xl" />

          {/* Rotating wheel — behind Jinbe, smaller */}
          <motion.img
            src={wheelImg}
            alt="Pirate Steering Wheel"
            className="absolute w-[68%] h-[68%]"
            style={{
              filter: 'drop-shadow(0 0 18px rgba(251,191,36,0.5)) drop-shadow(0 0 40px rgba(251,146,60,0.25))',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* Jinbe — static, in front, larger */}
          <img
            src={jinbeImg}
            alt="Jinbe – Helmsman of the Straw Hat Pirates"
            className="relative z-10 w-[90%] h-[90%] object-contain"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(251,191,36,0.3))',
            }}
          />
        </div>

        {/* Progress + text */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            key={Math.floor(progress / 33)}
            className="font-['Cinzel_Decorative'] text-xl md:text-2xl text-amber-300 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {progress < 33
              ? 'Charting the course...'
              : progress < 66
              ? 'Preparing your voyage...'
              : 'Steering toward the ultimate showdown...'}
          </motion.p>

          <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(251,191,36,0.6)',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="font-['Manrope'] text-amber-200/60 text-sm">{progress}%</p>
        </motion.div>
      </div>
    </div>
  );
}