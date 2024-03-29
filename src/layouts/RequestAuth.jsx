import { CircularProgress } from "@mui/material";
import useMyNavigate from "hooks/useMyNavigate";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const RequestAuth = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const navigate = useMyNavigate();
  useEffect(() => {
    if (!loginStatus.isChecking) if (!loginStatus.isLogin) navigate("");
  }, [loginStatus]);
  if (loginStatus.isChecking)
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <CircularProgress />
      </div>
    );
  if (!loginStatus.isLogin) return <></>;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RequestAuth;
