const WifiModal = ({
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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

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
        <div className="bg-linear-to-br from-[#111111] to-neutral-800 p-6 text-white flex flex-col items-center">
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
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
              <path d="M12 20h.01"></path>
              <path d="M2 8.82a15 15 0 0 1 20 0"></path>
              <path d="M5 12.859a10 10 0 0 1 14 0"></path>
              <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
            </svg>
          </div>
          <h2 className="font-playfair tracking-tight text-white text-xl font-bold">
            Wi-Fi Connection
          </h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Network Name
            </label>
            <div className="p-3 rounded-xl bg-neutral-100 font-semibold text-[#111111]">
              Episode_Guest
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Password
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 p-3 rounded-xl bg-neutral-100 font-mono font-semibold text-[#111111]">
                Episode2024Guest
              </div>
              <button className="cursor-pointer p-3 rounded-xl bg-[#C6A667] text-white hover:bg-[#b8995c] transition-colors">
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
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </button>
            </div>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            To connect automatically, scan the QR code at the room entrance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WifiModal;
