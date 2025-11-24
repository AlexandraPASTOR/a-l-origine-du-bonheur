type Props = {
  open: boolean;
  onClick: () => void;
};

function MenuBurger({ open, onClick }: Props) {
  return (
    <button
      aria-label="Menu"
      onClick={onClick}
      className="flex flex-col gap-2 md:hidden"
    >
      <span
        className={`w-10 h-1 bg-(--secondary-color) rounded transition ${
          open ? "rotate-45 translate-y-4" : ""
        }`}
      ></span>
      <span
        className={`w-10 h-1 bg-(--secondary-color) rounded transition ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-10 h-1 bg-(--secondary-color) rounded transition ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  )
}

export default MenuBurger;