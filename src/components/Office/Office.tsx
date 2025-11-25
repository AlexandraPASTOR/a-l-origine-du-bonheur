import Reviews from "./Reviews";

function Office () {
    return (
        <section id="cabinet" className="mb-6 p-4 md:px-10 lg:px-20">
        <h2 className="text-(--secondary-color) text-3xl font-bold py-4">Le cabinet</h2>

<div className="grid lg:grid-cols-2 gap-10 items-center my-8">

  {/* Colonne texte */}
  <div className="flex flex-col gap-4 mx-auto xl:px-20">
    <p className="text-center text-sm">
      Du désir d’enfant aux premiers mois après la naissance, la période
      périnatale transforme profondément la femme, le co-parent et le couple.
    </p>

    <p className="text-center text-sm">
      C’est un temps de changements, d’émotions intenses et parfois de
      questionnements où prendre soin de soi et de son bébé devient
      essentiel pour vivre cette étape en confiance.
    </p>

    <p className="text-center text-sm">
      C’est pourquoi <strong className="italic text-(--secondary-color)">
        À l’origine du bonheur
      </strong> s’entoure de professionnelles bienveillantes, réunies au sein du
      cabinet d’accompagnement périnatal et parental de Jons.
    </p>
  </div>

  {/* Colonne images */}
  <div className="flex justify-center gap-4 my-4 lg:my-0">
    <img
      src="/cabinet-1.jpeg"
      alt="espace soin"
      className="rounded-xl w-1/2 xl:w-72 object-cover h-auto"
    />
    <img
      src="/cabinet-2.jpeg"
      alt="espace détente"
      className="rounded-xl w-1/2 xl:w-72 object-cover h-auto"
    />
  </div>

</div>


{/* Encadré adresse */}
<div className="mt-8 lg:grid gap-10 lg:grid-cols-2 items-center">
      <div className="mx-auto w-3/4 md:w-2/3 lg:w-full text-center p-4 rounded-2xl shadow-[3px_3px_6px_rgba(0,0,0,0.32)] border-4 border-(--block-color)/50 xl:px-12">
        <h3 className="text-lg font-semibold text-(--secondary-color) mb-4">
          Où suis-je située ?
        </h3>

        <p className="text-sm font-semibold">Cabinet d’accompagnement périnatal et parental</p>
        <p className="text-sm">270 chemin de l’atelier</p>
        <p className="text-sm">69330 Jons</p>

<p className="text-xs leading-relaxed mt-4">
    Accessible principalement en voiture, le cabinet dispose d’un <strong>parking gratuit</strong> juste devant les locaux,
    pour un accès facile avec bébé. </p>
<p className="text-xs leading-relaxed mt-4">L’arrêt du bus 32 se trouve juste en face, mais ce dernier ne passe malheureusement que très rarement dans la journée.
</p>

  
  <img
    src="/cabinet-exterieur.jpg"
    alt="Vue du cabinet de l’extérieur et du parking"
    className="rounded-xl mt-4 shadow-md w-1/2 xl:w-72 h-auto mx-auto object-cover"
  />
</div>


{/*Avis clients */}
<Reviews />
</div>
        </section>
    )
}

export default Office;