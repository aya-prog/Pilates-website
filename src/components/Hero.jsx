import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* 1. Das Hintergrundbild mit Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/11036671/pexels-photo-11036671.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dunkle Schicht, damit der weiße Text lesbar bleibt */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Headline Bereich */}
          <div className="text-center space-y-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-pink-600/20 border border-pink-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-pink-100">Willkommen zu deinem Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Finde dein inneres <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                Gleichgewicht
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Modernes Pilates Training im Einklang mit Ästhetik und Kraft. 
              Entdecke deine Flexibilität in unserer Oase der Bewegung.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <a href="#booking" className="btn-primary flex items-center space-x-2 shadow-xl shadow-pink-900/20">
              <span>Kostenloses Probetraining</span>
              <ChevronRight size={20} />
            </a>
            <a href="#about" className="px-8 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all">
              Mehr erfahren
            </a>
          </div>

          {/* Statistik Bereich am Ende */}
          <div className="grid grid-cols-3 gap-4 sm:gap-12 pt-16 border-t border-white/10 w-full max-w-4xl">
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-pink-200">Mitglieder</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">10+</div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-pink-200">Jahre</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">20+</div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-pink-200">Kurse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
