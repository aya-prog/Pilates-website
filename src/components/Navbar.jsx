import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Buchen', href: '#booking' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="section-container">
        {/* Navbar-Höhe auf h-20 für den eleganten Pulse-Look */}
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo Bereich - Pulse Studio */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* Glow-Effekt */}
              <div className="absolute inset-0 bg-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Animiertes P (passt perfekt zu Pulse) */}
              <div className="relative w-11 h-11 bg-gradient-to-br from-pink-600 to-purple-400 rounded-full flex items-center justify-center shadow-md animate-logo-glow transition-transform duration-500 group-hover:rotate-[360deg]">
                <span className="text-white font-bold text-xl tracking-tighter">P</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-none tracking-tight group-hover:text-pink-600 transition-colors">
                Pulse
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold leading-none mt-1">
                Studio
              </span>
            </div>
          </div>

          {/* 2. Desktop Menü */}
          <div className="hidden md:flex items-center bg-gray-50/80 rounded-full px-1.5 py-1 border border-gray-100/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 rounded-full text-gray-600 hover:text-pink-600 font-medium text-sm transition-all duration-300 group/link"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/link:opacity-100 group-hover/link:shadow-sm transition-all duration-300 scale-90 group-hover/link:scale-100"></div>
              </a>
            ))}
          </div>

          {/* 3. CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#booking" 
              className="btn-primary text-sm px-7 py-2.5 shadow-pink-200 hover:shadow-pink-300 hover:-translate-y-0.5 transition-all"
            >
              Jetzt Buchen
            </a>
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a 
                href="#booking" 
                className="btn-primary w-full block text-center py-3"
                onClick={() => setIsOpen(false)}
              >
                Jetzt Buchen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}