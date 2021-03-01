import api from "../../api/api";
import { UserForChange } from "../../models/user";

export const getUsers = () => ({
  type: "GET_USER_LIST",
  payload: api.getUsers(),
});

export const getUser = (id: string) => ({
  type: "GET_USER",
  payload: api.getUser(id),
});

export const deleteUser = (id: string) => ({
  type: "DELETE_USER",
  payload: api.deleteUser(id),
});

export const changeUser = (user: UserForChange) => ({
  type: "CHANGE_USER",
  payload: api.changeUser(user),
});

export const clearMessages = () => ({
  type: "CLEAR_MESSAGES",
});
