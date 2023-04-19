import { setLoginStatus } from "features/auth/login/loginStatusReducer";
import { storeUser } from "features/auth/login/userReducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessTokenFromRefreshToken,
  getCurrentUser,
  validateToken,
} from "services/auth";
import { axiosForInsertCatchAPI } from "services/axios";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
} from "services/localStorage";

const AutoLogin = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    let { isChecking, isLogin } = loginStatus;
    if (!isChecking) return;
    isChecking = false;
    console.log("auto login");
    if (validateToken(getRefreshToken())) {
      if (!validateToken(getAccessToken())) {
        console.log("get new access_token");
        getAccessTokenFromRefreshToken()
          .then((res) => {
            isLogin = true;
            getCurrentUser().then((res) => dispatch(storeUser(res.data.data)));
          })
          .catch((err) => {
            console.log("clear");
            clearTokens();
          })
          .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
        return;
      }
      console.log("use old access_token");
      axiosForInsertCatchAPI.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${getAccessToken()}`;
      isLogin = true;
      getCurrentUser()
        .then((res) => dispatch(storeUser(res.data.data)))
        .catch((err) => {
          clearTokens();
        })
        .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
      return;
    }
    dispatch(setLoginStatus({ isLogin, isChecking }));
  }, []);
};

export default AutoLogin;
