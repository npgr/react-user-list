const TOKEN_KEY = "la-liga-app-token";

export const saveToken = (token: string, user: string) => {
  const value = JSON.stringify({ token, user });
  localStorage.setItem(TOKEN_KEY, value);
};

export const getToken = () => {
  const text = localStorage.getItem(TOKEN_KEY);
  return text ? JSON.parse(text) : { token: null, user: null };
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
