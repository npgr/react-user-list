import { AnyAction } from "redux";

const defaultState = {
  loading: false,
  logged: false,
  user: null,
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        loading: false,
        logged: true,
        user: payload.user,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        logged: false,
        error: payload.error || "User or password incorrect",
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        loading: false,
        logged: false,
        error: payload.error || "User or password incorrect",
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
