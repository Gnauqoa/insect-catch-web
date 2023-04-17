import { axiosForInsertCatchAPI } from "./axios";
import { clearTokens, getRefreshToken } from "./localStorage";
import { saveAccessToken, saveRefreshToken } from "./localStorage";
import jwt_decode from "jwt-decode";

const AUTHENTICATION_URLS = {
  LOGIN: "/v2/user/login",
  LOGOUT: "/v2/user/logout",
  LOGOUT_ALL: "/v2/user/logout_all",
  REFRESH_TOKEN: "/v2/user/refresh_token",
  REGISTER: "/v2/user/",
};

export const login = (payload) => {
  return axiosForInsertCatchAPI
    .request({
      method: "post",
      url: AUTHENTICATION_URLS.LOGIN,
      data: payload,
    })
    .then((response) => {
      axiosForInsertCatchAPI.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      saveRefreshToken(response.data.refresh_token);
      saveAccessToken(response.data.access_token);
      getCurrentUser();
    });
};
export const logout = () => {
  return axiosForInsertCatchAPI.request({
    method: "delete",
    url: AUTHENTICATION_URLS.LOGOUT,
  });
};

export const logoutAll = () => {
  return axiosForInsertCatchAPI.request({
    method: "delete",
    url: AUTHENTICATION_URLS.LOGOUT_ALL,
  });
};
const validateToken = (token) => {
  if (token === null || token === undefined || token === "") {
    return false;
  }
  const decoded = jwt_decode(token);
  return Date.now() < decoded.exp * 1000;
};
export const getAccessTokenFromRefreshToken = () => {
  const refreshToken = getRefreshToken();
  if (!validateToken(refreshToken))
    return Promise.reject({ data: { error: "invalid_refresh_token" } });
  return axiosForInsertCatchAPI
    .request({
      method: "post",
      url: AUTHENTICATION_URLS.REFRESH_TOKEN,
      data: { refresh_token: refreshToken },
    })
    .then((response) => {
      const access_token = response.data.access_token;
      if (access_token) {
        saveAccessToken(access_token);
        axiosForInsertCatchAPI.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
      } else clearTokens();
      return Promise.resolve(response);
    });
};
export const getCurrentUser = () => {
  return axiosForInsertCatchAPI
    .request({
      method: "get",
      url: "/v2/user/current",
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};
