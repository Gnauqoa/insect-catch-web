import {
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityOff from "./assets/visibilityOff.png";
import IconAtom from "./../icon/index";

const MyTextField = ({
  type,
  label,
  labelIcon,
  placeholder,
  startIcon,
  onChange,
  disabled = false,
  message = "",
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row gap-2">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#121115",
          }}
        >
          {label}
        </Typography>
        <img className="max-w-[14px] maw-h-[14px]" src={labelIcon} />
      </div>
      <TextField
        error={error}
        disabled={disabled}
        onChange={(e) => onChange(e)}
        type={
          disabled
            ? type
            : type == "password"
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        autoComplete={"off"}
        sx={{
          width: "100%",
          background: disabled ? "#EFEEF0" : "",
          "& .MuiInputBase-input.Mui-disabled": {
            "&::placeholder": {
              "-webkit-text-fill-color": "#9D9AA4",
              opacity: 1,
            },
            "-webkit-text-fill-color": "#9D9AA4",
          },
          "-webkit-text-fill-color": error ? "#E1251B" : "",

          "& .MuiInputBase-root": {
            "& > fieldset": {
              borderColor: "#DEDDE1",
              borderRadius: "12px",
              borderWidth: "1px",
            },
            ":hover fieldset": {
              borderColor: !disabled && "#DEDDE1",
              boxShadow: !disabled && "0px 0px 5px 5px #FFF1F8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              boxShadow: " 0px 0px 5px 5px #F3C2DA",
            },
          },
        }}
        placeholder={placeholder}
        InputProps={{
          autoComplete: "none",
          startAdornment: (
            <InputAdornment position="start">
              <IconAtom size="l" src={startIcon} />
            </InputAdornment>
          ),
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
              >
                {
                  <IconAtom
                    size="l"
                    src={showPassword ? VisibilityOff : VisibilityOff}
                  />
                }
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography
        hidden = {message === ""}
        sx={{
          fontSize: 12,
          fontWeight: 400,
          color: error ? "#E1251B" : "#9D9AA4",
        }}
      >
        {message}
      </Typography>
    </div>
  );
};

export default MyTextField;
