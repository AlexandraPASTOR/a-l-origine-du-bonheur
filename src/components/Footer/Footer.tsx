import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-(--secondary-color) text-(--primary-color) text-center py-8 px-4 mt-8">
      
      {/* Instagram */}
      <p className="font-semibold mb-2">Suivez-moi sur instagram :</p>
      <a
        href="https://www.instagram.com/a_l_origine_du_bonheur/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-(--primary-color) text-3xl inline-block"
      >
        <AiFillInstagram />
      </a>

      {/* Copyright */}
      <p className="text-sm my-2">
        © {new Date().getFullYear()} — À l’origine du bonheur
      </p>

      {/* Mentions */}
      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
        <Link to="/mentions-legales">Mentions légales</Link>
        <span>•</span>
        <Link to="/politique-confidentialite">Politique de confidentialité</Link>
      </div>

    </footer>
  );
}

export default Footer;
