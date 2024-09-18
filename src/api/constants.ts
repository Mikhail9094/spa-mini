export const TOKEN_LS_KEY = "tokenAuth";
export const BASE_URL = "https://test.v5.pryaniky.com";

export const requests = {
  LOGIN: "/ru/data/v3/testmethods/docs/login",
  CONTRACTS: {
    GET: "/ru/data/v3/testmethods/docs/userdocs/get",
    CREATE: "/ru/data/v3/testmethods/docs/userdocs/create",
    DELETE: (id: number | string) => `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
    CHANGE: (id: number | string) => `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
  },
};
