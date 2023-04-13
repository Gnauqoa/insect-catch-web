import React from "react";
import CeecLogo from "assets/logo/ceec_logo.png";

const Login = () => {
  return (
    <div className="flex flex-col pt-6 justify-center">
      <img alt="logo" src={CeecLogo} className="h-[50px] w-auto" />
    </div>
  );
};

export default Login;
