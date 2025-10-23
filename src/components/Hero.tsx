import heroImage from "@/assets/hero-japan.jpg";
import binoLogo from "@/assets/bino-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="日本商务研修之旅" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-amber-500/85 to-red-600/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-8">
            <img src={binoLogo} alt="Bino EduTour" className="h-28 md:h-36 w-auto" />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight whitespace-nowrap">
              稻盛之道·经营哲学
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
              MAG Holdings Berhad 日本商务研修团
            </h2>
          </div>

          {/* Journey Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/95">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium">8天7夜</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/60" />
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg font-medium">关西深度游</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/60" />
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-lg font-medium">7人精品团</span>
            </div>
          </div>

          {/* Destinations */}
          <div className="pt-4">
            <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
              大阪 · 奈良 · 京都 · 名古屋 · 神户
            </p>
          </div>

          {/* Date */}
          <div className="pt-6 space-y-2">
            <p className="text-lg text-white/80">日期</p>
            <p className="text-2xl font-semibold text-white">
              2025年10月27日 - 11月3日
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;