import React, { useState } from "react";
import Logo_Ceec from "assets/logo/ceec_logo.png";
import { Typography, Button } from "@mui/material";
import MyInput from "components/MyInput";
import { Link } from "react-router-dom";
const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birth: "",
  });
  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleBirthChange = (e) => {
    setRegisterForm({ ...registerForm, birth: e.target.value });
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
                value={registerForm.first_name}
                onChange={handleChange}
                name="first_name"
                placeholder="First name"
              />
              <MyInput
                value={registerForm.last_name}
                onChange={handleChange}
                name="last_name"
                placeholder="Last name"
              />
            </div>
          </div>
          <MyInput
            value={registerForm.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            label="Email"
          />
          <MyInput
            value={registerForm.password}
            onChange={handleChange}
            name="password"
            placeholder="***********"
            label="Password"
            type="password"
          />
          <MyInput
            value={registerForm.birth}
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
            variant="primary filled"
            sx={{ width: "100%", borderRadius: "90px", marginTop: "8px" }}
          >
            Create account
          </Button>
          <Typography sx={{ fontSize: 14, fontWeight: 400, color: "#5C5668", textAlign: "center" }}>
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
