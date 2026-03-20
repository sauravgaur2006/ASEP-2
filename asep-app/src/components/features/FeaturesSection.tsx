const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6 md:px-12 z-10 bg-[#04060e] border-t border-[rgba(255,255,255,0.05)]">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#080c1a] to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 py-[0.35rem] pr-4 pl-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-violet shadow-[0_0_10px_rgba(139,92,246,0.35)] animate-[pulseDot_2s_ease-in-out_infinite]"></span>
            <span className="text-[0.75rem] font-semibold text-text-secondary tracking-[1.2px] uppercase">
              Deep Analytics Engine
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-[2.5rem] md:text-[3.5rem] font-bold mb-6 leading-tight">
            More Than Just a Calendar. It’s an <span className="text-gradient">Execution Machine.</span>
          </h2>
          <p className="text-text-secondary text-[1.1rem] md:text-[1.2rem] leading-[1.8]">
            Traditional planners fail because they only tell you WHAT to do. ScholarOS uses real-time behavioral tracking and AI-driven insights to ensure you actually DO it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Large Feature Card 1 */}
          <div className="glass-card rounded-[28px] p-8 md:p-12 border border-[rgba(255,255,255,0.05)] bg-gradient-to-br from-[rgba(59,130,246,0.04)] to-[rgba(59,130,246,0.005)] hover:border-accent-blue/30 transition-all duration-300 group hover:shadow-[0_15px_50px_rgba(59,130,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/10 blur-[80px] rounded-full group-hover:bg-accent-blue/20 transition-all duration-500"></div>
            
            <div className="w-16 h-16 rounded-[18px] bg-accent-blue/15 flex items-center justify-center text-3xl mb-8 border border-accent-blue/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 shadow-[0_4px_20px_rgba(59,130,246,0.2)]">👁️</div>
            
            <h3 className="text-[1.8rem] font-bold mb-4 font-['Space_Grotesk'] relative z-10 text-white">Computer Vision Focus Monitor</h3>
            <p className="text-text-secondary leading-[1.8] mb-8 text-[1.05rem] relative z-10">
              Using your webcam (processed entirely locally for 100% privacy), our AI models monitor your eye gaze and posture in real-time. If you pick up your phone or look away for too long, it gently nudges you back on track.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-bold">✓</span> Distraction Alerts & Timeout Prevention</li>
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-bold">✓</span> Healthy Posture Correction Notifications</li>
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-bold">✓</span> Second-by-Second Focus Graph Analytics</li>
            </ul>
          </div>

          {/* Large Feature Card 2 */}
          <div className="glass-card rounded-[28px] p-8 md:p-12 border border-[rgba(255,255,255,0.05)] bg-gradient-to-br from-[rgba(139,92,246,0.04)] to-[rgba(139,92,246,0.005)] hover:border-accent-violet/30 transition-all duration-300 group hover:shadow-[0_15px_50px_rgba(139,92,246,0.1)] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-violet/10 blur-[80px] rounded-full group-hover:bg-accent-violet/20 transition-all duration-500"></div>

            <div className="w-16 h-16 rounded-[18px] bg-accent-violet/15 flex items-center justify-center text-3xl mb-8 border border-accent-violet/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10 shadow-[0_4px_20px_rgba(139,92,246,0.2)]">🧠</div>
            
            <h3 className="text-[1.8rem] font-bold mb-4 font-['Space_Grotesk'] relative z-10 text-white">Neural Schedule Generation</h3>
            <p className="text-text-secondary leading-[1.8] mb-8 text-[1.05rem] relative z-10">
              Input your syllabus, textbook size, and exam dates. Our AI analyzes your historical learning speed and builds a hyper-personalized, day-by-day optimization schedule that dynamically adapts if you fall significantly behind.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-violet/20 text-accent-violet text-xs font-bold">✓</span> Algorithmic Spaced Repetition Scheduling</li>
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-violet/20 text-accent-violet text-xs font-bold">✓</span> AI Dynamic Re-routing & Syllabus Catchup</li>
              <li className="flex items-center gap-4 text-[1rem] text-text-primary"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-violet/20 text-accent-violet text-xs font-bold">✓</span> Active Burnout Prevention Buffers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
