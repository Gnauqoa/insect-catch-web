import React, { useState, useEffect } from "react";
import Logo_Ceec from "assets/logo/ceec_logo.png";
import { Button, CircularProgress, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import { ReactComponent as IconSms } from "assets/icon/icon_sms.svg";
import { ReactComponent as IconLock } from "assets/icon/icon_lock.svg";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "hooks/useToggle";
import { login } from "services/auth";
import { useDispatch } from "react-redux";
import { storeUser } from "./userReducer";
import { toast } from "react-toastify";
import MyCheckBox from "components/MyCheckBox";
import useRemember from "hooks/useRemember";
import { setLoginStatus } from "./loginStatusReducer";
import getErrorMessage from "services/validate";

const Login = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
  const [loading, toogleLoading, onLoading, onLoaded] = useToggle(false);
  const [remember, toggleRemember] = useRemember();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    if (isError(name))
      setErrorMessage({
        ...errorMessage,
        [name]: getErrorMessage(name, value),
      });
  };
  const isError = (name) => {
    return errorMessage[name].length;
  };
  const isDisable = () => {
    return (
      errorMessage.email.length ||
      errorMessage.password.length ||
      !formValue.email.length ||
      !formValue.password.length
    );
  };
  const handleComplete = (e) => {
    const { name, value } = e.currentTarget;
    setErrorMessage({ ...errorMessage, [name]: getErrorMessage(name, value) });
  };
  const handleLogin = () => {
    onLoading();
    login({ email: formValue.email, password: formValue.password })
      .then((res) => {
        dispatch(storeUser(res.data.data));
        dispatch(setLoginStatus({ isChecking: false, isLogin: true }));
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
  return (
    <div className="flex flex-col w-full">
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
            fontFamily: "DM Sans",
          }}
        >
          Welcome back
        </Typography>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col pt-4 gap-3 w-[30%]">
          <MyInput
            onBlur={handleComplete}
            value={formValue.email}
            error_message={errorMessage.email}
            onChange={handleChange}
            name="email"
            label="Email"
            startIcon={IconSms}
          />
          <MyInput
            onBlur={handleComplete}
            value={formValue.password}
            error_message={errorMessage.password}
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
            disabled={loading || !!isDisable()}
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
            <Link to="/auth/register">
              <span className="text-primary-main">Sign up for free</span>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
