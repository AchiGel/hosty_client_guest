import { useState } from "react";
import MenuModal from "../modals/MenuModal";
import WifiModal from "../modals/WifiModal";
import type { QuickAccess } from "../../types/hotelTypes";
import { getIcon } from "../../utils/iconMapper";

const QuickAccessSection = ({
  quickAccess,
}: {
  quickAccess: QuickAccess[];
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <section className="pb-6 font-inter">
        <h2 className="text-[10px] font-bold leading-3.75 tracking-[2px] uppercase text-[#A3A3A3] mb-3">
          Quick Access
        </h2>
        <div className="flex items-center gap-3">
          {quickAccess.map((card) => (
            <button
              onClick={() => setActiveModal(card.modalType)}
              key={card.id}
              className="group p-4 rounded-xl flex flex-col w-33.5 gap-3 bg-white
                 text-gray-400 hover:text-black
                 transition-colors duration-300 cursor-pointer"
            >
              <div className="transition-colors duration-300">
                {getIcon(card.icon)}
              </div>
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

export default QuickAccessSection;
