import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TOKEN_LS_KEY } from "../../api/constants";
import { loginUserFn } from "../../api/authApi";

export const useLogIn = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: loginUserFn,
    onSuccess: (data) => {
      if (data && data.data.token) {
        localStorage.setItem(TOKEN_LS_KEY, data.data.token);
        client.invalidateQueries({ queryKey: ["CheckAuth"] });
        window.location.href = "/";
      }
    },
  });
};
