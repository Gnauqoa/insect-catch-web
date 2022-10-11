import React, { useState } from "react";
import { Typography, Button, Link, FormControl } from "@mui/material";
import Facebook from "../../shared/assets/facebook.png";
import Google from "../../shared/assets/google.png";
import Apple from "../../shared/assets/apple.png";
import Lock from "../../shared/assets/lock.png";
import Email from "../../shared/assets/email.png";
import MyTextField from "../../atoms/myTextField";
import SelectAtom from "../../atoms/select/index";
import {
  getEmailMessage,
  getPasswordMessage,
  getZipCodeMessage,
  updateState,
} from "../validate ";
import MySnackBar from "../../shared/snackbar";

const getMonthSelectData = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
};
const getDaySelectData = (month) => {
  const selectData = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let data = [];
  for (let i = 1; i <= selectData[month - 1]; ++i) {
    data.push(i);
  }
  return data;
};
const getYearSelectData = () => {
  let data = [];
  for (let i = 1950; i <= 2022; ++i) {
    data.push(i);
  }
  return data;
};

const RegisterForm = () => {
  const [snackBar, setSnackBar] = useState({
    message: "Please enter a valid email.",
    type: "error",
    open: false,
  });
  const handleSetOpenSnackBar = (status) => {
    setSnackBar({
      ...snackBar,
      open: status,
    });
  };
  const handleSetSnackBar = (message, type = "error", open = true) => {
    setSnackBar({
      message: message,
      type: type,
      open: open,
    });
  };
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 relative">
      <Introduce />
      <RegisterType />
      <Divider />
      <InputArea setSnackBar={handleSetSnackBar} />
      <MySnackBar
        message={snackBar.message}
        type={snackBar.type}
        setOpen={(status) => handleSetOpenSnackBar(status)}
        open={snackBar.open}
      />
    </div>
  );
};

const InputArea = ({ setSnackBar }) => {
  const [fistName, setFistName] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [password, setPassword] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [email, setEmail] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [zipCode, setZipCode] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [month, setMonth] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [day, setDay] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [year, setYear] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [daySelectData, setDaySelectData] = useState([]);

  const onPasswordChange = (e) => {
    const message = getPasswordMessage(e.currentTarget.value);
    updateState(
      setPassword,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"password message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
  const onEmailChange = (e) => {
    const messageEmail = getEmailMessage(e.currentTarget.value);
    updateState(
      setEmail,
      e.currentTarget.value,
      messageEmail.map((data, index) => (
        <span
          key={"email message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
  const onZipcodeChange = (e) => {
    const message = getZipCodeMessage(e.currentTarget.value);
    updateState(
      setZipCode,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"zip code message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
  const onLastNameChange = (e) => {
    updateState(
      setLastName,
      e.currentTarget.value,
      !e.currentTarget.value.length ? "Last name can't be empty." : ""
    );
  };
  const onFistNameChange = (e) => {
    updateState(
      setFistName,
      e.currentTarget.value,
      !e.currentTarget.value.length ? "Fist name can't be empty." : ""
    );
  };
  const onMonthSelect = (e) => {
    updateState(setMonth, e.target.value);
    setDaySelectData(getDaySelectData(month.value));
  };
  const onDaySelect = (e) => {
    updateState(setDay, e.target.value);
  };
  const onYearSelect = (e) => {
    updateState(setYear, e.target.value);
  };
  const handleSubmit = () => {
    const messageSnackBar = [];
    if (!fistName.value.length) {
      setFistName({
        ...fistName,
        message: "Fist name can't be empty.",
        error: true,
      });
      messageSnackBar.push("Fist name can't be empty.");
    }
    if (!lastName.value.length) {
      setLastName({
        ...lastName,
        message: "Last name can't be empty.",
        error: true,
      });
      messageSnackBar.push("Last name can't be empty.");
    }
    const messageEmail = getEmailMessage(email.value);
    if (messageEmail.length) {
      setEmail({
        ...email,
        message: messageEmail.map((data, index) => (
          <span
            key={"email message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
        error: true,
      });
      messageEmail.map((data) => messageSnackBar.push(data));
    }
    const messagePassword = getPasswordMessage(password.value);
    if (password.value.length < 6)
      messageSnackBar.push("Password must be at least 6 characters in length.");
    if (messagePassword.length > 1) {
      setPassword({
        ...password,
        error: true,
        message: messagePassword.map((data, index) => (
          <span
            key={"password message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
      });
      messagePassword.map((data) => messageSnackBar.push(data));
    }
    const zipCodeMessage = getZipCodeMessage(zipCode.value);
    if (zipCodeMessage.length) {
      setZipCode({
        ...zipCode,
        message: zipCodeMessage.map((data, index) => (
          <span
            key={"email message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
        error: true,
      });
      zipCodeMessage.map((data) => messageSnackBar.push(data));
    }
    if (messageSnackBar.length) {
      setSnackBar(
        messageSnackBar.map((data, index) => (
          <span
            key={"snack bar message " + index}
            className="flex flex-row items-center"
          >
            {data}
          </span>
        )),
        "error",
        true
      );
    } else {
      setSnackBar("", true, false);
      // paste code register here
    }
  };
  return (
    <FormControl className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#121115",
            }}
          >
            Full name
          </Typography>
          <div className="flex flex-row gap-2 ">
            <MyTextField
              onChange={(e) => onFistNameChange(e)}
              placeholder="Fist name"
              message={fistName.message}
              type="alphabet"
              error={fistName.error}
            />

            <MyTextField
              onChange={(e) => onLastNameChange(e)}
              placeholder="Last name"
              message={lastName.message}
              type="alphabet"
              error={lastName.error}
            />
          </div>
        </div>
        <MyTextField
          onChange={(e) => onEmailChange(e)}
          startIcon={Email}
          label="Email"
          placeholder="name@example.com"
          message={email.message}
          error={email.error}
        />
        <MyTextField
          type="password"
          onChange={(e) => onPasswordChange(e)}
          startIcon={Lock}
          label="Password"
          message={password.message}
          error={password.error}
        />
        <MyTextField
          type="number"
          label="Zipcode"
          placeholder="eg: 12345-6789"
          onChange={onZipcodeChange}
          message={zipCode.message}
          error={zipCode.error}
        />
        <div className="flex flex-row gap-[6px] items-end">
          <SelectAtom
            value={month.value}
            setValue={(e) => onMonthSelect(e)}
            optionList={getMonthSelectData()}
            label={
              <>
                Birthday
                <span className="pl-1 text-[14px] text-[#9D9AA4] font-500">
                  (optional)
                </span>
              </>
            }
            placeholder="Month"
          />
          <SelectAtom
            value={day.value}
            setValue={(e) => onDaySelect(e)}
            optionList={daySelectData}
            placeholder="Day"
          />
          <SelectAtom
            value={year.value}
            setValue={(e) => onYearSelect(e)}
            optionList={getYearSelectData()}
            placeholder="Year"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center	">
        <Typography sx={{ color: "#37343E", fontWeight: 400, fontSize: 14 }}>
          By continuing, you agree to Lexor’s
          <Link
            href=""
            sx={{ color: "#D63384", fontWeight: 500 }}
            underline="none"
          >
            {" Terms of Service "}
          </Link>
        </Typography>
        <Typography sx={{ color: "#37343E", fontWeight: 400, fontSize: 14 }}>
          and acknowledge Lexor's
          <Link
            href=""
            sx={{ color: "#D63384", fontWeight: 500, fontSize: 14 }}
            underline="none"
          >
            {" Privacy Policy. "}
          </Link>
        </Typography>
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        sx={{ borderRadius: 90 }}
        variant="primary filled"
      >
        Create account
      </Button>
      <div className="flex flex-row text-center items-center justify-center">
        <Typography sx={{ color: "#5C5668", fontWeight: 400, fontSize: 14 }}>
          Already have an account?
          <Link
            href="login"
            sx={{ color: "#D63384", fontWeight: 500 }}
            underline="none"
          >
            {" Log in"}
          </Link>
        </Typography>
      </div>
    </FormControl>
  );
};

const Divider = () => {
  return (
    <div className="flex flex-row items-center gap-5 justify-center w-full ">
      <div className="h-[1px] w-full bg-[#CECCD2]"></div>
      <div className="text-center w-full 	">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          or log in with email
        </Typography>
      </div>

      <div className="h-[1px] w-full bg-[#CECCD2] "></div>
    </div>
  );
};

const RegisterType = () => {
  const allRegisterType = [
    { title: "Facebook", icon: Facebook, onClick: () => {} },
    { title: "Google", icon: Google, onClick: () => {} },
    { title: "Apple ID", icon: Apple, onClick: () => {} },
  ];
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      {allRegisterType.map((data, index) => (
        <Button
          onClick={data.onClick}
          key={"login type " + index}
          sx={{
            textTransform: "none",
            background: "#ffffff",
            color: "#000000",
            border: "2px",
            borderStyle: "solid",
            borderRadius: "20px",
            width: "100%",
            fontSize: "14px",
            fontWeight: "700",
            marginTop: "16px",
            ":hover": {
              background: "#ffffff",
            },
            "&.MuiButton-root": {
              borderColor: "#DEDDE1",
            },
            padding: "10px 24px",
          }}
          startIcon={<img src={data.icon} />}
        >
          <Typography
            sx={{
              color: "#1A1D1F",
              fontSize: 14,
              fontWeight: 500,
            }}
          ></Typography>
          {data.title}
        </Button>
      ))}
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="xl:text-[48px] text-[32px] font-[700] text-[#121115]">
        Sign up to Lexor
      </p>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#5C5668",
        }}
      >
        Continue with
      </Typography>
    </div>
  );
};

export default RegisterForm;
