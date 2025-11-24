import { useState, useEffect } from "react";
import Modal from "../Modal";
import ModalDetails from "./ModalDetails";

type Service = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  option?: string;
   details: {
    citation?: string;
    fullDescription: string;
    photos?: string[];
  };
};

function ServiceCard({
  image,
  title,
  subtitle,
  description,
  price,
  option,
  details,
}: Service) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      {/* CARTE */}
<section className="flex flex-col bg-(--primary-color) mx-auto w-5/6 rounded-2xl shadow-[3px_3px_9px_rgba(0,0,0,0.32)] border-4 border-(--block-color)/50 h-full mb-2">
  <img
    src={image}
    alt={title}
    className="w-full h-32 object-cover rounded-t-xl ring-4 ring-(--block-color)/50"
  />

  <div className="flex flex-col flex-1 p-4 items-center text-center">
    {/* BLOC TITRE + SOUS-TITRE AVEC HAUTEUR MINI FIXE */}
    <div className="min-h-[60px] flex flex-col justify-center">
      <h3 className="text-(--secondary-color) text-xl font-semibold">
        {title}
      </h3>

      {subtitle && (
        <h4 className="text-(--secondary-color) font-semibold opacity-70">
          {subtitle}
        </h4>
      )}
    </div>

    {/* DESCRIPTION */}
    <p className="text-sm my-4">
      {description}
    </p>

    {/* FOOTER : TARIF + BOUTON, COLLÉ EN BAS */}
    <div className="mt-auto">
      <p className="text-(--secondary-color) font-bold">
        Tarif : {price}
      </p>

      {option && (
        <p className="text-(--secondary-color) text-xs font-semibold">
          {option}
        </p>
      )}

      <button
        className="text-(--secondary-color) text-sm mt-3 italic"
        onClick={() => setIsModalOpen(true)}
      >
        En savoir plus
      </button>
    </div>
  </div>
</section>



      {/* MODAL */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center">
          <h3 className="text-(--secondary-color) text-xl font-semibold text-center">
            {title}
          </h3>

          {subtitle && (
            <h4 className="text-(--secondary-color) font-semibold text-center opacity-70">
              {subtitle}
            </h4>
          )}

          <div className="w-2/3 mx-auto my-4 border-t border-gray-300"></div>
        </div>
        <ModalDetails details={details} />
      </Modal>
    </>
  );
}
export default ServiceCard;