import { useQuery } from "@tanstack/react-query";
import { IContract } from "../../pages/Contracts/types";
import { getContracts } from "../../api/authApi";
import { toast } from "react-toastify";

export const useGetContracts = () => {
  return useQuery<IContract[]>({
    queryKey: ["Contracts"],
    queryFn: async () => {
      try {
        return await getContracts();
      } catch (error: any) {
        toast.error(`${error.message}`);
        throw error;
      }
    },
  });
};
