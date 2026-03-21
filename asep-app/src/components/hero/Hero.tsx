import HeroVisual from './HeroVisual';

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 pt-[90px] lg:pt-[105px] pb-16" id="hero">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center lg:items-start mb-16 lg:mb-24">
        {/* LEFT COLUMN */}
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 py-[0.35rem] pr-4 pl-2 rounded-full glass-card mb-7 animate-[fadeSlideUp_0.8s_ease_forwards] opacity-0 mx-auto">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(6,214,160,0.35)] animate-[pulseDot_2s_ease-in-out_infinite]"></span>
            <span className="text-[0.75rem] font-semibold text-text-secondary tracking-[1.2px] uppercase">
              AI-Powered Study Platform
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-[clamp(2.6rem,5vw,4.8rem)] font-bold leading-[1.08] mb-6 animate-[fadeSlideUp_0.8s_ease_0.12s_forwards] opacity-0">
            <span className="block">Study Smarter.</span>
            <span className="block text-gradient">Execute Better.</span>
            <span className="block text-gradient">Achieve More.</span>
          </h1>

          <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-text-secondary max-w-[650px] mb-10 mx-auto animate-[fadeSlideUp_0.8s_ease_0.25s_forwards] opacity-0">
            ScholarOS uses AI to track your study sessions in real time, detect distractions, calculate focus scores, and deliver data-driven insights — turning every hour into peak productivity.
          </p>

          <div className="w-full max-w-[750px] mx-auto flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-5 animate-[fadeSlideUp_0.8s_ease_0.35s_forwards] opacity-0 w-full">
              {[
                { icon: '🎯', title: 'Focus Detection', desc: 'Real-time eye & posture tracking', hoverBorder: 'hover:border-accent-rose/40', hoverBg: 'hover:bg-accent-rose/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(244,63,94,0.15)]' },
                { icon: '📊', title: 'Study Analytics', desc: 'Deep insights into your habits', hoverBorder: 'hover:border-accent-blue/40', hoverBg: 'hover:bg-accent-blue/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]' },
                { icon: '🤖', title: 'AI Scheduler', desc: 'Smart auto-planning routines', hoverBorder: 'hover:border-accent-violet/40', hoverBg: 'hover:bg-accent-violet/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(139,92,246,0.15)]' },
                { icon: '🔥', title: 'Study Streaks', desc: 'Gamified consistency rewards', hoverBorder: 'hover:border-accent-amber/40', hoverBg: 'hover:bg-accent-amber/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]' },
                { icon: '🧠', title: 'Doubt Solver', desc: 'Instant 24/7 AI tutor help', hoverBorder: 'hover:border-accent-cyan/40', hoverBg: 'hover:bg-accent-cyan/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(6,214,160,0.15)]' },
                { icon: '⏱️', title: 'Session Tracker', desc: 'Pomodoro with machine learning', hoverBorder: 'hover:border-white/30', hoverBg: 'hover:bg-white/5', hoverShadow: 'hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)]' },
              ].map((feature, i) => (
                <div key={i} className={`flex flex-col items-center text-center p-5 rounded-2xl glass-card transition-all duration-300 cursor-pointer border border-[rgba(255,255,255,0.08)] group shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:-translate-y-1 ${feature.hoverBorder} ${feature.hoverBg} ${feature.hoverShadow}`}>
                  <span className="text-[2rem] sm:text-[2.2rem] mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{feature.icon}</span>
                  <span className="text-[0.95rem] font-bold text-text-primary mb-1 tracking-[0.2px]">{feature.title}</span>
                  <span className="text-[0.8rem] text-text-secondary leading-[1.4]">{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Glassmorphism UI Composition */}
        <div className="relative flex items-center justify-center max-w-[800px] lg:max-w-none mx-auto w-full animate-[fadeSlideUp_1s_ease_0.25s_forwards] opacity-0 lg:pl-10">
          <HeroVisual />
        </div>

      </div>

      {/* BOTTOM SECTION (Stats + CTA) */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center relative z-20 mt-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-[fadeSlideUp_0.8s_ease_0.45s_forwards] opacity-0 w-full mb-10 max-w-[1000px]">
          {[
            { val: '92%', label: 'Avg Focus Score' },
            { val: '3.2×', label: 'Product Boost' },
            { val: '45 Day', label: 'Study Streak' },
            { val: '10k+', label: 'Hours Tracked' },
          ].map((stat, i) => (
            <div key={i} className="glass-card flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-[18px] border border-[rgba(255,255,255,0.06)] bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-transparent relative overflow-hidden group hover:border-[rgba(255,255,255,0.15)] transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-[2px]">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-blue/10 blur-[20px] rounded-full group-hover:bg-accent-blue/20 transition-colors pointer-events-none"></div>
              <div className="font-['Space_Grotesk'] text-[2rem] sm:text-[2.2rem] font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-1 relative z-10 leading-none">{stat.val}</div>
              <div className="text-[0.7rem] sm:text-[0.75rem] text-text-secondary font-semibold tracking-[0.5px] uppercase relative z-10 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-5 justify-center animate-[fadeSlideUp_0.8s_ease_0.55s_forwards] opacity-0 w-full">
          <button className="inline-flex items-center justify-center gap-[0.6rem] py-[0.95rem] px-10 rounded-[14px] bg-gradient-to-br from-accent-blue to-accent-violet text-white font-semibold text-[1rem] no-underline border-none cursor-pointer transition-all duration-200 relative overflow-hidden w-full sm:w-auto hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(255,255,255,0.12)] before:from-0% before:to-transparent before:to-50% before:rounded-inherit group shadow-lg">
            Start Your Session <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
          </button>
          <button className="inline-flex items-center justify-center gap-[0.6rem] py-[0.95rem] px-8 rounded-[14px] glass-card text-text-primary font-medium text-[1rem] no-underline cursor-pointer transition-colors w-full sm:w-auto hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)] shadow-md">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-[0.6rem] pl-[2px] shadow-sm">▶</span>
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
