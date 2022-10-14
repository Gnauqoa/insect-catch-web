const ACCESS_TOKEN_NAME = "_lx.at";

export const saveAccessToken = (token) =>
  token ? localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(token)) : null;
export const getAccessToken = () => JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME));
export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN_NAME);
