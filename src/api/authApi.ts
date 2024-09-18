import axios from "axios";
import { IResponse, LoginData } from "./types";
import { BASE_URL, requests, TOKEN_LS_KEY } from "./constants";
import { FormData } from "../components/CustomForm/types";
import { IContract } from "../pages/Contracts/types";

const ApiClient = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(async (request) => {
    const token = localStorage.getItem(TOKEN_LS_KEY);
    if (token !== undefined) {
      request.headers.set("x-auth", `${token}`);
    }
    request.headers.set("Content-Type", "application/json");

    return request;
  });

  instance.interceptors.response.use(
    async (response) => {
      if (response.data.error_code === 2004) {
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return response;
      }
      if (response.data.error_code !== 0) {
        return Promise.reject(new Error(response.data.error_message));
      }

      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const apiClient = ApiClient();

export const loginUserFn = async (credentials: FormData): Promise<IResponse<LoginData>> => {
  const response = await apiClient.post<IResponse<LoginData>>(requests.LOGIN, credentials);

  return response.data;
};

export const getContracts = async (): Promise<IContract[]> => {
  const response = await apiClient(requests.CONTRACTS.GET);

  return response.data.data;
};

export const createContract = async (data: Omit<IContract, "id">) => {
  await apiClient.post(requests.CONTRACTS.CREATE, data);
};

export const deleteContracts = async (ids: (number | string)[]) => {
  const promises = ids.map((id) => apiClient.post(requests.CONTRACTS.DELETE(id)));
  await Promise.all(promises);
};

export const changeContract = async (data: IContract) => {
  const { id, ...newData } = data;
  await apiClient.post(requests.CONTRACTS.CHANGE(data.id), newData);
};
