import api from "../../api/api";

export const getUsers = () => ({
  type: "GET_USER_LIST",
  payload: api.getUsers(),
});

export const getUser = (id: string) => ({
  type: "GET_USER",
  payload: api.getUser(id),
});
