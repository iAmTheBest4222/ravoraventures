

export default function ProgramDetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14 font-sans">
      {/* Glassmorphism Card Container */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.18)] border border-orange/40 overflow-hidden relative">
        {/* Glowing Gradient Accent */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-32 bg-gradient-to-r from-orange via-light-gray to-navy-blue opacity-30 blur-2xl rounded-full"></div>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange via-light-gray to-navy-blue p-12 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-3 tracking-tight uppercase">
            Ravora Ventures
          </h1>
          <span className="block text-orange text-2xl md:text-3xl font-bold mb-2 tracking-wide">₹15 Crore Startup Growth Scheme</span>
          <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 italic">
            Fueling Innovation. Empowering Entrepreneurs. Building Legacies.
          </h2>
          <div className="flex justify-center gap-8 mt-6">
            <div className="bg-white/90 rounded-xl px-8 py-3 shadow text-orange font-extrabold text-xl border-2 border-orange/50">
              <span className="text-3xl">₹15 Cr</span> Fund
            </div>
            <div className="bg-white/90 rounded-xl px-8 py-3 shadow text-navy-blue font-extrabold text-xl border-2 border-navy-blue/50">
              <span className="text-3xl">₹500 Cr+</span> Deployed
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 md:p-16">
          {/* Introduction */}
          <section className="mb-14">
            <h3 className="text-2xl font-extrabold text-orange mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>🚀</span> Introduction
            </h3>
            <p className="text-navy-blue text-lg md:text-xl leading-relaxed">
              At Ravora Ventures, we believe that every breakthrough idea deserves the right foundation to grow. To support India’s next wave of entrepreneurs, we are proud to launch the <span className="font-bold text-navy-blue">₹15 Crore Startup Growth Scheme</span> – a unique blend of Equity and Debt Funding designed to empower startups at critical stages of their journey.
            </p>
          </section>

          <div className="border-t border-soft-gray my-10"></div>

          {/* About the Scheme */}
          <section className="mb-14">
            <h3 className="text-2xl font-extrabold text-navy-blue mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>📋</span> About the Scheme
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
              <li className="bg-orange/20 rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">💡</span>
                <span><span className="font-bold text-orange">Equity Capital</span> to help startups scale faster without immediate repayment pressure.</span>
              </li>
              <li className="bg-navy-blue/20 rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">💸</span>
                <span><span className="font-bold text-navy-blue">Debt Funding</span> to provide working capital flexibility and financial discipline.</span>
              </li>
            </ul>
            <p className="mt-4 text-navy-blue text-lg">This dual-structured support ensures that visionary founders can focus on innovation, growth, and execution without the constant stress of fundraising.</p>
          </section>

          <div className="border-t border-soft-gray my-10"></div>

          {/* Who Can Apply */}
          <section className="mb-14">
            <h3 className="text-2xl font-extrabold text-orange mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>📝</span> Who Can Apply
            </h3>
            <ul className="list-disc list-inside space-y-3 text-navy-blue text-lg">
              <li>Early-stage and growth-stage startups with scalable business models</li>
              <li>Entrepreneurs with disruptive ideas across sectors such as <span className="font-semibold text-navy-blue">Technology, Consumer, Healthcare, Fintech, Sustainability, and D2C Brands</span></li>
              <li>Companies seeking funding between <span className="font-bold text-orange">₹50 Lakhs to ₹5 Crores</span> as part of the ₹15 Cr corpus</li>
            </ul>
          </section>

          <div className="border-t border-soft-gray my-10"></div>

          {/* Key Benefits */}
          <section className="mb-14">
            <h3 className="text-2xl font-extrabold text-navy-blue mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>🎯</span> Key Benefits
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="bg-orange/20 rounded-2xl p-6 flex gap-4 items-start shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">💰</span>
                <span><span className="font-bold text-orange">Flexible Capital Structure:</span> Tailored mix of equity & debt depending on business needs</span>
              </li>
              <li className="bg-navy-blue/20 rounded-2xl p-6 flex gap-4 items-start shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">🧭</span>
                <span><span className="font-bold text-navy-blue">Mentorship & Strategic Guidance:</span> Access to Ravora’s expert advisors and industry network</span>
              </li>
              <li className="bg-orange/20 rounded-2xl p-6 flex gap-4 items-start shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">🤝</span>
                <span><span className="font-bold text-orange">Partnership Approach:</span> We don’t just fund, we co-build with you</span>
              </li>
              <li className="bg-navy-blue/20 rounded-2xl p-6 flex gap-4 items-start shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">🌍</span>
                <span><span className="font-bold text-navy-blue">Market Access:</span> Connections to investors, corporates, and growth ecosystems</span>
              </li>
              <li className="bg-orange/20 rounded-2xl p-6 flex gap-4 items-start shadow-lg hover:scale-[1.04] transition-transform">
                <span className="text-3xl">📈</span>
                <span><span className="font-bold text-orange">Long-Term Value Creation:</span> Focus on sustainability, not just short-term returns</span>
              </li>
            </ul>
          </section>

          <div className="border-t border-soft-gray my-10"></div>

          {/* Our Commitment */}
          <section className="mb-14">
            <h3 className="text-2xl font-extrabold text-orange mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>🏆</span> Our Commitment
            </h3>
            <p className="text-navy-blue text-lg">With over <span className="font-bold text-navy-blue">₹500 Cr+</span> capital already deployed, Ravora Ventures has built a legacy of backing bold ideas and turning them into successful businesses. Through this ₹15 Cr scheme, we aim to nurture the next generation of entrepreneurs who will shape India’s future economy.</p>
          </section>

          <div className="border-t border-soft-gray my-10"></div>

          {/* How to Apply */}
          <section>
            <h3 className="text-2xl font-extrabold text-navy-blue mb-3 flex items-center gap-2 uppercase tracking-wide">
              <span>📝</span> How to Apply
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-navy-blue text-lg">
              <li>Submit your pitch deck & business plan via our portal.</li>
              <li>Shortlisted startups will undergo business model validation and financial assessment.</li>
              <li>Selected ventures receive customized funding (equity, debt, or hybrid) along with mentorship.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
