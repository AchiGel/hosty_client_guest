import { useState } from "react";
import MenuModal from "../modals/MenuModal";
import WifiModal from "../modals/WifiModal";
import { CARDS } from "../../constants/quickAccessCards";

const QuickAccess = () => {
  const [activeModal, setActiveModal] = useState<"menu" | "wifi" | null>(null);

  return (
    <>
      <section className="pb-6 font-inter">
        <h2 className="text-[10px] font-bold leading-3.75 tracking-[2px] uppercase text-[#A3A3A3] mb-3">
          Quick Access
        </h2>
        <div className="flex items-center gap-3">
          {CARDS.map((card) => (
            <button
              onClick={() => setActiveModal(card.modalType)}
              key={card.id}
              className="group p-4 rounded-xl flex flex-col w-33.5 gap-3 bg-white
                 text-gray-400 hover:text-black
                 transition-colors duration-300 cursor-pointer"
            >
              <div className="transition-colors duration-300">{card.icon}</div>
              <span className="self-center text-[13px] font-bold leading-5 text-black">
                {card.title}
              </span>
            </button>
          ))}
        </div>
      </section>
      {activeModal === "menu" ? (
        <MenuModal setActiveModal={setActiveModal} />
      ) : activeModal === "wifi" ? (
        <WifiModal setActiveModal={setActiveModal} />
      ) : null}
    </>
  );
};

export default QuickAccess;
