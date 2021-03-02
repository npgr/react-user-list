import api from "../../api/api";
import USER_TYPES from "./users.types";
import { UserForChange } from "../../models/user";

export const getUsers = () => ({
  type: USER_TYPES.GET_USER_LIST,
  payload: api.getUsers(),
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
