'use client';

import React, { useState, useEffect } from 'react';

interface IconProps {
  src: string;
  className: string;
}

// Component for SVG icons for reusability
const Icon: React.FC<IconProps> = ({ src, className }) => (
  <img src={src} alt="icon" className={className} />
);

// Main page component
export default function CafePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pageTitle = 'Kavárna U Kódu - Nejlepší káva v Praze';
    document.title = pageTitle;

    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="#111827"></rect>
        <text y="68" x="50" font-size="50" fill="#E5E7EB" text-anchor="middle" font-family="monospace">&lt;/&gt;</text>
      </svg>
    `;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;
    
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;

  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#o-nas', label: 'O nás' },
    { href: '#nabidka', label: 'Nabídka' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-[#111827] text-gray-300 font-sans antialiased min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-[#111827] bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">Kavárna <span className="font-mono text-cyan-400">U Kódu</span></a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" className="h-6 w-6 invert" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#111827] z-30 flex flex-col items-center justify-center md:hidden">
          <button onClick={closeMenu} className="absolute top-6 right-6" aria-label="Close menu">
            <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" className="h-7 w-7 invert" />
          </button>
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="text-2xl text-gray-300 hover:text-white transition-colors">{link.label}</a>
            ))}
          </nav>
        </div>
      )}

      <main className="container mx-auto px-6 pt-24 md:pt-32">
        {/* Hero Section */}
        <section id="hero" className="min-h-[60vh] flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Testovací Kavárna <span className="block text-cyan-400 font-mono mt-2">"U Kódu"</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-400">Nejlepší káva pro vaše bugy.</p>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kdo jsme?</h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou výběrovou kávu, ale i klidné a inspirativní prostředí pro práci či setkávání. Naší specialitou je <span className="text-cyan-400 font-medium">„Debugging Doppio“</span>, které zaručeně nastartuje váš den.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="nabidka" className="py-20 md:py-32 bg-[#1F2937] rounded-lg -mx-6 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Co nabízíme</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-[#111827] rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Výběrová Káva</h3>
                <p className="text-gray-400">Od espressa po filtrovanou kávu. Každý šálek je připraven s maximální péčí pro vaši dokonalou chuť.</p>
              </div>
              <div className="p-6 bg-[#111827] rounded-lg">
                 <h3 className="text-xl font-bold text-white mb-3">Prostor pro práci</h3>
                 <p className="text-gray-400">Stabilní Wi-Fi a dostatek zásuvek. Ideální místo pro soustředěnou práci mimo kancelář.</p>
              </div>
              <div className="p-6 bg-[#111827] rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Místo pro setkání</h3>
                <p className="text-gray-400">Příjemná atmosféra pro neformální schůzky s kolegy nebo přáteli. Inspirujte se v našem prostředí.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Navštivte nás</h2>
            <div className="space-y-4 text-lg md:text-xl text-gray-300">
              <p>
                <a href="mailto:test@cafe.com" className="hover:text-cyan-400 transition-colors">test@cafe.com</a>
              </p>
              <p>
                 <a href="tel:+420777123456" className="hover:text-cyan-400 transition-colors">+420 777 123 456</a>
              </p>
              <p>
                Bugfixová 1<br/>110 00 Praha 1
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1F2937]">
         <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kavárna U Kódu. Všechna práva vyhrazena.</p>
          <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-sm mt-2 inline-block hover:text-gray-300 transition-colors">
            Vytvořeno s láskou od DigitalFusion
          </a>
        </div>
      </footer>
    </div>
  );
}
