import React, { useState } from "react";
import CeecLogo from "assets/logo/ceec_logo.png";
import { Button, CircularProgress, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import { ReactComponent as IconSms } from "assets/icon/icon_sms.svg";
import { ReactComponent as IconLock } from "assets/icon/icon_lock.svg";
import { Link } from "react-router-dom";
import { axiosForInsertCatchAPI } from "services/axios";
import { saveAccessToken } from "services/localStorage";
import useToggleHook from "hooks/toggleHook";
import { login } from "services/auth";
import { useDispatch } from "react-redux";
import { storeUser } from "./userReducer";
import { toast } from "react-toastify";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loading, toogleLoading, onLoading, onLoaded] = useToggleHook(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleLogin = () => {
    onLoading();
    login({ email: loginForm.email, password: loginForm.password })
      .then((res) => {
        console.log(res.data.data);
        dispatch(storeUser(res.data.data));
        toast.success("Login success!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally((data) => {
        onLoaded();
      });
  };
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
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col pt-4 gap-3 w-[30%]">
          <MyInput
            value={loginForm.email}
            onChange={handleChange}
            name="email"
            label="Email"
            startIcon={IconSms}
          />
          <MyInput
            value={loginForm.password}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            startIcon={IconLock}
          />
        </div>
        <div className="flex flex-row py-6 w-[30%] items-center">
          <div className="ml-auto">
            <Link>
              <Typography sx={{ color: "primary.main" }}>
                Forgot password
              </Typography>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-[30%]">
          <Button
            disabled={loading}
            variant="primary filled"
            sx={{ borderRadius: "90px", width: "100%" }}
            onClick={handleLogin}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                Login
              </Typography>
            )}
          </Button>
          <Typography
            sx={{
              paddingTop: "16px",
              fontSize: 14,
              fontWeight: 400,
              color: "#5C5668",
            }}
          >
            Don't have an account ?{" "}
            <Link>
              <span className="text-primary-main">Sign up for free</span>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
