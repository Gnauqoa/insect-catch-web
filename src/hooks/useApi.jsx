import { useState } from "react";
import { axiosForInsertCatchAPI } from "services/axios";
import useToggle from "./useToggle";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "reducers/loginStatusReducer";
import { getAccessTokenFromRefreshToken } from "services/auth";

const useAPI = (url, method = "get") => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, toggleLoading, onLoading, onLoaded] = useToggle(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const getData = (data = null, params = null) => {
    onLoading();
    return axiosForInsertCatchAPI
      .request({ method, url, data, params })
      .then((res) => {
        setResponse(res);
        return Promise.resolve(res);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          return getAccessTokenFromRefreshToken()
            .then((res) => {
              return axiosForInsertCatchAPI
                .request({ method, url, data, params })
                .then((res) => {
                  setResponse(res);
                  return Promise.resolve(res);
                });
            })
            .catch((err) => {
              dispatch(setLoginStatus({ ...loginStatus, isChecking: true }));
              return Promise.reject(err);
            });
        }
        setResponse(null);
        setError(err);
        return Promise.reject(err);
      })
      .finally(() => {
        onLoaded();
      });
  };

  return [getData, loading, response, error];
};

export default useAPI;
