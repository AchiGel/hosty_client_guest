import type { HotelResponse } from "../types/hotelTypes";

export const getHotelData = async (): Promise<HotelResponse> => {
  const res = await fetch(
    "https://hosty-back-production.up.railway.app/api/hotel",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return res.json();
};
