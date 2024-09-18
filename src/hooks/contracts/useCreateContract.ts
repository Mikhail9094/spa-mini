import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContract } from "../../api/authApi";
import { toast } from "react-toastify";

export const useCreateContract = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: createContract,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Contracts"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
};
