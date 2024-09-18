import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeContract } from "../../api/authApi";
import { toast } from "react-toastify";

export const useChangeContract = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: changeContract,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Contracts"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
};
