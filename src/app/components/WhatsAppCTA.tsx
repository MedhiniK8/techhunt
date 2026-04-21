import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0a0e1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_60%)]"></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="mb-8"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/50">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl font-bold mb-4 text-amber-300">
            Join the Crew
          </h2>

          <p className="font-['Manrope'] text-lg text-slate-300 mb-8">
            Stay updated with the latest announcements, event details, and connect with fellow pirates on our WhatsApp community
          </p>

          <motion.a
            href="https://chat.whatsapp.com/HC2lidYu0J41pmqepGh45v"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 rounded-full font-['Manrope'] font-bold text-lg text-white hover:from-green-500 hover:to-green-400 transition-all shadow-lg hover:shadow-green-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Join WhatsApp Community
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
