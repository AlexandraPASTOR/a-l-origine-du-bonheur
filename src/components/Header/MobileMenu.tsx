type Props = {
  open: boolean;
  close: () => void;
};

function MobileMenu({ open, close }: Props) {
  return (
    <>
    {/* Overlay derrière le menu */}
      <div
        className={`
          fixed inset-0 backdrop-blur-[2px] z-30
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={close}
      ></div>

    <nav
      className={`
        fixed top-0 right-0 h-full w-2/3 
        bg-white/90 backdrop-blur-sm shadow-xl z-40
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <ul className="flex flex-col text-center p-8 mt-10 gap-6 text-(--secondary-color) font-semibold text-xl">
        <li><a href="#accueil" onClick={close}>Accueil</a></li>
        <li><a href="#apropos" onClick={close}>À propos</a></li>
        <li><a href="#prestations" onClick={close}>Prestations</a></li>
        <li><a href="#cabinet" onClick={close}>Le cabinet</a></li>
        <li><a href="#faq" onClick={close}>FAQ</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>
    </nav>
    </>
  );
}

export default MobileMenu;