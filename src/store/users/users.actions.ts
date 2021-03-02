import api from "../../api/api";
import USER_TYPES from "./users.types";
import { UserForChange } from "../../models/user";

export const getUsers = (page = 1) => ({
  type: USER_TYPES.GET_USER_LIST,
  // TODO: use a builder to convert response data to a camelCase notation fields
  payload: api.getUsers(page),
});

export const getUser = (id: string) => ({
  type: USER_TYPES.GET_USER,
  payload: api.getUser(id),
});

export const deleteUser = (id: string) => ({
  type: USER_TYPES.DELETE_USER,
  payload: api.deleteUser(id),
});

export const changeUser = (user: UserForChange) => ({
  type: USER_TYPES.CHANGE_USER,
  payload: api.changeUser(user),
});

export const clearMessages = () => ({
  type: USER_TYPES.CLEAR_MESSAGES,
});
