import { Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import IconAtom from "../icon";
import CheckedIcon from "./assets/checked.png";

const CheckboxAtom = ({
  label,
  disabled = false,
  onChange,
  defaultValue = false,
}) => {
  const [checked, setChecked] = useState(defaultValue);
  const handleClick = () => {
    if (disabled) return;
    setChecked(!checked);
    onChange(checked);
  };
  const checkedStyle = () => {
    return disabled
      ? " bg-[#DEDDE1] border-[#DEDDE1] "
      : checked
      ? " bg-[#D63384] border-[#D63384] hover:border-[#D63384] "
      : "  border-[#CECCD2]  hover:border-[#F3C2DA] ";
  };
  return (
    <div className="flex flex-row gap-[10px] items-center">
      <div
        onClick={handleClick}
        className={
          "flex flex-col select-none cursor-pointer justify-center items-center border-solid  w-[20px] h-[20px]  border-[2px] rounded-[5px] " +
          checkedStyle()
        }
      >
        <IconAtom
          className={checked ? "" : "hidden"}
          size=""
          src={CheckedIcon}
        />
      </div>

      <Typography
        sx={{
          color: disabled ? "#9D9AA4" : "#1C1A1F",
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        {label}
      </Typography>
    </div>
  );
};

export default CheckboxAtom;
