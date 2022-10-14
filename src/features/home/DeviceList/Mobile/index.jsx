import { Button, IconButton, Slider, Tooltip, Typography } from "@mui/material";
import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import WifiIcon from "@mui/icons-material/Wifi";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

const DeviceInfo = ({ imgUrl, name, desc, create, status, battery }) => {
  return (
    <div className="flex flex-col w-full gap-4 border-[1px] rounded-[20px] border-[#000000] p-[25px] pt-[15px] pb-[15px]">
      <div className="grid grid-cols-4 w-full items-center justify-between">
        <img className="w-[70px]" src={imgUrl} />
        <div className="flex flex-col justify-center">
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#121212",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#94918A",
            }}
          >
            {desc}
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 700,
            color: "#121212",
          }}
        >
          {create}
        </Typography>
        <div className="flex flex-col items-center ml-auto">
          <Tooltip
            title={
              status === 1
                ? "Connected by Wifi"
                : status === 0
                ? "Disconnected"
                : "Connected by GPRS"
            }
          >
            <IconButton sx={{ color: "#000000" }}>
              {status === 1 ? (
                <WifiIcon />
              ) : status === 0 ? (
                <WifiOffIcon />
              ) : (
                <CellWifiIcon />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ElectricBoltIcon />
        <Typography
          sx={{
            color:
              battery > 75
                ? "batterySlider.high"
                : battery > 50
                ? "batterySlider.good"
                : battery > 25
                ? "batterySlider.normal"
                : battery > 10
                ? "batterySlider.week"
                : "batterySlider.veryWeek",
          }}
        >
          {battery}%
        </Typography>
        <Slider
          disabled
          defaultValue={battery}
          sx={{
            width: "100%",
            height: 10,
            padding: 0,
            color: "success.main",
            "& .MuiSlider-thumb": {
              borderRadius: "1px",
              height: "0px",
              width: "0px",
            },
            "&.Mui-disabled": {
              color:
                battery > 75
                  ? "batterySlider.high"
                  : battery > 50
                  ? "batterySlider.good"
                  : battery > 25
                  ? "batterySlider.normal"
                  : battery > 10
                  ? "batterySlider.week"
                  : "batterySlider.veryWeek",
            },
          }}
        />
      </div>
    </div>
  );
};

const DeviceListMobile = () => {
  const deviceData = useSelector((state) => state.deviceData.deviceData)
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-row">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Your device
        </Typography>
        <div className="ml-auto flex flex-col items-center">
          <Button
            sx={{
              color: "#FFD143",
              textTransform: "none",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            <Typography
              sx={{
                color: "#FFD143",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              View All
            </Typography>
          </Button>
        </div>
      </div>
      {deviceData.slice(0,3).map((data, index) => (
        <DeviceInfo
          key={"device info " + index}
          imgUrl={data.imgUrl}
          name={data.name}
          desc={data.desc}
          create={data.create}
          battery={data.battery}
          status={data.status}
        />
      ))}
    </div>
  );
};

export default DeviceListMobile;
