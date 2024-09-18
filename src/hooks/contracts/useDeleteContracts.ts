import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContracts } from "../../api/authApi";
import { toast } from "react-toastify";

export const useDeleteContracts = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: deleteContracts,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Contracts"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
};
