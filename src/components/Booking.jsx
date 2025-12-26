import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedClass: 'morning-flow',
    selectedDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const classes = [
    { id: 'morning-flow', name: 'Morning Flow', time: '08:00 - 09:00', level: 'Anfänger' },
    { id: 'power-hour', name: 'Power Hour', time: '10:00 - 11:00', level: 'Mittelstufe' },
    { id: 'evening-stretch', name: 'Evening Stretch', time: '18:00 - 19:00', level: 'Alle Level' },
    { id: 'core-strength', name: 'Core Strength', time: '19:30 - 20:30', level: 'Fortgeschritten' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedClass: 'morning-flow',
        selectedDate: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Classes */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="heading-md text-gray-900">Verfügbare Kurse</h2>
              <p className="text-gray-600">Wähle deinen perfekten Kurs und buche jetzt</p>
            </div>

            <div className="space-y-4">
              {classes.map((cls) => (
                <label
                  key={cls.id}
                  className="flex items-center p-4 rounded-2xl border-2 border-gray-200 hover:border-pink-600 cursor-pointer transition-all duration-300"
                >
                  <input
                    type="radio"
                    name="selectedClass"
                    value={cls.id}
                    checked={formData.selectedClass === cls.id}
                    onChange={handleChange}
                    className="w-5 h-5 accent-pink-600"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-gray-900">{cls.name}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{cls.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{cls.level}</span>
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div>
            <div className="bg-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Deine Buchung</h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Buchung bestätigt!</h4>
                  <p className="text-gray-600 text-sm">
                    Wir haben deine Buchung erhalten. Eine Bestätigungsemail wird in Kürze versendet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dein Name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="deine@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 (0) 123 456789"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-colors"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Datum</label>
                    <input
                      type="date"
                      name="selectedDate"
                      value={formData.selectedDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Nachricht (optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Teile uns etwas über dich mit..."
                      rows="3"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary font-medium"
                  >
                    Buchen & Bestätigen
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Durch das Buchen akzeptierst du unsere Nutzungsbedingungen
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telefon</p>
                  <p className="font-medium text-gray-900">+49 (0) 123 456789</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">info@pilatesstudio.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
