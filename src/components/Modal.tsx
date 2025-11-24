type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {

 if (!open) return null;

    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-(--primary-color) rounded-xl p-6 max-w-lg w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-(--secondary-color) text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;