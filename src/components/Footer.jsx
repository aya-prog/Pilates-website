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
      { name: 'FAQ', href: '#' },
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
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-lg">Pilates Studio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dein moderner Pilates Studio für Kraft, Flexibilität und innere Balance.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-bold text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-600 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Pilates Studio<br />
                  Musterstraße 42<br />
                  10115 Berlin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-600 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-400 hover:text-pilates-pink transition-colors text-sm">
                  +49 (0) 123 456789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-pilates-pink flex-shrink-0" />
                <a href="mailto:info@pilatesstudio.de" className="text-gray-400 hover:text-pink-600 transition-colors text-sm">
                  info@pilatesstudio.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-gray-400 text-sm">
          <p>&copy; {currentYear} Pilates Studio. Alle Rechte vorbehalten.</p>
          <p className="text-center">
            Designed with <span className="text-pink-600">♡</span> für deine Wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
