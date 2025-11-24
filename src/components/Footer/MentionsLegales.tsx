import IllustrationBanner from "../IllustrationBanner";

function MentionsLegales() {
  return (
    <>
    <IllustrationBanner/>
    <main className="min-h-screen mt-10 pb-8 px-4 md:px-10 lg:px-20">
      <section className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-[3px_3px_10px_rgba(0,0,0,0.15)] p-6 md:p-10">
        
        <h1 className="text-(--secondary-color) text-4xl font-bold mb-10 text-center">
          Mentions légales
        </h1>

        {/* ÉDITEUR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Éditeur du site
          </h2>
          <p className="text-sm leading-relaxed">
            <strong>À l&apos;origine du bonheur – Accompagnement périnatal et parental</strong><br />
            Représenté par : <strong>Tatiana DAVID</strong><br />
            Adresse : 270 chemin de l&apos;atelier, 69330 Jons, France<br />
            Téléphone : <a href="tel:+33758603034" className="underline">07 58 60 30 34</a><br />
            E-mail :{" "}
            <a
              href="mailto:contact@aloriginedubonheur.fr"
              className="text-(--secondary-color) underline"
            >
              contact@aloriginedubonheur.fr
            </a><br />
            Statut : Micro-entreprise<br />
            SIRET : <span className="italic">à compléter</span>
          </p>
        </section>

        {/* NOM DE DOMAINE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Nom de domaine
          </h2>
          <p className="text-sm leading-relaxed">
            Nom de domaine : <span className="italic">à compléter (ex. : www.aloriginedubonheur.fr)</span>
          </p>
        </section>

        {/* HÉBERGEMENT */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Hébergement
          </h2>
          <p className="text-sm leading-relaxed">
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Avenue #4133<br />
            Covina, CA 91723<br />
            Site :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="text-(--secondary-color) underline"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        {/* PROPRIÉTÉ INTELLECTUELLE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Propriété intellectuelle
          </h2>
          <p className="text-sm leading-relaxed">
            L’ensemble du contenu présent sur ce site (textes, images, photographies,
            graphismes, logos…) est la propriété exclusive de{" "}
            <strong>À l&apos;origine du bonheur</strong>, sauf mention contraire.
            <br />
            Toute reproduction ou utilisation non autorisée est strictement interdite.
          </p>
        </section>

        {/* RESPONSABILITÉ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Responsabilité
          </h2>
          <p className="text-sm leading-relaxed">
            Les informations présentées sur ce site ont une vocation informative.
            Elles ne remplacent en aucun cas un avis ou un suivi médical réalisé par
            un professionnel de santé qualifié.
          </p>
        </section>

        {/* DONNÉES PERSONNELLES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Données personnelles
          </h2>
          <p className="text-sm leading-relaxed">
            Les données collectées via le formulaire de contact (nom, email,
            message) sont utilisées exclusivement pour répondre aux demandes des
            visiteurs.
            <br />
            Pour plus d’informations, consultez la page{" "}
            <a
              href="/politique-de-confidentialite"
              className="text-(--secondary-color) underline"
            >
              Politique de confidentialité
            </a>.
          </p>
        </section>

        {/* LIENS EXTERNES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Liens externes
          </h2>
          <p className="text-sm leading-relaxed">
            Le site peut contenir des liens vers des sites externes. À l’origine du
            bonheur n’exerce aucun contrôle sur leur contenu et décline toute
            responsabilité les concernant.
          </p>
        </section>

        {/* MÉDIATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Médiation de la consommation
          </h2>
          <p className="text-sm leading-relaxed">
            Conformément à l’article L612-1 du Code de la consommation, tout
            consommateur peut recourir gratuitement à un médiateur.
            <br />
            Médiateur recommandé :
            <br />
            <strong>CNPM Médiation Consommation</strong><br />
            Site :{" "}
            <a
              href="https://cnpm-mediation-consommation.eu"
              target="_blank"
              rel="noreferrer"
              className="text-(--secondary-color) underline"
            >
              https://cnpm-mediation-consommation.eu
            </a>
          </p>
        </section>

        {/* CRÉDITS */}
        <section>
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            Crédits
          </h2>
          <p className="text-sm leading-relaxed">
            Textes : Tatiana DAVID<br />
            Photographies : À l&apos;origine du bonheur<br />
            Autres visuels : libres de droits ou utilisés avec autorisation.
          </p>
        </section>

      </section>
    </main>
    </>
  );
}

export default MentionsLegales;
