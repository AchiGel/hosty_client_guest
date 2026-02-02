import type { JSX } from "react";
import WifiIcon from "../assets/WifiIcon";
import MenuIcon from "../assets/MenuIcon";

interface CardType {
  id: number;
  title: string;
  icon: JSX.Element;
  modalType: "wifi" | "menu";
}

export const CARDS: CardType[] = [
  {
    id: 1,
    title: "Wi-Fi",
    modalType: "wifi",
    icon: <WifiIcon />,
  },
  {
    id: 2,
    title: "Menu",
    modalType: "menu",
    icon: <MenuIcon />,
  },
];
