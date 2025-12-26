import { Activity, Users, Heart, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Activity,
      title: 'Ganzheitlich',
      description: 'Körper und Geist in Einklang. Unsere Kurse trainieren Kraft, Flexibilität und mentale Klarheit.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Trainiere mit gleichgesinnten Menschen in einer unterstützenden und inspirierenden Umgebung.',
    },
    {
      icon: Heart,
      title: 'Wellness-fokussiert',
      description: 'Jedes Training ist ein Schritt zu mehr Wohlbefinden und innerer Balance.',
    },
    {
      icon: Zap,
      title: 'Modern & Dynamisch',
      description: 'Klassische Pilates-Methoden mit zeitgenössischen Trainingstechniken kombiniert.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="heading-md text-gray-900">Über unser Studio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir vereinen klassisches Pilates-Training mit modernem Apple-Design-Ansatz für eine einzigartige Trainingserfahrung.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="w-full grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 rounded-3xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-300 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* About Text */}
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Unsere Philosophie</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pilates ist mehr als nur eine Trainingsmethode – es ist eine Lebenseinstellung. Mit Fokus auf bewusste Bewegung, Atemkontrolle und mentale Präsenz helfen wir unseren Mitgliedern, ihr volles Potenzial zu entfalten.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Was dich erwartet</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Studio bietet eine minimalistische, elegante Umgebung mit hochmoderner Ausrüstung. Jeder Kurs wird von zertifizierten Trainern geleitet, die individuell auf deine Bedürfnisse eingehen und dich durch deine Fitness-Reise begleiten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
