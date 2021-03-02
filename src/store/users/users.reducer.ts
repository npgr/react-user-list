import { AnyAction } from "redux";
import USER_TYPES from "./users.types";

const defaultState = {
  loading: false,
  successUpdate: null,
  error: null,
  userList: [],
  user: null,
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case USER_TYPES.GET_USER_LIST_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.GET_USER_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        userList: payload,
      };
    case USER_TYPES.GET_USER_LIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.error || "Error Loading User List",
      };
    case USER_TYPES.GET_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.GET_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case USER_TYPES.GET_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.error || "Error Loading User",
      };
    case USER_TYPES.DELETE_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.DELETE_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        user: {},
        successUpdate: "User Successfully deleted",
      };
    case USER_TYPES.DELETE_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.error || "Error deleting User",
      };
    case USER_TYPES.CHANGE_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.CHANGE_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        user: {},
        successUpdate: "User Successfully updated",
      };
    case USER_TYPES.CHANGE_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.error || "Error Changing User",
      };
    case USER_TYPES.CLEAR_MESSAGES:
      return {
        ...state,
        successUpdate: null,
        error: null,
      };
    default:
      return state;
  }
};
