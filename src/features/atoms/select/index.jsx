import { Select, Typography, MenuItem, FormControl } from "@mui/material";
import React from "react";

const SelectAtom = ({
  label,
  labelIcon,
  value = "",
  setValue,
  optionList = [],
  placeholder,
}) => {
  const handleChange = (event) => {
    setValue(event);
  };
  return (
    <FormControl className="flex flex-col w-full gap-2">
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
      <div className="flex flex-col min-w-[120px]">
        <Select
          value={value}
          displayEmpty
          renderValue={
            value !== ""
              ? undefined
              : () => (
                  <Typography
                    sx={{ color: "#9D9AA4", fontSize: 14, fontWeight: 400 }}
                  >
                    {placeholder}
                  </Typography>
                )
          }
          sx={{
            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#DEDDE1",
                borderRadius: "12px",
                padding: "12px 15px",
              },
              "&:hover fieldset": {
                borderColor: "#DEDDE1",
                boxShadow: "0px 0px 5px 5px #FFF1F8",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                boxShadow: " 0px 0px 5px 5px #F3C2DA",
              },
            },
          }}
          onChange={handleChange}
          inputProps={{
            "aria-label": "Without label",
          }}
        >
          {optionList.map((data, index) => (
            <MenuItem
              key={label + "select " + index}
              sx={{
                "&.MuiButtonBase-root:": {
                  background: "#FBEBF3",
                },
              }}
              value={data}
            >
              <Typography
                sx={{
                  color: "#121115",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                {data}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </div>
    </FormControl>
  );
};

export default SelectAtom;
