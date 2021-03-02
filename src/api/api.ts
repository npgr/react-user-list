import axios, { AxiosStatic, AxiosResponse } from "axios";
import { UserForChange } from "../models/user";
import {
  handleRequest,
  handleResponse,
  handleResponseError,
} from "./api.interceptors";

class API {
  http: AxiosStatic;

  constructor() {
    axios.defaults.baseURL = "https://reqres.in/api/";
    this.http = axios;
    this.setInterceptors();
  }

  public setInterceptors(): void {
    this.http.interceptors.request.use(handleRequest);
    this.http.interceptors.response.use(handleResponse, handleResponseError);
  }

  public getUsers = (page = 1): Promise<AxiosResponse> =>
    this.http
      .get(`users?page=${page}`)
      .then(
        (response) =>
          (response && response.data) || { data: [], page: 0, total_pages: 0 }
      );

  public getUser = (id: string): Promise<AxiosResponse> =>
    this.http
      .get(`users/${id}`)
      .then(
        (response) => (response && response.data && response.data.data) || []
      );

  public deleteUser = (id: string): Promise<AxiosResponse> =>
    this.http.delete(`users/${id}`, {});

  public changeUser = (user: UserForChange): Promise<AxiosResponse> => {
    const { id, ...userData } = user;
    return this.http.put(`users/${id}`, userData);
  };

  public login = (user: string, password: string): Promise<AxiosResponse> => {
    const body = {
      email: user,
      password: password,
    };
    return this.http.post("login", body);
  };
}

export default new API();
