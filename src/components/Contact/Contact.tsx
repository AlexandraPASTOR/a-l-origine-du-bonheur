import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import ContactModal from "./ContactModal";

function Contact() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    return (
        <section id="contact" className="mb-2 p-4 md:px-10 lg:px-20">
        <h2 className="text-(--secondary-color) text-3xl font-bold py-4">Me contacter</h2>

        <div className="text-center font-semibold flex flex-col mt-8 gap-2">
        <h3>Une question, un besoin, une envie d'échanger ?</h3>
        <p className="text-sm">Je serais heureuse de vous répondre</p>

         <div className="w-2/3 mx-auto my-4 border-t border-gray-300"></div>
         </div>

{/* Coordonnées */}
      <div className="flex flex-col gap-2 mx-auto w-fit text-left text-sm">
        <p className="flex items-center gap-3">
          <span className="text-(--secondary-color) text-xl"><IoLocationOutline /></span>
          270 chemin de l’atelier, 69330 Jons
        </p>

        <p className="flex items-center gap-3">
          <span className="text-(--secondary-color) text-xl"><IoMailOutline /></span>
          contact@aloriginedubonheur.fr
        </p>

        <p className="flex items-center gap-3">
          <span className="text-(--secondary-color) text-xl"><MdPhone /></span>
          07.58.60.30.34
        </p>
      </div>

{/* Bouton */}
<button type="button" onClick={() => setIsFormOpen(true)}
        className="block mx-auto w-fit mt-8 bg-(--secondary-color)/90 font-semibold text-(--primary-color) px-6 py-2 rounded-xl shadow-[3px_3px_6px_rgba(0,0,0,0.32)] active:translate-y-0.5 transition-all cursor-pointer hover:scale-110"
      >
        Me contacter
      </button>

        <ContactModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
           
<p className="text-sm mt-6 text-center px-4">
        Au plaisir de vous accompagner dans cette belle aventure !
      </p>

        </section>
    )
}

export default Contact;