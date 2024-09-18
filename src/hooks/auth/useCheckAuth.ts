import { useQuery } from "@tanstack/react-query";
import { getContracts } from "../../api/authApi";
import { toast } from "react-toastify";

const checkAuth = async () => {
  const rez = await getContracts();
  return rez ? true : false;
};
export const useCheckAuth = () => {
  return useQuery({
    queryKey: ["CheckAuth"],
    queryFn: async () => {
      try {
        return await checkAuth();
      } catch (error: any) {
        toast.error(`${error.message}`);
        throw error;
      }
    },
  });
};
