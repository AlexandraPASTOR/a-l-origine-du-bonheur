import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SmoothScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("/#")) return;

      e.preventDefault();

      const targetId = href.replace("/#", "");

      // Si déjà sur la home
      if (location.pathname === "/") {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      // Si on vient d'une autre page : on navigue vers / puis scroll
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [location.pathname, navigate]);

  return null;
}
