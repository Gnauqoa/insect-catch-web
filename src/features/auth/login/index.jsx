import React, { useEffect, useState } from "react";
import Logo_Ceec from "assets/logo/ceec_logo.png";
import { Button, CircularProgress, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import { ReactComponent as IconSms } from "assets/icon/icon_sms.svg";
import { ReactComponent as IconLock } from "assets/icon/icon_lock.svg";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "hooks/useToggle";
import { login } from "services/auth";
import { useDispatch, useSelector } from "react-redux";
import { storeUser } from "./userReducer";
import { toast } from "react-toastify";
import MyCheckBox from "components/MyCheckBox";
import useRemember from "hooks/useRemember";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loading, toogleLoading, onLoading, onLoaded] = useToggle(false);
  const [remember, toggleRemember] = useRemember();
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        dispatch(storeUser(res.data.data));
        toast.success("Login success!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
      })
      .finally((data) => {
        onLoaded();
      });
  };
  useEffect(() => {
    if (loginStatus.isLogin) navigate("/");
  }, [loginStatus]);
  if (loginStatus.isChecking)
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <CircularProgress />
      </div>
    );
  if (loginStatus.isLogin) return <></>;
  return (
    <div className="flex flex-col pt-6 w-full">
      <div className="flex flex-col w-full items-center">
        <img
          alt="logo"
          src={Logo_Ceec}
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
          <MyCheckBox
            value={remember}
            onChange={toggleRemember}
            label="Remember me"
          />
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