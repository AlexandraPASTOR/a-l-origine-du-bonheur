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

    // Convert FormData → simple object
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/pastoralex@free.fr",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Erreur serveur");

      toast.success("Message envoyé avec succès !");
      form.reset();
      onClose();
    } catch (error) {
      toast.error("Oups… Une erreur est survenue.");
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          {/* Options FormSubmit envoyées aussi en AJAX */}
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message depuis le site"
          />

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
