import IllustrationBanner from "../IllustrationBanner";

function PolitiqueConfidentialite() {
  return (
    <>
    <IllustrationBanner/>
    <main className="min-h-screen mt-10 pb-8 px-4 md:px-10 lg:px-20">
      <section className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-[3px_3px_10px_rgba(0,0,0,0.15)] p-6 md:p-10">

        <h1 className="text-(--secondary-color) text-4xl font-bold mb-10 text-center">
          Politique de confidentialité
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <p className="text-sm leading-relaxed">
            Cette politique de confidentialité explique comment vos données personnelles 
            sont collectées, utilisées et protégées lorsque vous utilisez le site{" "}
            <strong>À l&apos;origine du bonheur</strong>.
          </p>
        </section>

        {/* RESPONSABLE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            1. Responsable du traitement
          </h2>
          <p className="text-sm leading-relaxed">
            <strong>À l&apos;origine du bonheur – Tatiana DAVID</strong>
            <br />
            Adresse : 270 chemin de l&apos;atelier, 69330 Jons, France
            <br />
            E-mail :{" "}
            <a
              href="mailto:contact@aloriginedubonheur.fr"
              className="text-(--secondary-color) underline"
            >
              contact@aloriginedubonheur.fr
            </a>
          </p>
        </section>

        {/* DONNÉES COLLECTÉES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            2. Données personnelles collectées
          </h2>
          <p className="text-sm leading-relaxed">
            Le site ne recueille que les données strictement nécessaires :
          </p>
          <ul className="list-disc ml-6 text-sm leading-relaxed mt-2">
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Message transmis via le formulaire de contact</li>
          </ul>
          <p className="text-sm leading-relaxed mt-2">
            Ces données sont utilisées uniquement afin de répondre à votre demande.
          </p>
        </section>

        {/* BASE LEGALE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            3. Base légale
          </h2>
          <p className="text-sm leading-relaxed">
            Le traitement des données personnelles repose sur :
          </p>
          <ul className="list-disc ml-6 text-sm leading-relaxed mt-2">
            <li>L&apos;intérêt légitime (gestion du site et sécurité)</li>
            <li>L&apos;exécution d&apos;une demande (réponse au formulaire de contact)</li>
          </ul>
        </section>

        {/* CONSERVATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            4. Durée de conservation
          </h2>
          <p className="text-sm leading-relaxed">
            Les messages envoyés via le formulaire sont conservés pendant une durée 
            maximale de <strong>12 mois</strong>.
            <br />
            Aucune donnée n&apos;est utilisée à des fins commerciales.
          </p>
        </section>

        {/* PARTAGE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            5. Partage des données
          </h2>
          <p className="text-sm leading-relaxed">
            Les données collectées ne sont :
          </p>
          <ul className="list-disc ml-6 text-sm leading-relaxed mt-2">
            <li>ni vendues</li>
            <li>ni louées</li>
            <li>ni transférées à des tiers</li>
          </ul>
        </section>

        {/* SÉCURITÉ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            6. Sécurité des données
          </h2>
          <p className="text-sm leading-relaxed">
            Le site utilise le protocole HTTPS et est hébergé sur{" "}
            <strong>Vercel</strong>, garantissant une infrastructure sécurisée
            (pare-feu, isolation des environnements…).
          </p>
        </section>

        {/* DROITS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            7. Vos droits
          </h2>
          <p className="text-sm leading-relaxed">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc ml-6 text-sm leading-relaxed mt-2">
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit d&apos;effacement</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
          </ul>

          <p className="text-sm leading-relaxed mt-2">
            Pour exercer vos droits, contactez :{" "}
            <a
              href="mailto:contact@aloriginedubonheur.fr"
              className="text-(--secondary-color) underline"
            >
              contact@aloriginedubonheur.fr
            </a>
          </p>
        </section>

        {/* COOKIES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            8. Cookies
          </h2>
          <p className="text-sm leading-relaxed">
            Le site n&apos;utilise <strong>aucun cookie de suivi</strong> ni aucun traceur 
            publicitaire.
            <br />
            Seuls des cookies techniques strictement nécessaires au fonctionnement 
            du site peuvent être utilisés.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-2xl font-semibold text-(--secondary-color) mb-3">
            9. Contact
          </h2>
          <p className="text-sm leading-relaxed">
            Pour toute question relative à cette politique de confidentialité, vous
            pouvez écrire à :{" "}
            <a
              href="mailto:contact@aloriginedubonheur.fr"
              className="text-(--secondary-color) underline"
            >
              contact@aloriginedubonheur.fr
            </a>
          </p>
        </section>

      </section>
    </main>
    </>
  );
}

export default PolitiqueConfidentialite;
