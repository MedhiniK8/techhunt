import { motion } from 'motion/react';
import { Scroll, Users, Clock, Shield, MapPin } from 'lucide-react';

const rules = [
  {
    icon: Users,
    title: 'Team Composition',
    description: 'Teams must consist of 3 members.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Be present at the venue on time.',
  },
  {
    icon: Shield,
    title: 'Fair Play',
    description: 'No cheating or use of unauthorized external help during rounds.',
  },
  {
    icon: MapPin,
    title: 'Event Guideline',
    description: 'Follow instructions given during each round and dive into the adventure.',
  },
];

export default function RulesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f1520] to-[#1a1f2e] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNiIgc3Ryb2tlPSJyZ2JhKDI1MSwyMTksMTg4LDAuMDUpIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Scroll className="w-16 h-16 text-amber-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
          <h2
            className="font-['Cinzel_Decorative'] text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Pirate Code
          </h2>
          <p className="font-['Manrope'] text-xl text-amber-200/70">
            The sacred rules of the Grand Line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-amber-600/30 hover:border-amber-500/60 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors" />

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-600 transition-colors shadow-lg">
                    <rule.icon className="w-6 h-6 text-amber-100" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-['Manrope'] text-amber-200 text-lg font-bold mb-2">
                    {rule.title}
                  </h3>
                  <p className="font-['Manrope'] text-slate-300 text-sm leading-relaxed">
                    {rule.description}
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
