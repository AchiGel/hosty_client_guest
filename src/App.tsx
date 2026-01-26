function App() {
  return (
    <div className="max-w-4xl flex flex-col mx-auto min-h-screen px-6 bg-[#F6F7F9]">
      {/* Header */}
      <header className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-black text-white w-9 h-9 flex items-center justify-center">
            EP
          </div>
          <div className="flex flex-col">
            <h2>EPISODE</h2>
            <span>Tbilisi</span>
          </div>
        </div>
        <div>
          <img src="/icons/user.svg" alt="User icon" />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <section className="flex flex-col gap-1 py-6">
          <p>Welcome</p>
          <h2>
            Welcome to <span>EPISODE</span>
          </h2>
          <div className="flex gap-2">
            <span>402</span>
            <p>Room 402 · Check-out Dec 25</p>
          </div>
        </section>

        <section className="pb-6">
          <button className="p-5 rounded-2xl bg-black flex items-center justify-between w-full max-w-73.75">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-[rgba(255, 255, 255, 0.10)] p-3">
                <img src="/icons/request.svg" alt="request" />
              </div>
              <div className="flex flex-col text-white items-start">
                <h3>Make a Request</h3>
                <p>Room service and more</p>
              </div>
            </div>
            <div>
              <img src="/icons/arrow.svg" alt="arrow" />
            </div>
          </button>
        </section>

        <section className="pb-6">
          <h2>Quick Access</h2>
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-xl flex flex-col w-33.5 gap-3 bg-white">
              <div>
                <img src="/icons/wifi.svg" alt="wifi-icon" />
              </div>
              <span className="self-center">Wi-Fi</span>
            </div>
            <div className="p-4 rounded-xl flex flex-col w-33.5 gap-3 bg-white">
              <div>
                <img src="/icons/menu.svg" alt="menu-icon" />
              </div>
              <span className="self-center">Menu</span>
            </div>
          </div>
        </section>

        <section>
          <button className="rounded-2xl bg-gray-500 flex flex-col items-start p-5">
            <div className="bg-[rgba(255, 255, 255, 0.20)] rounded-full p-1.5 flex items-center justify-center self-end">
              <img src="/icons/arrow.svg" alt="arrow" />
            </div>
            <span>Exclusive</span>
            <p>Late Check-out Offer</p>
            <p>Stay until 4:00 PM</p>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 flex items-center justify-center">
        Powered by Hosty
      </footer>
    </div>
  );
}

export default App;
