import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Unternehmen: [
      { name: 'Über uns', href: '#about' },
      { name: 'Kurse', href: '#pricing' },
      { name: 'Trainer', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Ressourcen: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Fitness Guide', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Kontakt', href: '#' },
    ],
    Rechtliches: [
      { name: 'Datenschutz', href: '#' },
      { name: 'Nutzungsbedingungen', href: '#' },
      { name: 'Impressum', href: '#' },
      { name: 'Sitemap', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@pilatesstudio.de', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Bereich mit PULSIERENDEM LOGO */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                {/* Glow Effekt im Hintergrund */}
                <div className="absolute inset-0 bg-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Das pulsierende P (wie in der Navbar) */}
                <div className="relative w-11 h-11 bg-gradient-to-br from-pink-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-logo-glow transition-transform duration-500 group-hover:rotate-[360deg]">
                  <span className="text-white font-bold text-xl tracking-tighter">P</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight group-hover:text-pink-500 transition-colors">
                  Pulse
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold leading-none mt-1">
                  Studio
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Dein moderness Pilates Studio für Kraft, Flexibilität und innere Balance. Wir begleiten dich auf deinem Weg zu einem gesunden Körper.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Spalten */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kontakt Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-snug">
                  Pulse Studio<br />
                  Musterstraße 42<br />
                  10115 Berlin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-500 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                  +49 (0) 123 456789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-500 flex-shrink-0" />
                <a href="mailto:info@pilatesstudio.de" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                  info@pulsestudio.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-gray-500 text-xs">
          <p>&copy; {currentYear} Pilates Studio. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-pink-600">♥</span> für dein Wohlbefinden
          </p>
        </div>
      </div>
    </footer>
  );
}