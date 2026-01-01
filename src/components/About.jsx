import { Activity, Users, Heart, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: 'Ganzheitlich',
      description: 'Körper und Geist in Einklang. Unsere Kurse trainieren Kraft, Flexibilität und mentale Klarheit.',
      icon: Activity,
      animationClass: 'animate-breathe',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Community',
      description: 'Trainiere mit gleichgesinnten Menschen in einer unterstützenden und inspirierenden Umgebung.',
      icon: Users,
      animationClass: 'animate-sway',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Wellness-fokussiert',
      description: 'Jedes Training ist ein Schritt zu mehr Wohlbefinden und innerer Balance.',
      icon: Heart,
      animationClass: 'animate-heartbeat',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      title: 'Modern & Dynamisch',
      description: 'Klassische Pilates-Methoden mit zeitgenössischen Trainingstechniken kombiniert.',
      icon: Zap,
      animationClass: 'group-hover:animate-energy',
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-16">
          
          {/* 1. Header Bereich */}
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Über unser Studio</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wir vereinen klassisches Pilates-Training mit modernem Apple-Design-Ansatz für eine einzigartige Trainingserfahrung.
            </p>
          </div>

          {/* 2. Animiertes Feature-Grid */}
          <div className="w-full grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-pink-100"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                    <IconComponent 
                      size={28} 
                      className={feature.animationClass} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 3. Philosophie & Erwartungen (Deine Texte) */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Unsere Philosophie</h3>
              <p className="text-gray-600 leading-relaxed">
                Pilates ist mehr als nur eine Trainingsmethode – es ist eine Lebenseinstellung. Mit Fokus auf bewusste Bewegung, Atemkontrolle und mentale Präsenz helfen wir unseren Mitgliedern, ihr volles Potenzial zu entfalten.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Was dich erwartet</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser Studio bietet eine minimalistische, elegante Umgebung mit hochmoderner Ausrüstung. Jeder Kurs wird von zertifizierten Trainern geleitet, die individuell auf deine Bedürfnisse eingehen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
