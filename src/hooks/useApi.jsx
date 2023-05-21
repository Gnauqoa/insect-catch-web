import { useState } from "react";
import { axiosForInsertCatchAPI } from "services/axios";
import useToggle from "./useToggle";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "reducers/loginStatusReducer";

const useAPI = (url, method = "get", data = null, params = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, toggleLoading, onLoading, onLoaded] = useToggle(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const getData = (customAxios) => {
    onLoading();
    return axiosForInsertCatchAPI
      .request({ method, url, data, params })
      .then((res) => {
        setResponse(res.data);
        return res.data;
      })
      .catch((err) => {
        if (err.response.status === 401)
          dispatch(setLoginStatus({ ...loginStatus, isChecking: true }));
        setResponse(null);
        setError(err);
        return err;
      })
      .finally(() => onLoaded());
  };

  return [response, error, loading, getData];
};

export default useAPI;
