import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Brauche ich Vorerfahrung für Pilates?",
    answer: "Nein, absolut nicht! Unsere Kurse sind so konzipiert, dass sowohl Anfänger als auch Fortgeschrittene auf ihrem jeweiligen Level trainieren können. Unsere Trainer helfen dir bei jeder Übung."
  },
  {
    question: "Was muss ich zum Training mitbringen?",
    answer: "Bequeme Sportkleidung und etwas zu trinken genügen. Matten und Kleingeräte stellen wir im Studio zur Verfügung. Viele trainieren in Socken (am besten Stoppersocken) oder barfuß."
  },
  {
    question: "Wie oft pro Woche ist Pilates sinnvoll?",
    answer: "Für spürbare Ergebnisse empfehlen wir 2 bis 3 Einheiten pro Woche. Aber auch eine Stunde pro Woche hilft bereits, deine Körperhaltung und Beweglichkeit zu verbessern."
  },
  {
    question: "Ist Pilates gut bei Rückenschmerzen?",
    answer: "Ja, Pilates ist hervorragend zur Prävention und Linderung von Rückenschmerzen geeignet, da es die tiefliegende Rumpfmuskulatur stärkt und die Wirbelsäule mobilisiert."
  },
  {
    question: "Bietet ihr auch Probestunden an?",
    answer: "Ja! Du kannst jederzeit ein kostenloses Probetraining über unseren 'Jetzt Buchen' Button vereinbaren, um unser Studio und die Trainer kennenzulernen."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-md text-gray-900 mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alles, was du über dein Training bei uns im Pilates Studio wissen musst.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-pink-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}