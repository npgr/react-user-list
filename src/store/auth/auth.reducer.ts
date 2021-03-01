import { AnyAction } from "redux";
import AUTH_TYPES from "./auth.types";

const defaultState = {
  loading: false,
  token: null,
  user: null,
  error: null,
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case AUTH_TYPES.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    case AUTH_TYPES.LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
      };
    case AUTH_TYPES.LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload || "User or password incorrect",
      };
    default:
      return state;
  }
};