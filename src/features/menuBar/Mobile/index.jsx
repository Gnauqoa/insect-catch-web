import { Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ClearIcon from "@mui/icons-material/Clear";
import AdbIcon from "@mui/icons-material/Adb";


const MenuBarMobile = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="fixed top-[50%] left-3 w-screen">
      <IconButton
        sx={{
          background: "#ffffff",
        }}
        onClick={() => setOpen(true)}
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col p-8 pr-6 w-[270px] h-full ">
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-2 w-full items-center">
              <AdbIcon
                sx={{
                  color: "#121212",
                }}
              />
              <Typography
                sx={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#121212",
                }}
              >
                Got it
              </Typography>
            </div>
            <div className=" ml-auto">
              <IconButton onClick={() => setOpen(false)}>
                <ClearIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuBarMobile;
