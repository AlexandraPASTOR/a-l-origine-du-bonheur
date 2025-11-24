import { useState, useEffect } from 'react';
import MenuBurger from './MenuBurger';
import MobileMenu from './MobileMenu';

function Header() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const showBackground = hasScrolled && !open;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative md:h-[55vh] lg:h-[60vh]" id="accueil">
      {/* Burger */}
      <section
        className={`fixed top-2 right-6 z-50 p-2 md:hidden
        ${showBackground ? "bg-white/70 backdrop-blur-sm shadow-md rounded-full" : "bg-transparent"}`}
      >
        <MenuBurger open={open} onClick={() => setOpen(!open)} />
      </section>

      {/* Menu Mobile */}
      <MobileMenu open={open} close={() => setOpen(false)} />

      {/* Menu Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full p-4 justify-end z-20">
        <div
          className={`flex gap-6 p-2 rounded-full
          ${showBackground ? "bg-white/70 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
        >
          <a href="/#accueil" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            Accueil
          </a>
          <a href="/#apropos" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            A propos
          </a>
          <a href="/#prestations" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            Prestations
          </a>
          <a href="/#cabinet" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            Le cabinet
          </a>
          <a href="/#faq" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            FAQ
          </a>
          <a href="/#contact" className="text-(--secondary-color) font-semibold hover:text-(--tertiary-color) transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover md:object-top xl:top-[-10%] z-0"
      >
        <source src="/water-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Contenu textuel */}
      <section className="text-(--secondary-color) text-center z-10 relative lg:flex lg:flex-col lg:items-center lg:w-1/3 xl:w-1/4 lg:justify-center">
        <img src="/logo.png" alt="Logo" className="w-30 h-30 mx-auto md:mx-0 md:w-40 md:h-40" />
        <h1 className="text-4xl font-bold p-6 pb-4 md:mt-20 lg:mt-4 lg:p-4 xl:px-8">
          Accompagnement périnatal & parental
        </h1>
        <p className="text-(--tertiary-color) text-sm font-semibold pb-2 mx-6 lg:mx-6">
          Parce que chaque début de vie mérite douceur et sérénité.
        </p>
      </section>
    </header>
  );
}

export default Header;
