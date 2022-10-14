import React from "react";
import { Outlet } from "react-router-dom";
import LogoImg from "../shared/assets/logo.png";
import Bg from "../shared/assets/bg.png";
import MySnackBar from "../../features/shared/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setSnackBar } from "./snackBarReducer";

const Banner = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#F5DECE] to-[#FFCDE6] flex flex-col items-center justify-center">
      <img src={Bg} />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[25px] pb-[25px]">
      <img className="w-[171px] " src={LogoImg} />
    </div>
  );
};

const AuthLayout = () => {
  const snackBar = useSelector((state) => state.snackBar);
  const dispatch = useDispatch();

  const handleSetnackBar = (status) => {
    dispatch(setSnackBar({ ...snackBar, open: status }));
  };
  return (
    <div className="flex flex-row w-full h-full min-h-screen">
      <div className="flex flex-col xl:w-[53%] w-full h-full min-h-screen xl:p-0 pl-4 pr-4">
        <Logo />
        <MySnackBar
          message={snackBar.message}
          type={snackBar.type}
          setOpen={(status) => handleSetnackBar(status)}
          open={snackBar.open}
        />
        <Outlet />
      </div>
      <div className="xl:flex hidden w-[46%] overflow-hidden">
        <Banner />
      </div>
    </div>
  );
};

export default AuthLayout;
