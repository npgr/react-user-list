import { AxiosRequestConfig } from "axios";
import store from "../store";

export const handleRequest = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const handleResponse = (response: any) => {
  return response;
};

export const handleResponseError = (error: any) => {
  //   if (error.response && error.response.status === 404) {
  //     window.location.href = '/logout';
  //   }

  return Promise.reject(error);
};
