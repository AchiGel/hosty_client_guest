import { useQuery } from "@tanstack/react-query";
import { getHotelData } from "../api/hotel";
import type { HotelResponse } from "../types/hotelTypes";

export const useHotelQuery = () => {
  return useQuery<HotelResponse>({
    queryKey: ["hotel"],
    queryFn: getHotelData,
    staleTime: Infinity,
  });
};
