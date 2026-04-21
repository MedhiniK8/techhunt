import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Lock, Unlock, FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from 'sonner';

export default function AdminDownload() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPanel, setShowPanel] = useState(false);

  const ADMIN_PASSWORD = 'techxhunt2026';

  const handleUnlock = () => {
    if (password === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      toast.success('Admin access granted');
    } else {
      toast.error('Incorrect password');
    }
  };

  const handleDownload = () => {
    try {
      const data = localStorage.getItem('techXHuntRegistrations');
      if (!data) {
        toast.error('No registrations found');
        return;
      }

      const registrations = JSON.parse(data);

      if (registrations.length === 0) {
        toast.error('No registrations to export');
        return;
      }

      const excelData: any[] = [];

      registrations.forEach((reg: any, index: number) => {
        const baseRow = {
          'S.No': index + 1,
          'Crew Name': reg.crewName,
          'Team Size': reg.teamSize,
          'Registration Date': new Date(reg.timestamp).toLocaleString(),
        };

        excelData.push({
          ...baseRow,
          'Member Role': 'Captain',
          'Name': reg.captain.name,
          'Phone': reg.captain.phone,
          'Email': reg.captain.email,
          'USN': reg.captain.usn,
          'Year': reg.captain.year,
          'Branch': reg.captain.branch,
        });

        excelData.push({
          ...baseRow,
          'Member Role': 'Member 2',
          'Name': reg.member2.name,
          'Phone': reg.member2.phone,
          'Email': reg.member2.email,
          'USN': reg.member2.usn,
          'Year': reg.member2.year,
          'Branch': reg.member2.branch,
        });

        if (reg.member3) {
          excelData.push({
            ...baseRow,
            'Member Role': 'Member 3',
            'Name': reg.member3.name,
            'Phone': reg.member3.phone,
            'Email': reg.member3.email,
            'USN': reg.member3.usn,
            'Year': reg.member3.year,
            'Branch': reg.member3.branch,
          });
        }
      });

      const worksheet = XLSX.utils.json_to_sheet(excelData);

      const columnWidths = [
        { wch: 6 },
        { wch: 20 },
        { wch: 10 },
        { wch: 20 },
        { wch: 15 },
        { wch: 25 },
        { wch: 12 },
        { wch: 30 },
        { wch: 15 },
        { wch: 10 },
        { wch: 10 },
      ];
      worksheet['!cols'] = columnWidths;

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

      const fileName = `TechXHunt_Registrations_${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(workbook, fileName);

      toast.success(`Downloaded ${registrations.length} registrations`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download registrations');
    }
  };

  return (
    <>
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-amber-600/40 rounded-full flex items-center justify-center hover:bg-slate-700/80 hover:border-amber-500/60 transition-all group"
        title="Admin Panel"
      >
        <Lock className="w-5 h-5 text-amber-400 group-hover:text-amber-300" />
      </button>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed bottom-24 left-8 z-40 w-80 bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl border border-amber-600/40 shadow-2xl p-6"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-amber-300">Admin Panel</h3>
            </div>

            {!isUnlocked ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-['Manrope'] text-sm font-medium text-amber-200/80 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-amber-600/30 rounded-lg text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="Enter admin password"
                  />
                </div>
                <button
                  onClick={handleUnlock}
                  className="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg font-['Manrope'] font-semibold text-white hover:from-amber-500 hover:to-amber-400 transition-all flex items-center justify-center gap-2"
                >
                  <Unlock className="w-4 h-4" />
                  Unlock
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-400 text-sm font-['Manrope']">
                  <Unlock className="w-4 h-4" />
                  Access Granted
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 rounded-lg font-['Manrope'] font-semibold text-white hover:from-green-500 hover:to-green-400 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/50"
                >
                  <Download className="w-5 h-5" />
                  Download Excel
                </button>
                <p className="text-xs text-slate-400 text-center font-['Manrope']">
                  Export all registrations to Excel
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
