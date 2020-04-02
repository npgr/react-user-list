import { AnyAction } from "redux";

const defaultState = {
  loading: false,
  error: null,
  userList: [],
  user: null,
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case "GET_USER_LIST_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_LIST_FULFILLED":
      return {
        ...state,
        loading: false,
        userList: payload,
      };
    case "GET_USER_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "GET_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case "GET_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
