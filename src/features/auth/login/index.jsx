import React from "react";
import CeecLogo from "assets/logo/ceec_logo.png";
import { Typography } from "@mui/material";

const Login = () => {
  return (
    <div className="flex flex-col pt-6 w-full">
      <div className="flex flex-col w-full items-center">
        <img
          alt="logo"
          src={CeecLogo}
          className="h-auto w-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col w-full items-center pt-[64px]">
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 700,
            color: "#121115",
          }}
        >
          Welcome back
        </Typography>
      </div>
    </div>
  );
};

export default Login;
