import { Drawer, IconButton, Typography, Link, Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ClearIcon from "@mui/icons-material/Clear";
import AdbIcon from "@mui/icons-material/Adb";
import { useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuOption } from "../data";

const MenuPage = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-12">
      {MenuOption.map((data, index) => {
        return (
          <Link underline="none" href={data.url} key={"menu option" + index}>
            <Button
              onClick={() => {
                console.log(location);
              }}
              startIcon={data.icon}
              sx={{
                textTransform: "none",
                fontSize: location.pathname === data.url ? 24 : 16,
                color:
                  location.pathname === data.url
                    ? "text_green.main"
                    : "text_black.main",
                transition:
                  "background 0.5s, color 0.5s, transform 0.5s, height 1s",

                ":hover": {
                  transform: location.pathname === data.url ? "" : "scale(1.3)",
                  color: "text_green.main",
                },
              }}
            >
              {data.title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

const Introduce = ({ setOpen }) => {
  return (
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
  );
};
const LogOut = () => {
  return (
    <div className="mt-auto">
      <Button
        startIcon={<LogoutIcon />}
        sx={{
          color: "text_black.main",
          ":hover": {
            color: "text_green.main",
          },
        }}
      >
        Logout
      </Button>
    </div>
  );
};
const MenuBarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-[50%] left-1 w-screen">
      <IconButton
        sx={{
          background: "#F5E48B",
        }}
        onClick={() => setOpen(true)}
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col p-8 pr-6 w-[270px] h-full gap-24">
          <Introduce setOpen={setOpen} />
          <MenuPage />
          <LogOut />
        </div>
      </Drawer>
    </div>
  );
};

export default MenuBarMobile;
