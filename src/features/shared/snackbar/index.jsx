import { IconButton, Slide, Snackbar, Typography } from "@mui/material";
import React from "react";
import SadIcon from "./assets/emoji-sad.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const MySnackBar = ({ message, type, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={"sticky h-0 top-0 z-10 items-center justify-center left-50%" + (open === true ? "drop-shadow-xl" : "hidden")}>
      <Slide direction="down" in={open}>
        <div className="flex flex-row justify-center">
          <div
            className={
              "flex flex-col h- p-2 justify-center items-center rounded-l-[8px] " +
              (type === "error" ? "bg-[#E1251B]" : "bg-[#2A9F47]")
            }
          >
            {type === "error" ? (
              <img className="w-[25px] h-auto" src={SadIcon} />
            ) : (
              <CheckCircleOutlinedIcon sx={{width: "25px", height: "25px", color: "#ffffff" }} />
            )}
          </div>
          <div
            className={
              "flex p-4 flex-row justify-center items-center gap-5 rounded-r-[8px] " +
              (type === "error" ? "bg-[#FCE9E8]" : "bg-[#EBF9EE]")
            }
          >
            <Typography
              sx={{
                color: "#4A4553",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              {message}
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                marginLeft: "auto",
                color: type === "error" ? "#E1251B" : "#2A9F47",
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default MySnackBar;
