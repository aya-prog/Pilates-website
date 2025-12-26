import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      duration: '/Monat',
      description: 'Perfekt zum Starten',
      features: [
        '4 Kurse pro Monat',
        'Zugang zur Community',
        'Online Videos',
        'Anfänger-freundlich',
      ],
      cta: 'button-secondary',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '69',
      duration: '/Monat',
      description: 'Unser populärstes Plan',
      features: [
        'Unbegrenzte Kurse',
        'Personalisiertes Training',
        'Nutrition-Beratung',
        'Priority Booking',
        'Exclusive Events',
        'Fitness-Tracking',
      ],
      cta: 'button-primary',
      highlighted: true,
    },
    {
      name: 'VIP',
      price: '129',
      duration: '/Monat',
      description: 'Premium Erlebnis',
      features: [
        'Alles im Premium',
        '1-on-1 Coaching',
        'Private Sessions',
        'Flexible Termine',
        'Personal Wellness Plan',
        'Spa Zugang',
        'VIP Events',
      ],
      cta: 'button-secondary',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-purple-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="heading-md text-gray-900">Transparent & Gerecht</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wähle den Plan, der am besten zu deinen Zielen passt. Kein versteckter Kostenaufwand, jederzeit kündbar.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="w-full grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white shadow-lg ring-2 ring-pink-600 scale-105'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex items-center space-x-2 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span>★</span>
                    <span>Beliebteste Wahl</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">€{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#booking"
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 block text-center ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {plan.name === 'Basic' || plan.name === 'VIP' ? 'Kostenlose Beratung' : 'Jetzt Starten'}
                </a>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fragen zu unseren Plänen?</h3>
            <p className="text-gray-600 mb-6">
              Kontaktiere uns für eine kostenlose Beratung. Wir helfen dir, den perfekten Plan für deine Ziele zu finden.
            </p>
            <a href="#booking" className="btn-primary inline-flex items-center space-x-2">
              <span>Termin vereinbaren</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
