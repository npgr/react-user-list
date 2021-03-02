import { AnyAction } from "redux";
import AUTH_TYPES from "./auth.types";

const defaultState = {
  initialized: false,
  loading: false,
  token: null,
  user: null,
  error: null,
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case AUTH_TYPES.SET_TOKEN:
      return {
        ...state,
        initialized: true,
        token: payload.token,
        user: payload.user,
      };
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
    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
