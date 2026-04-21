import { motion } from 'motion/react';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventMetaStrip() {
  const eventDetails = [
    {
      icon: Calendar,
      label: 'Date',
      value: '25th April 2026',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Architecture Seminar Hall',
    },
    {
      icon: Users,
      label: 'Team Size',
      value: '3 Members',
    },
  ];

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#0a0e1a] to-[#0f1520] overflow-hidden">
      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(251,191,36,0.09),transparent_70%)]" />

      {/* Subtle horizontal gold dividers */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(251,191,36,0.35),transparent)' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(251,191,36,0.35),transparent)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl p-6 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg,rgba(15,21,32,0.9) 0%,rgba(25,19,10,0.7) 100%)',
                boxShadow:
                  '0 0 0 1px rgba(251,191,36,0.08), inset 0 1px 0 rgba(251,191,36,0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle,rgba(251,191,36,0.18),transparent 70%)' }}
              />

              {/* Gold shimmer sweep */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(105deg,transparent 20%,rgba(251,191,36,0.06) 50%,transparent 80%)',
                }}
              />

              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon circle */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-lg"
                    style={{ background: 'rgba(251,191,36,0.22)' }}
                  />
                  <motion.div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg,#92400e,#b45309,#d97706)',
                      boxShadow: '0 0 18px rgba(251,191,36,0.4), 0 4px 12px rgba(0,0,0,0.4)',
                    }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <detail.icon className="w-7 h-7 text-amber-100" />
                  </motion.div>
                </div>

                <div>
                  <p className="font-['Manrope'] text-amber-400/80 text-xs font-semibold tracking-widest uppercase mb-1">
                    {detail.label}
                  </p>
                  <p
                    className="font-['Cinzel_Decorative'] text-base"
                    style={{
                      background: 'linear-gradient(135deg,#fde68a,#fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: 'none',
                    }}
                  >
                    {detail.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}