import { motion } from 'framer-motion';

const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[700px] flex items-center justify-center lg:-ml-[5%] scale-[1.15] md:scale-[1.25] transform-origin-center mt-24">
      {/* Background Glowing Orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[80%] h-[80%] rounded-full bg-accent-violet/20 blur-[100px] animate-[glowPulse_6s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute w-[60%] h-[60%] rounded-full bg-accent-blue/30 blur-[80px] -translate-x-12 translate-y-12 animate-[glowPulse_4s_ease-in-out_infinite_alternate_reverse]"></div>
        <div className="absolute w-[70%] h-[70%] rounded-full bg-accent-cyan/20 blur-[90px] translate-x-16 -translate-y-16 animate-[glowPulse_5s_ease-in-out_infinite_alternate]"></div>
      </div>

      {/* Floating UI Elements Composer */}
      <div 
        className="relative w-full h-full pointer-events-none"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        
        {/* === CARD 1: Focus Session (Center/Front) === */}
        <motion.div 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute top-[22%] left-[10%] w-[75%] h-[50%] glass-card rounded-2xl border border-[rgba(255,255,255,0.12)] p-6 z-30 shadow-[0_20px_50px_rgba(4,6,14,0.5)] bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.01)] backdrop-blur-2xl overflow-hidden"
        >
          {/* Subtle reflections */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.5)] to-transparent opacity-50"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center border border-accent-blue/30">
                <span className="text-accent-blue text-lg">⏱️</span>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm tracking-wide">Deep Focus</h3>
                <p className="text-text-secondary text-xs">Machine Learning Setup</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-accent-cyan/15 border border-accent-cyan/25 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              <span className="text-accent-cyan text-xs font-semibold">98% Focus</span>
            </div>
          </div>

          <div className="flex justify-center items-center my-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" className="stroke-[rgba(255,255,255,0.05)] fill-none" strokeWidth="8" />
                <circle cx="80" cy="80" r="70" className="stroke-accent-blue fill-none drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" strokeWidth="8" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-['Space_Grotesk'] text-4xl font-bold text-white tracking-wider">45<span className="text-xl text-text-secondary">:00</span></span>
                <span className="text-xs text-text-secondary uppercase tracking-widest mt-1">Remaining</span>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-3 mt-auto">
            <div className="h-2 flex-1 bg-accent-cyan/20 rounded-full overflow-hidden">
              <div className="h-full w-full bg-accent-cyan rounded-full"></div>
            </div>
            <div className="h-2 flex-1 bg-accent-violet/20 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-accent-violet rounded-full"></div>
            </div>
            <div className="h-2 flex-1 bg-[rgba(255,255,255,0.05)] rounded-full"></div>
          </div>
        </motion.div>

        {/* === CARD 2: Analytics Graph (Top Right/Back) === */}
        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute top-[10%] right-[-3%] w-[60%] h-[43%] glass-card rounded-[20px] border border-[rgba(255,255,255,0.08)] p-5 z-20 shadow-[0_15px_40px_rgba(4,6,14,0.4)] bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-transparent backdrop-blur-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-text-secondary text-xs uppercase tracking-widest font-semibold">Weekly Productivity</h3>
            <span className="text-accent-cyan text-xs font-medium bg-accent-cyan/10 px-2 py-0.5 rounded">+14.2%</span>
          </div>
          
          <div className="h-[65%] w-full flex items-end justify-between gap-2 px-1">
            {[35, 55, 40, 80, 60, 95, 75].map((height, i) => (
              <div key={i} className="w-full bg-[rgba(255,255,255,0.03)] rounded-t-sm relative group overflow-hidden" style={{ height: '100%' }}>
                <div 
                  className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ${i === 5 ? 'bg-gradient-to-t from-accent-cyan to-accent-blue shadow-[0_0_15px_rgba(6,214,160,0.4)]' : 'bg-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.25)]'}`}
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === CARD 5: Today's Progress (Bottom Left, mirrors Neural Engine) === */}
        <motion.div 
          animate={{ y: [4, -6, 4] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute bottom-[2%] left-[1%] w-[46%] h-[22%] glass-card rounded-2xl border border-[rgba(255,255,255,0.08)] p-4 z-10 shadow-[0_15px_40px_rgba(4,6,14,0.3)] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-[0.65rem] sm:text-xs font-semibold tracking-wider uppercase mb-0.5">Today's Goal</div>
              <div className="text-accent-amber text-[0.55rem] sm:text-[0.65rem] font-medium">6h target · 4.2h done</div>
            </div>
            {/* Mini circular progress */}
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15" fill="none" stroke="#f59e0b" strokeWidth="3"
                  strokeDasharray="94" strokeDashoffset="25" strokeLinecap="round"
                  className="drop-shadow-[0_0_6px_rgba(245,158,11,0.7)]" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[0.5rem] font-bold text-amber-400">70%</div>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            {[
              { subject: 'Algorithms', pct: '85%', color: 'var(--accent-cyan)' },
              { subject: 'OS Concepts', pct: '60%', color: 'var(--accent-violet)' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[0.5rem] text-white/60 w-[52px] truncate">{s.subject}</span>
                <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: s.pct, background: s.color, boxShadow: `0 0 6px ${s.color}` }}></div>
                </div>
                <span className="text-[0.5rem] text-white/40">{s.pct}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === CARD 4: Neural Engine Status (Bottom Right Gap Filler) === */}
        <motion.div 
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute bottom-[2%] right-[1%] w-[46%] h-[22%] glass-card rounded-2xl border border-[rgba(255,255,255,0.08)] p-4 sm:p-5 z-10 shadow-[0_15px_40px_rgba(4,6,14,0.3)] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
             <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-accent-violet/20 border border-accent-violet/30">
               <span className="w-2.5 h-2.5 rounded-full bg-accent-violet animate-[pulseDot_3s_ease-in-out_infinite] shadow-[0_0_12px_rgba(139,92,246,0.9)]"></span>
             </div>
             <div>
               <div className="text-white text-[0.65rem] sm:text-xs font-semibold tracking-wider uppercase mb-0.5">Neural Engine</div>
               <div className="text-accent-cyan text-[0.55rem] sm:text-[0.65rem] font-medium flex items-center gap-1.5">
                 Optimal Routing
               </div>
             </div>
          </div>
          <div className="w-full h-[35%] flex items-end gap-[3px] opacity-70">
            {[40, 70, 45, 90, 60, 80, 50, 100, 30].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-accent-violet to-accent-blue rounded-t-[2px] transition-all duration-500 hover:h-full" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroVisual;
