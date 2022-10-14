import { Button, Link, Slider, Tooltip, Typography } from "@mui/material";
import React from "react";
import Alert1 from "./assets/alert1.png";
import PlaceIcon from "@mui/icons-material/Place";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import WifiIcon from "@mui/icons-material/Wifi";
import CellWifiIcon from "@mui/icons-material/CellWifi";

const DeviceNode = ({ status, name, location }) => {
  return (
    <Link href="/device/control" underline="none">
      <div
        className={
          "flex flex-col w-full gap-4 p-2 hover:transition-all border-[2px] border-transparent rounded-[24px] hover:border-[" +
          (status === 1 ? "#2A9F47" : status === 0 ? "#E1251B" : "#FFAB00") +
          "]"
        }
      >
        <div className="rounded-[30px] h-[250px] overflow-hidden">
          <img className="w-auto h-full  object-cover" src={Alert1} alt="camera img" />
        </div>
        <div className="flex flex-col gap-2 pb-2 border-b-[1px] border-[#E6E8EC]">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              color: "#23262F",
            }}
          >
            {name}
          </Typography>
          <div className="flex flex-row gap-1">
            <PlaceIcon sx={{ color: "#777E90" }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 14,
                color: "#777E90",
              }}
            >
              {location}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Tooltip
            title={
              status === 1
                ? "Connected by Wifi"
                : status === 0
                ? "Disconnected"
                : "Connected by GPRS"
            }
          >
            <div className="select-none flex flex-row items-center justify-center gap-2">
              {status === 1 ? (
                <WifiIcon
                  sx={{
                    color: "#2A9F47",
                  }}
                />
              ) : status === 0 ? (
                <WifiOffIcon
                  sx={{
                    color: "#E1251B",
                  }}
                />
              ) : (
                <CellWifiIcon />
              )}

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  color:
                    status === 1 ? "#2A9F47" : status === 0 ? "#E1251B" : "",
                }}
              >
                {status === 1
                  ? "Connected by Wifi"
                  : status === 0
                  ? "Disconnected"
                  : "Connected by GPRS"}
              </Typography>
            </div>
          </Tooltip>
        </div>
      </div>
    </Link>
  );
};

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 48,
        }}
      >
        Your device
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 16,
          color: "#979CA5",
        }}
      >
        Welcome back, This is all your device.
      </Typography>
    </div>
  );
};
const MainArea = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <DeviceNode
        name="Device name"
        location="136 Ho Tung Mau, Nam Tu Liem, Ha Noi"
        status={1}
      />
      <DeviceNode
        name="Device name"
        location="136 Ho Tung Mau, Nam Tu Liem, Ha Noi"
        status={0}
      />
      <DeviceNode
        name="Device name"
        location="136 Ho Tung Mau, Nam Tu Liem, Ha Noi"
        status={2}
      />
      <DeviceNode
        name="Device name"
        location="136 Ho Tung Mau, Nam Tu Liem, Ha Noi"
        status={1}
      />
    </div>
  );
};
const DevicePage = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col xl:p-14 p-6 w-full h-full rounded-[32px] overflow-auto">
        <Introduce />
        <MainArea />
      </div>
    </div>
  );
};

export default DevicePage;
