import { ThunkDispatch } from "redux-thunk";
import { AxiosResponse, AxiosError } from "axios";
import api from "../../api/api";
import AUTH_TYPES from "./auth.types";

export type StoreDispatch = ThunkDispatch<any, any, any>;

export const login = (user: string, password: string) => (
  dispatch: StoreDispatch
) => {
  dispatch({ type: AUTH_TYPES.LOGIN_PENDING });
  return api
    .login(user, password)
    .then((response: AxiosResponse) => {
      const token = (response && response.data && response.data.token) || null;
      return dispatch(
        token
          ? {
              type: AUTH_TYPES.LOGIN_FULFILLED,
              payload: { user, token },
            }
          : {
              type: AUTH_TYPES.LOGIN_REJECTED,
              payload: "Error processing login request",
            }
      );
    })
    .catch((err: AxiosError) => {
      const errorMessage =
        (err.response && err.response.data && err.response.data.error) ||
        err.message;

      return dispatch({
        type: AUTH_TYPES.LOGIN_REJECTED,
        payload: errorMessage,
      });
    });
};

export const logout = () => ({
  type: AUTH_TYPES.LOGOUT,
});
