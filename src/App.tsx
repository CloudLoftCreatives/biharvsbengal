import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, Zap, ShieldAlert, Target, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const BentoCard = ({ children, className = "", accent = "default" }: { children: React.ReactNode, className?: string, accent?: "default" | "bjp" | "tmc" | "solid-bjp" | "solid-tmc" | "solid-dark" }) => {
  const accentClasses = {
    default: "brutal-border bg-white brutal-shadow",
    bjp: "brutal-border bg-white brutal-shadow-bjp",
    tmc: "brutal-border bg-white brutal-shadow-tmc",
    "solid-bjp": "brutal-border bg-[var(--color-bjp)] text-white brutal-shadow",
    "solid-tmc": "brutal-border bg-[var(--color-tmc)] text-white brutal-shadow",
    "solid-dark": "brutal-border bg-[var(--color-text-dark)] text-white brutal-shadow",
  };

  return (
    <div className={`transition-all duration-300 p-8 md:p-12 ${accentClasses[accent]} ${className}`}>
      {children}
    </div>
  );
};

const Marquee = ({ text, speed = "normal" }: { text: string, speed?: "normal" | "fast" }) => {
  const animationClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-[var(--color-text-dark)] text-[var(--color-bg-light)] py-4 flex items-center border-y-4 border-[var(--color-text-dark)]">
      <div className={`inline-block ${animationClass}`}>
        <span className="font-display font-black text-4xl md:text-6xl uppercase px-4">{text}</span>
        <span className="font-display font-black text-4xl md:text-6xl uppercase px-4">{text}</span>
        <span className="font-display font-black text-4xl md:text-6xl uppercase px-4">{text}</span>
        <span className="font-display font-black text-4xl md:text-6xl uppercase px-4">{text}</span>
      </div>
    </div>
  );
};

const SourceLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors underline underline-offset-4 decoration-2"
  >
    {children} <ExternalLink size={14} />
  </a>
);

export default function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] text-[var(--color-text-dark)] selection:bg-[var(--color-text-dark)] selection:text-[var(--color-bg-light)] font-sans overflow-x-hidden">
      
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-light)]/90 backdrop-blur-md border-b-4 border-[var(--color-text-dark)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
            <div className="w-4 h-4 bg-[var(--color-text-dark)]"></div>
            ELECTORAL DYNAMICS
          </div>
          <div className="hidden md:flex gap-6 font-bold uppercase text-sm tracking-widest">
            <a href="#data" onClick={(e) => scrollToSection(e, 'data')} className="hover:text-[var(--color-accent)] transition-colors">Data</a>
            <a href="#model" onClick={(e) => scrollToSection(e, 'model')} className="hover:text-[var(--color-accent)] transition-colors">Model</a>
            <a href="#projection" onClick={(e) => scrollToSection(e, 'projection')} className="hover:text-[var(--color-accent)] transition-colors">Projection</a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center relative px-6 md:px-12 max-w-7xl mx-auto py-20">
          <div className="relative z-10">
            <FadeIn>
              <div className="inline-block border-2 border-[var(--color-text-dark)] px-4 py-1.5 text-sm font-black tracking-widest uppercase mb-8 bg-white brutal-shadow">
                The SIR Impact
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-display font-black text-7xl md:text-9xl lg:text-[160px] leading-[0.85] tracking-tighter uppercase mb-8">
                BIHAR <span className="text-transparent text-stroke">VS</span><br/>
                WEST BENGAL
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-4xl font-bold max-w-4xl leading-tight border-l-8 border-[var(--color-accent)] pl-6">
                Voter Deletion Impact & Political Structural Modeling (2025-2026)
              </p>
            </FadeIn>
          </div>
        </section>

        <Marquee text="+++ VERIFIED HARD DATA +++ STRUCTURAL MODELING +++ FINAL PROJECTIONS +++" speed="fast" />

        <div className="px-6 md:px-12 max-w-7xl mx-auto py-32" id="data">
          {/* 1. VERIFIED HARD DATA */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                01. Verified Data
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <BentoCard accent="bjp">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="font-display font-black text-4xl uppercase">Bihar (2025)</h3>
                    <span className="bg-[var(--color-text-dark)] text-[var(--color-bg-light)] px-4 py-2 text-sm font-black uppercase tracking-widest">243 Seats</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest mb-4 border-b-2 border-[var(--color-text-dark)] pb-2">NDA Alliance</p>
                      <div className="flex justify-between items-end pb-2">
                        <span className="text-2xl font-bold">BJP</span>
                        <span className="font-display font-black text-4xl text-[var(--color-bjp)]">89</span>
                      </div>
                      <div className="flex justify-between items-end pb-2 mt-2">
                        <span className="text-2xl font-bold">JD(U)</span>
                        <span className="font-display font-black text-4xl">85</span>
                      </div>
                      <div className="flex justify-between items-end pb-2 mt-2">
                        <span className="text-2xl font-bold">Allies</span>
                        <span className="font-display font-black text-4xl">~28</span>
                      </div>
                    </div>
                    <div className="bg-[var(--color-bjp)] text-white p-6 brutal-border">
                      <p className="font-black text-2xl uppercase flex items-center gap-2">
                        <ArrowRight size={24} /> Total NDA: ~202 (Landslide)
                      </p>
                    </div>
                    <p className="font-bold text-xl">Opposition: ~35 seats</p>
                  </div>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <BentoCard accent="tmc">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="font-display font-black text-4xl uppercase">West Bengal (2021)</h3>
                    <span className="bg-[var(--color-text-dark)] text-[var(--color-bg-light)] px-4 py-2 text-sm font-black uppercase tracking-widest">294 Seats</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest mb-4 border-b-2 border-[var(--color-text-dark)] pb-2">Results</p>
                      <div className="flex justify-between items-end pb-2">
                        <span className="text-2xl font-bold">AITC (TMC)</span>
                        <span className="font-display font-black text-4xl text-[var(--color-tmc)]">213</span>
                      </div>
                      <div className="flex justify-between items-end pb-2 mt-2">
                        <span className="text-2xl font-bold">BJP</span>
                        <span className="font-display font-black text-4xl text-[var(--color-bjp)]">77</span>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </FadeIn>
            </div>
          </section>

          {/* 2 & 3. VOTER DELETION & COMPARISON */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                02. Voter Deletion (SIR)
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1} className="lg:col-span-1">
                <BentoCard accent="solid-bjp" className="h-full flex flex-col justify-center border-none">
                  <h3 className="uppercase tracking-widest text-sm font-black mb-4">Bihar Impact</h3>
                  <div className="font-display font-black text-7xl mb-2">~65L</div>
                  <p className="text-2xl font-bold mb-6">Deleted Voters</p>
                  <div className="w-full bg-black/20 h-4 mb-2 brutal-border">
                    <div className="bg-white w-[8.5%] h-full border-r-2 border-[var(--color-text-dark)]"></div>
                  </div>
                  <p className="font-black text-xl">~8-9% of 7.4Cr Electorate</p>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.2} className="lg:col-span-1">
                <BentoCard accent="solid-tmc" className="h-full flex flex-col justify-center border-none">
                  <h3 className="uppercase tracking-widest text-sm font-black mb-4">West Bengal Impact</h3>
                  <div className="font-display font-black text-7xl mb-2">~63-91L</div>
                  <p className="text-2xl font-bold mb-6">Deleted Voters</p>
                  <div className="w-full bg-black/20 h-4 mb-2 brutal-border">
                    <div className="bg-white w-[11%] h-full border-r-2 border-[var(--color-text-dark)]"></div>
                  </div>
                  <p className="font-black text-xl">~10-12% of 7.6Cr Electorate</p>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.3} className="lg:col-span-1">
                <BentoCard accent="solid-dark" className="h-full border-none">
                  <AlertTriangle size={64} className="mb-8 text-[var(--color-bjp)]" />
                  <h3 className="font-display font-black text-4xl mb-6 uppercase leading-tight">
                    Critical Structural Fact
                  </h3>
                  <p className="text-2xl font-bold mb-6">
                    In both states, there are many constituencies where:
                  </p>
                  <div className="bg-white text-[var(--color-text-dark)] p-6 font-black text-2xl uppercase text-center brutal-border">
                    Deleted Voters &gt; Victory Margin
                  </div>
                </BentoCard>
              </FadeIn>
            </div>
          </section>

          {/* 5. MARGIN STRUCTURE */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                03. Margin Structure (WB)
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="brutal-border bg-white p-8 brutal-shadow">
                  <div className="font-display font-black text-8xl text-[var(--color-tmc)] mb-4">~35</div>
                  <p className="text-3xl uppercase tracking-wider font-black">Seats with Margin &lt; 5,000</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="brutal-border bg-white p-8 brutal-shadow">
                  <div className="font-display font-black text-8xl text-[var(--color-bjp)] mb-4">60-80</div>
                  <p className="text-3xl uppercase tracking-wider font-black">Seats with Margin &lt; 15,000</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <div className="mt-12 bg-[var(--color-text-dark)] text-white p-8 inline-block brutal-shadow">
                <p className="text-3xl font-black uppercase flex items-center gap-4">
                  <ArrowRight size={32} className="text-[var(--color-bjp)]" /> These are HIGH-SENSITIVITY seats.
                </p>
              </div>
            </FadeIn>
          </section>
        </div>

        <Marquee text="+++ THE CORE MODEL +++ BIHAR VALIDATION +++ WB APPLICATION +++" />

        <div className="px-6 md:px-12 max-w-7xl mx-auto py-32" id="model">
          {/* 6 & 7. CORE MODEL & VALIDATION */}
          <section className="mb-32">
            <div className="bg-white brutal-border brutal-shadow p-8 md:p-16">
              <FadeIn>
                <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                  The Core Model
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="bg-[var(--color-bg-light)] brutal-border p-8 md:p-12 mb-16">
                  <p className="font-display font-black text-3xl md:text-5xl leading-tight uppercase">
                    "If deleted votes exceed margin + new voters added <ArrowRight className="inline mx-2 text-[var(--color-accent)]" size={48} /> seat shifts toward beneficiary party."
                  </p>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-12">
                <FadeIn delay={0.2}>
                  <h3 className="font-black text-2xl uppercase tracking-widest mb-8 border-b-4 border-[var(--color-text-dark)] pb-4">Bihar Validation</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[var(--color-bjp)] shrink-0 mt-1" size={32} />
                      <div>
                        <p className="font-black text-2xl uppercase">Observed Outcome</p>
                        <p className="text-xl font-bold text-gray-600">NDA → 202 seats (landslide)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[var(--color-bjp)] shrink-0 mt-1" size={32} />
                      <div>
                        <p className="font-black text-2xl uppercase">Low-margin seats</p>
                        <p className="text-xl font-bold text-gray-600">Converted into safe wins</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[var(--color-bjp)] shrink-0 mt-1" size={32} />
                      <div>
                        <p className="font-black text-2xl uppercase">Medium seats</p>
                        <p className="text-xl font-bold text-gray-600">Shifted strongly</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.3} className="flex items-center">
                  <div className="w-full bg-[var(--color-text-dark)] text-white p-12 brutal-shadow transform -rotate-2 hover:rotate-0 transition-transform">
                    <p className="font-black text-xl uppercase tracking-widest mb-4 text-[var(--color-accent)]">Conclusion</p>
                    <p className="font-display font-black text-4xl uppercase leading-tight">
                      Model works in real-world scenario
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* 8. APPLY MODEL TO WB */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                04. Model Application (WB)
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <BentoCard accent="bjp" className="h-full">
                  <h3 className="font-display font-black text-4xl mb-2 text-[var(--color-bjp)]">TIER 1</h3>
                  <p className="text-2xl font-black uppercase mb-2">High Conversion</p>
                  <p className="text-sm font-bold text-gray-500 mb-8 border-l-4 border-[var(--color-bjp)] pl-3">BJP Low-Margin Seats. Deletions easily flip these to safe wins.</p>
                  <ul className="space-y-4 font-bold text-lg mb-12">
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Count</span> <span>~20-25</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Margin</span> <span>&lt;5,000</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Deletion</span> <span>10k-30k</span></li>
                  </ul>
                  <div className="bg-[var(--color-bjp)] text-white p-4 font-black text-xl text-center uppercase brutal-border">
                    BJP Consolidates
                  </div>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <BentoCard className="h-full">
                  <h3 className="font-display font-black text-4xl mb-2 text-[var(--color-accent)]">TIER 2</h3>
                  <p className="text-2xl font-black uppercase mb-2">Battleground</p>
                  <p className="text-sm font-bold text-gray-500 mb-8 border-l-4 border-[var(--color-accent)] pl-3">Medium Seats. Deletions make these highly competitive and vulnerable.</p>
                  <ul className="space-y-4 font-bold text-lg mb-12">
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Count</span> <span>~40-60</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Margin</span> <span>5k-15k</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Status</span> <span>Vulnerable</span></li>
                  </ul>
                  <div className="bg-[var(--color-accent)] text-white p-4 font-black text-xl text-center uppercase brutal-border">
                    High Probability Flip
                  </div>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <BentoCard accent="tmc" className="h-full">
                  <h3 className="font-display font-black text-4xl mb-2 text-[var(--color-tmc)]">TIER 3</h3>
                  <p className="text-2xl font-black uppercase mb-2">Erosion Zone</p>
                  <p className="text-sm font-bold text-gray-500 mb-8 border-l-4 border-[var(--color-tmc)] pl-3">TMC High-Margin. Won't flip, but victory margins significantly erode.</p>
                  <ul className="space-y-4 font-bold text-lg mb-12">
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Count</span> <span>~150-170</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Margin</span> <span>20k-50k</span></li>
                    <li className="flex justify-between border-b-2 border-gray-200 pb-2"><span>Status</span> <span>Stronghold</span></li>
                  </ul>
                  <div className="bg-[var(--color-tmc)] text-white p-4 font-black text-xl text-center uppercase brutal-border">
                    Margin Erosion
                  </div>
                </BentoCard>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-16 bg-[var(--color-text-dark)] text-white p-12 text-center brutal-shadow">
                <p className="text-2xl font-black uppercase tracking-widest text-[var(--color-accent)] mb-6">Total Impact Zone</p>
                <h3 className="font-display font-black text-5xl md:text-7xl uppercase">
                  Seats behaving like Bihar:<br/>
                  <span className="text-[var(--color-bjp)] text-7xl md:text-9xl mt-4 block">~60-80</span>
                </h3>
              </div>
            </FadeIn>
          </section>
        </div>

        <Marquee text="+++ FINAL SCENARIOS +++ SEAT PROJECTIONS +++ GROUND REALITY +++" speed="fast" />

        <div className="px-6 md:px-12 max-w-7xl mx-auto py-32" id="projection">
          {/* 10. SEAT PROJECTION */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                05. Seat Projection
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white brutal-border brutal-shadow-bjp p-8 md:p-16 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 text-[var(--color-bjp)]/10">
                    <TrendingUp size={300} />
                  </div>
                  <h3 className="font-display font-black text-8xl text-[var(--color-bjp)] mb-12 relative z-10">BJP</h3>
                  <div className="space-y-6 mb-16 relative z-10">
                    <div className="flex justify-between text-2xl font-bold border-b-4 border-gray-100 pb-4">
                      <span>Base (2021)</span>
                      <span>77</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold border-b-4 border-gray-100 pb-4">
                      <span>Low-margin gain</span>
                      <span className="text-[var(--color-bjp)]">+20-25</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold border-b-4 border-gray-100 pb-4">
                      <span>Medium swing</span>
                      <span className="text-[var(--color-bjp)]">+30-50</span>
                    </div>
                  </div>
                  <div className="relative z-10 bg-[var(--color-text-dark)] text-white p-8 brutal-border">
                    <p className="text-lg uppercase tracking-widest font-black mb-2 text-[var(--color-bjp)]">Final Projection</p>
                    <p className="font-display font-black text-6xl md:text-7xl">115 - 155</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white brutal-border brutal-shadow-tmc p-8 md:p-16 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 text-[var(--color-tmc)]/10">
                    <TrendingUp size={300} className="transform rotate-180" />
                  </div>
                  <h3 className="font-display font-black text-8xl text-[var(--color-tmc)] mb-12 relative z-10">TMC</h3>
                  <div className="space-y-6 mb-16 relative z-10">
                    <div className="flex justify-between text-2xl font-bold border-b-4 border-gray-100 pb-4">
                      <span>Retained</span>
                      <span>90-120</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold border-b-4 border-gray-100 pb-4">
                      <span>Lost</span>
                      <span className="text-[var(--color-tmc)]">-40 to -70</span>
                    </div>
                  </div>
                  <div className="relative z-10 mt-auto bg-[var(--color-text-dark)] text-white p-8 brutal-border">
                    <p className="text-lg uppercase tracking-widest font-black mb-2 text-[var(--color-tmc)]">Final Projection</p>
                    <p className="font-display font-black text-6xl md:text-7xl">110 - 150</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* 11. BEHAVIORAL & GROUND REALITY */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                06. Ground Reality
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <BentoCard accent="tmc">
                  <h3 className="font-display font-black text-5xl mb-12 text-[var(--color-tmc)]">TMC</h3>
                  <div className="mb-12">
                    <h4 className="font-black text-2xl mb-6 flex items-center gap-3 uppercase bg-[var(--color-text-dark)] text-white p-3 inline-flex"><Zap size={24} /> Strengths</h4>
                    <ul className="space-y-4 font-bold text-xl">
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-tmc)]"></div>Welfare schemes</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-tmc)]"></div>Strong grassroots network</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-tmc)]"></div>Cultural alignment</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-tmc)]"></div>Booth-level control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-6 flex items-center gap-3 uppercase border-2 border-[var(--color-text-dark)] p-3 inline-flex"><ShieldAlert size={24} /> Weaknesses</h4>
                    <ul className="space-y-4 font-bold text-xl text-gray-600">
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Corruption perception</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Anti-incumbency</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Urban dissatisfaction</li>
                    </ul>
                  </div>
                </BentoCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <BentoCard accent="bjp">
                  <h3 className="font-display font-black text-5xl mb-12 text-[var(--color-bjp)]">BJP</h3>
                  <div className="mb-12">
                    <h4 className="font-black text-2xl mb-6 flex items-center gap-3 uppercase bg-[var(--color-text-dark)] text-white p-3 inline-flex"><Zap size={24} /> Strengths</h4>
                    <ul className="space-y-4 font-bold text-xl">
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-bjp)]"></div>Growing vote share</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-bjp)]"></div>Central leadership</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[var(--color-bjp)]"></div>Aggressive campaign</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-6 flex items-center gap-3 uppercase border-2 border-[var(--color-text-dark)] p-3 inline-flex"><ShieldAlert size={24} /> Weaknesses (2021)</h4>
                    <ul className="space-y-4 font-bold text-xl text-gray-600">
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Weak local structure</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Poor booth control</li>
                      <li className="flex items-center gap-4"><div className="w-3 h-3 bg-gray-300"></div>Rural gap</li>
                    </ul>
                  </div>
                </BentoCard>
              </FadeIn>
            </div>
          </section>

          {/* 12 & 13. BJP STRATEGY & INSIGHT */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 md:p-12 brutal-border brutal-shadow h-full">
                  <h3 className="font-display font-black text-4xl mb-8 flex items-center gap-4 uppercase">
                    <Target className="text-[var(--color-bjp)]" size={40} /> BJP Current Strategy
                  </h3>
                  <div className="space-y-4 mb-12">
                    <div className="bg-[var(--color-bg-light)] p-4 font-bold text-xl border-l-8 border-[var(--color-text-dark)]">Grassroots expansion</div>
                    <div className="bg-[var(--color-bg-light)] p-4 font-bold text-xl border-l-8 border-[var(--color-text-dark)]">Village-level outreach</div>
                    <div className="bg-[var(--color-bg-light)] p-4 font-bold text-xl border-l-8 border-[var(--color-text-dark)]">Welfare-based promises</div>
                    <div className="bg-[var(--color-bg-light)] p-4 font-bold text-xl border-l-8 border-[var(--color-text-dark)]">Community targeting</div>
                    <div className="bg-[var(--color-bg-light)] p-4 font-bold text-xl border-l-8 border-[var(--color-text-dark)]">Booth strengthening</div>
                  </div>
                  <div className="bg-[var(--color-bjp)] text-white p-6 brutal-border">
                    <p className="font-black text-2xl uppercase mb-2">Key shift:</p>
                    <p className="text-xl font-bold">BJP is copying TMC’s winning model (welfare + grassroots)</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-[var(--color-text-dark)] text-white p-8 md:p-16 h-full flex flex-col justify-center brutal-shadow">
                  <h3 className="font-display font-black text-5xl mb-12 uppercase text-[var(--color-accent)]">Most Important Insight</h3>
                  
                  <div className="space-y-12">
                    <div>
                      <p className="font-black text-gray-400 uppercase tracking-widest text-lg mb-4">Earlier (2021)</p>
                      <p className="text-3xl font-bold">BJP had electoral math advantage but no structure.</p>
                    </div>
                    
                    <div className="w-full h-2 bg-white/20"></div>
                    
                    <div>
                      <p className="font-black text-[var(--color-bjp)] uppercase tracking-widest text-lg mb-4">Now (2026)</p>
                      <p className="text-4xl md:text-5xl font-black uppercase leading-tight">BJP is building structure to convert that advantage.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* 14 & 15. SYSTEM CONFLICT & SCENARIOS */}
          <section className="mb-32">
            <FadeIn>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-12">
                07. Scenarios
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-12 gap-8">
              <FadeIn delay={0.1} className="lg:col-span-4">
                <BentoCard className="h-full bg-[var(--color-bg-light)]">
                  <h3 className="font-display font-black text-3xl mb-12 uppercase tracking-widest">System Conflict</h3>
                  <div className="space-y-12">
                    <div>
                      <h4 className="font-black text-2xl text-[var(--color-bjp)] mb-2 uppercase">System 1: Electoral Math</h4>
                      <p className="text-gray-600 font-bold mb-4">(SIR + margins)</p>
                      <p className="font-black text-xl flex items-center gap-2"><ArrowRight size={24} /> Favors BJP</p>
                    </div>
                    <div className="w-full h-1 bg-[var(--color-text-dark)]"></div>
                    <div>
                      <h4 className="font-black text-2xl text-[var(--color-tmc)] mb-2 uppercase">System 2: Ground Structure</h4>
                      <p className="text-gray-600 font-bold mb-4">(Welfare + control)</p>
                      <p className="font-black text-xl flex items-center gap-2"><ArrowRight size={24} /> Favors TMC</p>
                    </div>
                  </div>
                </BentoCard>
              </FadeIn>

              <div className="lg:col-span-8 space-y-6">
                <FadeIn delay={0.2}>
                  <div className="bg-white brutal-border p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 brutal-shadow">
                    <div>
                      <h4 className="font-display font-black text-3xl uppercase">Scenario A</h4>
                      <p className="font-bold text-xl text-gray-600 mt-2">TMC structure dominates</p>
                    </div>
                    <div className="flex gap-8 font-display font-black text-3xl">
                      <span className="text-[var(--color-tmc)]">TMC: 140-170</span>
                      <span className="text-[var(--color-bjp)]">BJP: 110-130</span>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="bg-white brutal-border p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 brutal-shadow">
                    <div>
                      <h4 className="font-display font-black text-3xl uppercase">Scenario B</h4>
                      <p className="font-bold text-xl text-gray-600 mt-2">Balanced</p>
                    </div>
                    <div className="flex gap-8 font-display font-black text-3xl">
                      <span className="text-[var(--color-tmc)]">TMC: 120-150</span>
                      <span className="text-[var(--color-bjp)]">BJP: 120-145</span>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-[var(--color-text-dark)] text-white brutal-border p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 brutal-shadow-bjp transform md:scale-105 md:ml-4 z-10 relative">
                    <div>
                      <h4 className="font-display font-black text-5xl uppercase">Scenario C</h4>
                      <p className="text-[var(--color-bjp)] font-black text-xl mt-4 uppercase">Bihar-type wave (BJP forms govt)</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 font-display font-black text-4xl md:text-5xl">
                      <span className="text-[var(--color-bjp)]">BJP: 140-155+</span>
                      <span className="text-gray-400 text-3xl md:text-4xl mt-2">TMC: 100-130</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* FINAL MASTER CONCLUSION */}
          <section>
            <FadeIn>
              <div className="bg-[var(--color-bjp)] text-white p-8 md:p-20 brutal-border brutal-shadow">
                <h2 className="font-display font-black text-6xl md:text-8xl uppercase mb-16 border-b-8 border-white pb-8">
                  Final Master Conclusion
                </h2>
                
                <div className="space-y-12 text-2xl md:text-4xl font-bold mb-20 leading-tight">
                  <p className="flex items-start gap-6">
                    <ArrowRight className="shrink-0 mt-2 text-[var(--color-text-dark)]" size={48} />
                    <span><strong className="font-black text-[var(--color-text-dark)] uppercase">Bihar proves</strong> that large-scale voter deletion combined with low-margin seats can produce landslide outcomes.</span>
                  </p>
                  <p className="flex items-start gap-6">
                    <ArrowRight className="shrink-0 mt-2 text-[var(--color-text-dark)]" size={48} />
                    <span><strong className="font-black text-[var(--color-text-dark)] uppercase">West Bengal has equal or higher deletion impact</strong> and a similar margin structure in 60–80 constituencies.</span>
                  </p>
                  <p className="flex items-start gap-6">
                    <ArrowRight className="shrink-0 mt-2 text-[var(--color-text-dark)]" size={48} />
                    <span>With BJP now actively building grassroots strength, the <strong className="font-black text-[var(--color-text-dark)] uppercase">theoretical advantage becomes operationally viable</strong>.</span>
                  </p>
                </div>

                <div className="bg-white text-[var(--color-text-dark)] p-10 md:p-16 brutal-border">
                  <h3 className="font-display font-black text-3xl text-[var(--color-bjp)] mb-6 uppercase tracking-widest">
                    One-Line Final Result
                  </h3>
                  <p className="font-display font-black text-4xl md:text-6xl leading-tight uppercase">
                    West Bengal 2026 is a high-volatility election where BJP is projected at ~115–155 seats, with a realistic path to majority (148), depending on how effectively it converts 60–80 high-impact constituencies influenced by voter-roll changes.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>

      </main>
    </div>
  );
}
