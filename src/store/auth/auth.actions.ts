import api from "../../api/api";

export const login = (user: string, password: string) => ({
  type: "LOGIN",
  payload: api.login(user, password),
});

export const clearError = () => ({
  type: "CLEAR_ERROR",
});
