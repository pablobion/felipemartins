"use client";

import Link from 'next/link';

export default function Header() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 bg-[var(--bg-secondary)] z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Nome */}
          <Link href="/" className="flex flex-col md:flex-row md:items-center">
            <span className="text-base md:text-xl font-bold text-white">Dr. Felipe Martins</span>
            <span className="hidden md:inline text-white mx-2">|</span>
            <span className="text-sm md:text-xl text-white">CRP 12-28726</span>
          </Link>

          {/* Menu de Navegação */}
          <nav className="flex items-center space-x-4">
            <a 
              href="#contact-section" 
              onClick={scrollToContact}
              className="text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </a>
            <Link 
              href="/agendar" 
              className="bg-[var(--bg-accent)] text-white px-4 py-2 rounded-full font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              Agendar Consulta
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 