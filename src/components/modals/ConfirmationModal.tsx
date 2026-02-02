const ConfirmationModal = ({
  onClose,
  setFormIsSent,
}: {
  onClose: () => void;
  setFormIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-84.5 mx-4 shadow-xl flex flex-col overflow-hidden"
      >
        <div className="p-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus w-7 h-7 text-amber-600"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </div>
          <h2 className="font-playfair text-lg font-semibold text-[#111111]">
            Anything else?
          </h2>
          <p className="text-sm text-neutral-500 text-center">
            You can add more items before we send your request
          </p>
        </div>
        <div className="p-4 bg-white border-t border-neutral-100">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setFormIsSent(false);
                onClose();
              }}
              className="cursor-pointer whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 w-full py-3.5 bg-[#111111] hover:bg-black text-white font-medium rounded-xl flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span>Yes, add more</span>
            </button>
            <button
              onClick={() => {
                setFormIsSent(false);
                onClose();
              }}
              className="cursor-pointer whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 sm:mt-0 w-full py-3.5 bg-[#C6A667] hover:brightness-95 text-[#111111] font-medium rounded-xl border-0 flex items-center justify-center gap-2 mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-send w-4 h-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span>No, send now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
