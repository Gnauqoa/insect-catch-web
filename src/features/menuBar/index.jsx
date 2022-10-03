import React, { useState } from "react";

import AdbIcon from "@mui/icons-material/Adb";
import { Button, IconButton, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Introduce = () => {
  return (
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

const MenuPage = () => {
  const location = useLocation();
  const MenuOption = [
    { title: "Home", url: "/", icon: <HomeIcon /> },
    { title: "Device", url: "/device", icon: <DeviceHubIcon /> },
    { title: "Settings", url: "/settings", icon: <SettingsIcon /> },
  ];
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
                transition: "background 0.5s, color 0.5s, transform 0.5s, height 1s",

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

const MenuBar = () => {
  return (
    <div className="flex flex-col relative p-14 gap-[200px] h-full border-r-[1px] border-[#000000] rounded-[20px] ">
      <Introduce />
      <MenuPage />
      <LogOut />
    </div>
  );
};

export default MenuBar;
