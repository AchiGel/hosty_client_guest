import type { CartItem } from "../store/cartStore";
import type { HotelResponse } from "../types/hotelTypes";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// GET hotel data
export const getHotelData = async (): Promise<HotelResponse> => {
  const res = await fetch(`${API_BASE_URL}/hotel`);

  if (!res.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return res.json();
};

// POST request
export const createRequest = async (room: string, items: CartItem[]) => {
  const url = `${API_BASE_URL}/requests`;
  console.log("Sending request to:", url, "Payload:", { room, items });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room, items }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Request failed. Status:",
        response.status,
        "Response:",
        errorText,
      );
      throw new Error(`Server error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Network or fetch error:", error);
    throw error;
  }
};
