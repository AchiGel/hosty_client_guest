const MenuModal = ({
  setActiveModal,
}: {
  setActiveModal: React.Dispatch<React.SetStateAction<"menu" | "wifi" | null>>;
}) => {
  return (
    <div
      onClick={() => {
        setActiveModal(null);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-84.5 mx-4 shadow-xl flex flex-col gap-4 overflow-hidden"
      >
        <button
          onClick={() => setActiveModal(null)}
          className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <div className="bg-linear-to-br from-[#C6A667] to-[#a88b4a] p-6 text-white flex flex-col items-center">
          <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
              <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
              <path d="m2.1 21.8 6.4-6.3"></path>
              <path d="m19 5-7 7"></path>
            </svg>
          </div>
          <h2 className="font-playfair tracking-tight text-white text-xl font-bold">
            Room Service Menu
          </h2>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Breakfast
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <span className="text-sm font-medium text-[#111111]">
                  Continental Breakfast
                </span>
                <span className="text-sm font-bold text-[#C6A667]">$25</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <span className="text-sm font-medium text-[#111111]">
                  Continental Breakfast
                </span>
                <span className="text-sm font-bold text-[#C6A667]">$25</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <span className="text-sm font-medium text-[#111111]">
                  Continental Breakfast
                </span>
                <span className="text-sm font-bold text-[#C6A667]">$25</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Light Dishes
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <span className="text-sm font-medium text-[#111111]">
                  Continental Breakfast
                </span>
                <span className="text-sm font-bold text-[#C6A667]">$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
