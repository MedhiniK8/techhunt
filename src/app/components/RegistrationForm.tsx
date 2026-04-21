import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import monkeyImg from '../../imports/monkey-without-bg.png';
import zoroImg from '../../imports/zoro.png';
import namiImg from '../../imports/nami.png';
import donebhaiImg from '../../imports/donebhai.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

interface RegistrationFormProps {
  onClose: () => void;
}

interface Member {
  name: string;
  usn: string;
  email: string;
  phone: string;
}

const emptyMember = (): Member => ({ name: '', usn: '', email: '', phone: '' });

const inputCls =
  "w-full px-4 py-3 bg-slate-800/60 border border-amber-600/30 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-['Manrope']";

const labelCls =
  "block font-['Manrope'] text-sm font-medium text-amber-200/80 mb-1.5";

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputCls}
      />
    </div>
  );
}

const steps = [
  { label: 'Captain', image: monkeyImg, alt: 'Monkey D. Luffy' },
  { label: 'Member 2', image: zoroImg,   alt: 'Roronoa Zoro'   },
  { label: 'Member 3', image: namiImg,   alt: 'Nami'           },
];

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [crewName, setCrewName] = useState('');
  const [captain, setCaptain]   = useState<Member>(emptyMember());
  const [member2, setMember2]   = useState<Member>(emptyMember());
  const [member3, setMember3]   = useState<Member>(emptyMember());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const validatePhone = (p: string) => /^[0-9]{10}$/.test(p);

  const validateMember = (m: Member, role: string) => {
    if (!m.name.trim())          { toast.error(`Enter ${role} name`);           return false; }
    if (!m.usn.trim())           { toast.error(`Enter ${role} USN`);            return false; }
    if (!validateEmail(m.email)) { toast.error(`Enter a valid email for ${role}`); return false; }
    if (!validatePhone(m.phone)) { toast.error(`Enter a valid 10-digit phone for ${role}`); return false; }
    return true;
  };

  const handleNext = () => {
    if (step === 0) {
      if (!crewName.trim()) { toast.error('Enter a crew name'); return; }
      if (!validateMember(captain, 'Captain')) return;
    }
    if (step === 1 && !validateMember(member2, 'Member 2')) return;
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e?: any) => {
    if (e?.preventDefault) e.preventDefault();
    if (!validateMember(member3, 'Member 3')) return;
    setIsSubmitting(true);
    try {
      const payload = {
        team_name: crewName,
        captain_name: captain.name,
        captain_usn: captain.usn,
        captain_email: captain.email,
        captain_phone: captain.phone,
        members: [
          {
            name: member2.name,
            usn: member2.usn,
            email: member2.email,
            phone: member2.phone
          },
          {
            name: member3.name,
            usn: member3.usn,
            email: member3.email,
            phone: member3.phone
          }
        ]
      };

      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      alert("Registration successful");
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Registration failed");
      setIsSubmitting(false);
    }
  };

  const current = steps[step];

  // ── SUCCESS SCREEN ──
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
        <motion.div
          className="relative w-full max-w-lg bg-gradient-to-br from-[#0f1520] to-[#1a1f2e] rounded-2xl border border-amber-600/40 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-amber-200" />
          </button>

          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(251,191,36,0.1),transparent_65%)] pointer-events-none" />

          <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
            {/* donebhai image */}
            <motion.img
              src={donebhaiImg}
              alt="Registration Successful"
              className="w-56 h-56 object-contain mb-6"
              style={{
                filter: 'drop-shadow(0 0 24px rgba(251,191,36,0.55)) drop-shadow(0 0 50px rgba(251,191,36,0.25))',
              }}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            />

            {/* Title */}
            <motion.h2
              className="font-['Cinzel_Decorative'] text-3xl md:text-4xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg,#fde68a 0%,#fbbf24 60%,#d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 10px rgba(251,191,36,0.4))',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            >
              Registration Successful
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="font-['Manrope'] text-amber-200/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
            >
              You're in! Let's make this hunt legendary!
            </motion.p>

            {/* Decorative dots */}
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-400/60"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-to-br from-[#0f1520] to-[#1a1f2e] rounded-2xl border border-amber-600/40 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-amber-200" />
        </button>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 pt-8 pb-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-['Manrope'] font-bold transition-all duration-300 ${
                  i === step
                    ? 'bg-amber-500 text-slate-900 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                    : i < step
                    ? 'bg-amber-700/60 text-amber-200'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 rounded-full transition-all duration-300 ${
                    i < step ? 'bg-amber-500' : 'bg-slate-600'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="flex flex-col md:flex-row min-h-[480px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* ── LEFT: Form ── */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
              {/* Title */}
              <div className="mb-6">
                <h2
                  className="font-['Cinzel_Decorative'] text-2xl md:text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg,#fde68a,#fbbf24)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {step === 0 ? 'Register Your Crew' : `Crew Member ${step + 1}`}
                </h2>
                <p className="font-['Manrope'] text-amber-200/60 text-sm">
                  {step === 0
                    ? 'Captain details — lead your crew to glory'
                    : step === 1
                    ? 'Second crew member details'
                    : 'Third crew member details'}
                </p>
              </div>

              {/* Fields */}
              <div className="space-y-4 flex-1">
                {step === 0 && (
                  <>
                    <Field
                      label="Crew Name"
                      value={crewName}
                      onChange={setCrewName}
                      placeholder="e.g. Straw Hat Pirates"
                    />
                    <Field
                      label="Captain Name"
                      value={captain.name}
                      onChange={(v) => setCaptain({ ...captain, name: v })}
                      placeholder="Full name"
                    />
                    <Field
                      label="Captain USN"
                      value={captain.usn}
                      onChange={(v) => setCaptain({ ...captain, usn: v })}
                      placeholder="University Serial Number"
                    />
                    <Field
                      label="Captain Email"
                      value={captain.email}
                      onChange={(v) => setCaptain({ ...captain, email: v })}
                      type="email"
                      placeholder="example@email.com"
                    />
                    <Field
                      label="Captain Contact Number"
                      value={captain.phone}
                      onChange={(v) => setCaptain({ ...captain, phone: v })}
                      type="tel"
                      placeholder="10-digit mobile number"
                    />
                  </>
                )}

                {step === 1 && (
                  <>
                    <Field
                      label="Member 2 Name"
                      value={member2.name}
                      onChange={(v) => setMember2({ ...member2, name: v })}
                      placeholder="Full name"
                    />
                    <Field
                      label="Member 2 USN"
                      value={member2.usn}
                      onChange={(v) => setMember2({ ...member2, usn: v })}
                      placeholder="University Serial Number"
                    />
                    <Field
                      label="Member 2 Email"
                      value={member2.email}
                      onChange={(v) => setMember2({ ...member2, email: v })}
                      type="email"
                      placeholder="example@email.com"
                    />
                    <Field
                      label="Member 2 Contact Number"
                      value={member2.phone}
                      onChange={(v) => setMember2({ ...member2, phone: v })}
                      type="tel"
                      placeholder="10-digit mobile number"
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field
                      label="Member 3 Name"
                      value={member3.name}
                      onChange={(v) => setMember3({ ...member3, name: v })}
                      placeholder="Full name"
                    />
                    <Field
                      label="Member 3 USN"
                      value={member3.usn}
                      onChange={(v) => setMember3({ ...member3, usn: v })}
                      placeholder="University Serial Number"
                    />
                    <Field
                      label="Member 3 Email"
                      value={member3.email}
                      onChange={(v) => setMember3({ ...member3, email: v })}
                      type="email"
                      placeholder="example@email.com"
                    />
                    <Field
                      label="Member 3 Contact Number"
                      value={member3.phone}
                      onChange={(v) => setMember3({ ...member3, phone: v })}
                      type="tel"
                      placeholder="10-digit mobile number"
                    />
                  </>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-8">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex-1 px-6 py-3 bg-slate-800/60 border-2 border-amber-600/40 rounded-lg font-['Manrope'] font-bold text-amber-200 hover:border-amber-500 hover:bg-slate-700/60 transition-all"
                  >
                    ← Back
                  </button>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 px-6 py-3 rounded-lg font-['Manrope'] font-bold text-white transition-all"
                    style={{
                      background: 'linear-gradient(135deg,#b45309,#d97706,#f59e0b)',
                      boxShadow: '0 0 18px rgba(251,191,36,0.3)',
                    }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-lg font-['Manrope'] font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg,#065f46,#059669,#34d399)',
                      boxShadow: '0 0 18px rgba(52,211,153,0.3)',
                    }}
                  >
                    {isSubmitting ? 'Registering...' : '⚓ Set for Sail!'}
                  </button>
                )}
              </div>
            </div>

            {/* ── RIGHT: Character image ── */}
            <div className="hidden md:flex w-64 items-center justify-center bg-gradient-to-b from-slate-900/40 to-slate-800/20 overflow-hidden">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.alt}
                className="w-full object-contain"
                style={{
                  maxHeight: '480px',
                  filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.5)) drop-shadow(0 0 70px rgba(255,255,255,0.25))',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}