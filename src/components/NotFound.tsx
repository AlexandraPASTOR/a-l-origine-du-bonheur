function NotFound() {
  return (
<section className="flex flex-col justify-center items-center text-center">
<img src="/not-found.png" alt="Page non trouvée" className="w-32 lg:w-40 h-auto mb-6" />
      <h2 className="text-(--secondary-color) text-3xl font-bold mb-4">Oups ... vous vous êtes égarés.</h2>
      <p className="text-(--tertiary-color) text-sm max-w-md leading-relaxed mb-6">Comme chaque chemin n'est pas toujours droit, celui-ci ne mène nulle part.</p>
     <a
        href="/"
        className="mt-4 bg-(--secondary-color) text-(--primary-color) px-6 py-2 rounded-xl font-semibold transition-all active:translate-y-0.5 hover:scale-105"
      >
        Retour à l’accueil
      </a>
      </section>
  );
}

export default NotFound;