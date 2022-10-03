import React, { useState } from "react";

import AdbIcon from "@mui/icons-material/Adb";
import { Button, IconButton, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";

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
          fontSize: 24,
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
  const MenuOption = [
    { title: "Home", url: "/", icon: <HomeIcon /> },
    { title: "Device", url: "/device", icon: <DeviceHubIcon /> },
    { title: "Settings", url: "/setting", icon: <SettingsApplicationsIcon /> },
  ];
  const [option, setOption] = useState(MenuOption[0].title);
  return (
    <div className="flex flex-col gap-12">
      {MenuOption.map((data, index) => {
        return (
          <Link underline="none" href={data.url} key={"menu option" + index}>
            <Button
              onClick={() => {
                setOption(data.title);
                console.log(option);
              }}
              startIcon={data.icon}
              sx={{
                color:
                  option === data.title ? "text_green.main" : "text_black.main",
                ":hover": {
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
