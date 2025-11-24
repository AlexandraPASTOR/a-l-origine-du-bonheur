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
  const data = new FormData(form);

  try {
    await fetch("https://formsubmit.co/ajax/contact@aloriginedubonheur.fr", {
      method: "POST",
      body: data,
    });

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

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-4 text-left"
        >

{/* Champs cachés pour FormSubmit */}
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_subject" value="Nouveau message depuis le site" />
<input type="hidden" name="_next" value="https://votre-site.fr/merci" />

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
          ></textarea>

          <button
            type="submit"
            className="block mx-auto w-fit bg-(--secondary-color) font-semibold text-(--primary-color) px-6 py-2 rounded-xl active:translate-y-0.5 transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ContactModal;