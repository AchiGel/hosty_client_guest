import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRequest } from "../api/hotel";
import type { CartItem } from "../store/cartStore";

type CreateRequestPayload = {
  room: string;
  items: CartItem[];
};

export const useCreateRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ room, items }: CreateRequestPayload) =>
      createRequest(room, items),
    onSuccess: (data) => {
      console.log("Request created successfully:", data);
      queryClient.invalidateQueries({ queryKey: ["hotel-data"] });
    },
    onError: (error) => {
      console.error("Failed to create request:", error);
    },
  });
};
