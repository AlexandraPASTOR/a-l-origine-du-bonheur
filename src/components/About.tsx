function About () {
  return (
    <section id="apropos" className="mb-6 p-4 lg:relative lg:-top-10 md:px-10 lg:px-20 lg:mb-2">
      <h2 className="text-(--secondary-color) text-3xl font-bold mb-4 lg:mt-10">A propos</h2>

      <section className="p-4 flex gap-3 text-(--tertiary-color) px-4 md:gap-10 md:px-24 items-center lg:gap-20 lg:px-20 justify-center">
     <img src="/tatiana-david.jpg" alt="Tatiana DAVID" className="w-30 h-30 lg:w-40 lg:h-40 xl:w-50 xl:h-50"/>

        <div className="text-center lg:text-left flex flex-col gap-2 xl:w-2/3">
        <h2 className=" text-3xl font-semibold">Tatiana DAVID</h2> 
        <p className="text-sm font-semibold">Infirmière et maman de deux petits garçons nés en 2016 et 2019.</p>
        <div className="hidden lg:flex lg:flex-col">
        <p className="text-sm mb-4">Parce que devenir parent est ce qu'il y a de plus beau sur terre… et de plus compliqué à la fois! </p>
        <p className="text-sm mb-4 lg:mb-0">Passionnée depuis toujours par la maternité et particulièrement par les nouveau-nés, j'ai à cœur d'être pour vous ce petit quelque chose qui manque pour atteindre le bien-être et la sérénité dans votre parentalité.</p>
</div>
</div>
                  

        </section>

        <section className="flex flex-col lg:flex-row text-center text-(--tertiary-color) lg:gap-10 lg:justify-center">
          <div className="lg:hidden">
        <p className="text-sm mb-4">Parce que devenir parent est ce qu'il y a de plus beau sur terre… et de plus compliqué à la fois! </p>
        <p className="text-sm mb-4 md:mb-0">Passionnée depuis toujours par la maternité et particulièrement par les nouveau-nés, j'ai à cœur d'être pour vous ce petit quelque chose qui manque pour atteindre le bien-être et la sérénité dans votre parentalité.</p>
</div>

<section className="lg:grid lg:grid-cols-2 md:mt-8 lg:mt-4 xl:mt-2">
<div className="lg:flex lg:flex-col">
        <h3 className="text-(--secondary-color) font-semibold lg:text-center">Diplômes & Formations</h3>
        <ul className="text-sm list-disc list-inside text-(--text-color) marker:text-(--secondary-color)">
            <li>Diplôme d'Etat d'Infirmière — 2008</li>
            <li>Formations Ecole du Bien-Naître — 2022</li>
        </ul>
        </div>

<div className="lg:flex lg:flex-col">
        <h3 className="text-(--secondary-color) font-semibold mt-4 lg:mt-0 lg:text-center">Expériences professionnelles</h3>
        <ul className="text-sm list-disc list-inside text-(--text-color) marker:text-(--secondary-color) space-y-2">
            <li>Pédiatrie & néonatologie — 2008 à 2012 <br /> Hôpital Béclère (Clamart) puis Natecia (Lyon)</li>
            <li>Réanimation néonatale — depuis 2012 <br /> Hôpital de la Croix-Rousse (Lyon)</li>
            <li>Accompagnante périnatale — depuis 2023 <br /> au sein du Cabinet d’accompagnement périnatal et parental de Jons depuis 2024</li>
        </ul>
        </div>

</section>
        </section>
              <p className="italic text-sm mt-4 text-center md:mt-8 xl:mt-12">Une expertise forgée au contact de situations parfois difficiles, au service du lien parent-bébé.</p>
    </section>
  )
}

export default About;