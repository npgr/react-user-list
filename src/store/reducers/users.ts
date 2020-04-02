import { AnyAction } from "redux";

const defaultState = {
  loading: false,
  error: null,
  users: [],
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case "GET_USERS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS_FULFILLED":
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case "GET_USERS_FAILED":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
