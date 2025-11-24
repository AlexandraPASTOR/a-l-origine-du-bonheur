import { toast } from "react-toastify";
import Modal from "../Modal";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

function ContactModal({ open, onClose }: ContactModalProps) {
  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔑 Clé Web3Forms 
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Erreur de configuration (clé manquante).");
      return;
    }
    formData.append("access_key", accessKey);
    formData.append("from_name", "Site À l'origine du bonheur");
    formData.append("subject", "Nouveau message depuis le site");

    // On convertit en JSON
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Message envoyé avec succès !");
        form.reset();
        onClose();
      } else {
        console.error("Web3Forms error:", data);
        toast.error("Oups… une erreur est survenue lors de l’envoi.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Oups… une erreur est survenue lors de l’envoi.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-(--secondary-color) text-2xl font-bold mb-4">
          Me contacter
        </h2>
        <p className="text-sm opacity-70 mb-4">
          Laissez-moi un message, je vous répondrai au plus vite.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          {/* Champs utilisés dans le mail */}
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="p-2 border border-gray-300 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="p-2 border border-gray-300 rounded-lg"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Votre message"
            required
            className="p-2 border border-gray-300 rounded-lg resize-none"
          />

          <button
            type="submit"
            className="block mx-auto w-fit bg-(--secondary-color) font-semibold text-(--primary-color) px-6 py-2 rounded-xl active:translate-y-0.5 transition-all cursor-pointer hover:scale-110"
          >
            Envoyer
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ContactModal;
