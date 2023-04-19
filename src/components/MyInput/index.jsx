import { IconButton, Input, SvgIcon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as IconEye } from "assets/icon/icon_eye.svg";
import { ReactComponent as IconEyeSlash } from "assets/icon/icon_eye_slash.svg";

const MyInput = ({
  label,
  placeholder,
  startIcon,
  disabled = false,
  error = false,
  type = "",
  onChange,
  sx,
  value,
  ...props
}) => {
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    if (type === "password") setInvisible(true);
  }, []);
  return (
    <div className="flex flex-col gap-2 w-full">
      {label ? (
        <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#121115" }}>
          {label}
        </Typography>
      ) : (
        <></>
      )}

      <Input
        defaultValue={value}
        autoComplete={"none"}
        disabled={disabled}
        onChange={onChange}
        type={invisible ? "password" : type}
        sx={{
          width: "100%",
          border: "2px solid #DEDDE1",
          borderRadius: "12px",
          padding: "8px 16px",
          ":hover ": {
            boxShadow: !disabled && "0px 0px 5px 5px #fff2db",
          },
          "&.Mui-focused ": {
            borderColor: "primary.main",
            boxShadow: " 0px 0px 5px 5px #fff2db",
          },
          transition: "all 0.15s",
        }}
        placeholder={placeholder}
        disableUnderline={true}
        endAdornment={
          type === "password" ? (
            <IconButton
              sx={{ padding: 0, marginLeft: "16px" }}
              onClick={() => setInvisible(!invisible)}
            >
              <SvgIcon
                inheritViewBox={true}
                sx={{
                  width: 24,
                  height: 24,
                  fill: "#9D9AA4",
                }}
                color="#9D9AA4"
                component={invisible ? IconEye : IconEyeSlash}
              ></SvgIcon>
            </IconButton>
          ) : (
            <></>
          )
        }
        startAdornment={
          startIcon ? (
            <SvgIcon
              inheritViewBox={true}
              sx={{
                width: 24,
                height: 24,
                fill: "#9D9AA4",
                marginRight: "16px",
              }}
              color="#9D9AA4"
              component={startIcon}
            />
          ) : (
            <></>
          )
        }
        {...props}
      />
    </div>
  );
};

export default MyInput;
