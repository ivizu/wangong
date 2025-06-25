import { Api } from "./apiGen";
import env from "../env";

let token: string | null = null;

const a = new Api({
  baseUrl: env.API_BASE,
  baseApiParams: {
    headers: {
      accept: 'application/json',
    },
    secure: true,
    format: 'json',
  },
  securityWorker: () => {
    if (token)
      return {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      }
  }
});

export const api = a.api;

export const setToken = (newToken: string | null) => {
  token = newToken;
};