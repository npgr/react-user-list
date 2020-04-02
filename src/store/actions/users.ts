import api from "../../api/api";

export const getUsers = () => ({
  type: "GET_USERS",
  payload: api.getUsers(),
});
