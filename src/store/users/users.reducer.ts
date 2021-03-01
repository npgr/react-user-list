import { AnyAction } from "redux";

const defaultState = {
  loading: false,
  successUpdate: null,
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
        // Esto puede ser mas sofisticado
        error: payload.error || "Error Loading User List",
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
        error: payload.error || "Error Loading User",
      };
    case "DELETE_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        user: {},
        successUpdate: "User Successfully deleted",
      };
    case "DELETE_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: payload.error || "Error deleting User",
      };
    case "CHANGE_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "CHANGE_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        user: {},
        successUpdate: "User Successfully updated",
      };
    case "CHANGE_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: payload.error || "Error Changing User",
      };
    case "CLEAR_MESSAGES":
      return {
        ...state,
        successUpdate: null,
        error: null,
      };
    default:
      return state;
  }
};