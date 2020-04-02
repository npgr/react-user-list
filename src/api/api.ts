import axios, { AxiosStatic, AxiosResponse } from "axios";
import { UserForChange } from "../models/user";

class API {
  http: AxiosStatic;

  constructor() {
    axios.defaults.baseURL = "https://reqres.in/api/";
    this.http = axios;
    this.setInterceptors();
  }

  public setInterceptors(): void {
    const handleResponseError = (error: any) => {
      //   if (error.response && error.response.status === 404) {
      //     window.location.href = '/logout';
      //   }

      return Promise.reject(error);
    };

    const handleResponse = (response: any) => {
      return response;
    };

    // this.http.interceptors.request.use(handleRequest);
    this.http.interceptors.response.use(handleResponse, handleResponseError);
  }

  public getUsers = (): Promise<AxiosResponse> =>
    this.http
      .get("users")
      .then(
        (response) => (response && response.data && response.data.data) || []
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
    return this.http.post(`login?email=${user}&password=${password}`);
  };
}

export default new API();
