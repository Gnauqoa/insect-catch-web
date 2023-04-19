import React, { useState } from "react";
import Logo_Ceec from "assets/logo/ceec_logo.png";
import { Typography, Button, CircularProgress } from "@mui/material";
import MyInput from "components/MyInput";
import { Link, useNavigate } from "react-router-dom";
import getErrorMessage from "services/validate";
import { register } from "services/auth";
import { toast } from "react-toastify";
import useToggle from "hooks/useToggle";
import dayjs from "dayjs";

const Register = () => {
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birth: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birth: "",
  });
  const [loading, toogleLoading, onLoading, onLoaded] = useToggle(false);
  const navigate = useNavigate();
  const handleComplete = (e) => {
    const { name, value } = e.currentTarget;
    setErrorMessage({ ...errorMessage, [name]: getErrorMessage(name, value) });
  };
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
      errorMessage.first_name.length ||
      errorMessage.last_name.length ||
      errorMessage.email.length ||
      errorMessage.password.length ||
      !formValue.email.length ||
      !formValue.password.length ||
      !formValue.first_name.length ||
      !formValue.last_name.length ||
      !formValue.birth.length
    );
  };
  const handleBirthChange = (e) => {
    setFormValue({ ...formValue, birth: e.target.value });
  };
  const handleRegister = () => {
    onLoading();
    register({ ...formValue, birth: dayjs(formValue.birth).toDate() })
      .then((res) => {
        console.log(res.data);
        toast.success("Sign up success!");
        setTimeout(() => navigate("/auth/login"), 3000);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
        onLoaded();
      })
  };
  return (
    <div className="flex flex-col w-full pb-8">
      <div className="flex flex-col w-full items-center">
        <img
          alt="logo"
          src={Logo_Ceec}
          className="h-auto w-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col w-full items-center ">
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 700,
            color: "#121115",
            fontFamily: "DM Sans",
          }}
        >
          Sign up to app
        </Typography>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col pt-4 gap-3 w-[40%]">
          <div className="flex flex-col gap-2 w-full">
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, color: "#121115" }}
            >
              Full name
            </Typography>
            <div className="flex flex-row gap-4 items-center w-full">
              <MyInput
                onBlur={handleComplete}
                value={formValue.first_name}
                onChange={handleChange}
                name="first_name"
                placeholder="First name"
              />
              <MyInput
                onBlur={handleComplete}
                value={formValue.last_name}
                onChange={handleChange}
                name="last_name"
                placeholder="Last name"
              />
            </div>
          </div>
          <MyInput
            onBlur={handleComplete}
            value={formValue.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            label="Email"
          />
          <MyInput
            onBlur={handleComplete}
            value={formValue.password}
            onChange={handleChange}
            name="password"
            placeholder="***********"
            label="Password"
            type="password"
          />
          <MyInput
            value={formValue.birth}
            onChange={handleBirthChange}
            name="birth"
            placeholder="08/10/2003"
            label="Birth"
            type="date"
          />
          <div className="flex flex-col">
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#37343E",
                textAlign: "center",
              }}
            >
              By continuing, you agree to{" "}
              <span className="text-primary-main">Terms of Service</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#37343E",
                textAlign: "center",
              }}
            >
              and acknowledge{" "}
              <span className="text-primary-main">Privacy Policy</span> .
            </Typography>
          </div>
          <Button
            onClick={handleRegister}
            disabled={loading || !!isDisable()}
            variant="primary filled"
            sx={{ width: "100%", borderRadius: "90px", marginTop: "8px" }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                Create account
              </Typography>
            )}
          </Button>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#5C5668",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link to="/auth/login">
              <span className="text-primary-main">Login</span>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;
