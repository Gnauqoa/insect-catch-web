import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Button, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuOption } from "../data";
import { removeAccessToken } from "../../../localStorage";
import { Logout } from "../../../api/auth/logout";

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
      <Link href="/auth/login">
        <Button
          onClick={Logout}
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
      </Link>
    </div>
  );
};

const MenuPage = () => {
  const location = useLocation();
  console.log(location);
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

const MenuBarDesktop = () => {
  return (
    <div className="xl:flex hidden bg-[#FFD143] bg-opacity-[0.8] shadow-2xl flex-col relative p-14 gap-[200px] h-full rounded-r-[20px] ">
      <Introduce />
      <MenuPage />
      <LogOut />
    </div>
  );
};

export default MenuBarDesktop;
