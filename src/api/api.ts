import axios, { AxiosStatic, AxiosResponse } from "axios";

class API {
  http: AxiosStatic;

  constructor() {
    axios.defaults.baseURL = "";
    this.http = axios;
  }

  public setInterceptors(): void {
    const handleResponseError = (error: any) => {
      console.log("error: ", error);
      //   if (error.response && error.response.status === 401) {
      //     window.location.href = '/logout';
      //   }

      return Promise.reject(error);
    };

    const handleResponse = (response: any) => {
      console.log("response: ", response);
      return response;
    };

    // this.http.interceptors.request.use(handleRequest);
    this.http.interceptors.response.use(handleResponse, handleResponseError);
  }

  public getUsers = (): Promise<AxiosResponse> =>
    this.http.get("https://reqres.in/api/users");
}

export default new API();
