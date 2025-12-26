import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center min-h-[600px] space-y-8">
          {/* Headline */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              <span className="text-sm font-medium text-pink-600">Willkommen zu deinem Studio</span>
            </div>
            <h1 className="heading-lg text-gray-900">
              Finde dein inneres Gleichgewicht
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Modernes Pilates Training im Einklang mit Apple Design. Entdecke Kraft, Flexibilität und innere Ruhe in unserer Oase der Bewegung.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <a href="#booking" className="btn-primary flex items-center space-x-2">
              <span>Kostenloses Probetraining</span>
              <ChevronRight size={20} />
            </a>
            <a href="#about" className="btn-outline">
              Mehr erfahren
            </a>
          </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-gray-200">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-pink-600">500+</div>
              <p className="text-sm text-gray-600">Zufriedene Mitglieder</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-pink-600">10+</div>
              <p className="text-sm text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-pink-600">20+</div>
              <p className="text-sm text-gray-600">Kurse wöchentlich</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
