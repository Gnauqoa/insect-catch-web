import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";

const AuthLayout = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus.isLogin) navigate("../");
  }, [loginStatus]);
  if (loginStatus.isChecking)
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <CircularProgress />
      </div>
    );
  if (loginStatus.isLogin) return <></>;
  return (
    <div className="flex flex-col relative h-screen">
      <Outlet />
      <ChangeLanguage />
    </div>
  );
};

export default AuthLayout;
