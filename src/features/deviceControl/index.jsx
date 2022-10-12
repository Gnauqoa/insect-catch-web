import { Box, IconButton, Link, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { MuiColorInput } from "mui-color-input";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import Battery90Icon from "@mui/icons-material/Battery90";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery20Icon from "@mui/icons-material/Battery20";
import Battery1BarIcon from "@mui/icons-material/Battery1Bar";
import Humi from "./assets/humi.svg";
import Rain from "./assets/rain.svg";
import Day from "./assets/day.svg";
import Night from "./assets/night.svg";
import Raining from "./assets/raining.svg";
import CameraIcon from "@mui/icons-material/Camera";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center gap-4">
        <Link underline="none" href="/device">
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link>
        <p className="font-[700] text-[48px]">Device name</p>
      </div>
      <p className="font-[400] text-[#979CA5] text-[16px]">
        Hmmm, your device seem work very good!
      </p>
    </div>
  );
};

const MainArea = ({
  isCharging = 0,
  battery = 96,
  temp = 27,
  humi = 30,
  rain = 0.2,
  optic = 245,
}) => {
  const [colorLed, setColorLed] = useState("#ffffff");
  const handleColorChange = (color) => {
    setColorLed(color);
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row">
        <img className="w-[300px]" src={Day} />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 400,
            }}
          >
            17th Jun '21
          </Typography>
          <div className="flex flex-row gap-1">
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Thursday |
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              2:45 am
            </Typography>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-4">
          <div className="flex flex-row gap-2 item-center">
            <DeviceThermostatIcon />
            <Typography>Temperature:</Typography>
            <Typography>{temp}°C</Typography>
          </div>
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex  flex-row gap-2 item-center">
            <img src={Humi} />
            <Typography>Humidity:</Typography>
            <Typography>{humi}%</Typography>
          </div>{" "}
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row gap-2">
            <img src={Rain} />
            <Typography>Rain: </Typography>
            <Typography>{rain}%</Typography>
          </div>{" "}
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row gap-2">
            <WbTwilightIcon />
            <Typography>Optic: </Typography>
            <Typography>{optic}</Typography>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
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
            {isCharging ? (
              <ElectricBoltIcon />
            ) : battery > 90 ? (
              <BatteryFullIcon />
            ) : battery > 80 ? (
              <Battery90Icon />
            ) : battery > 60 ? (
              <Battery80Icon />
            ) : battery > 50 ? (
              <Battery60Icon />
            ) : battery > 30 ? (
              <Battery50Icon />
            ) : battery > 20 ? (
              <Battery30Icon />
            ) : battery > 5 ? (
              <Battery20Icon />
            ) : (
              <Battery1BarIcon />
            )}
            <Typography>{battery}%</Typography>
            <Slider
              disabled
              defaultValue={battery}
              sx={{
                width: "100%",
                height: 10,
                padding: 0,
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
          </Box>
        </div>

        <div className="flex flex-col gap-2 select-none">
          <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
            Color led
          </Typography>
          <MuiColorInput value={colorLed} onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

const LocationArea = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex flex-col h-full gap-4">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Camera picture
          </Typography>
          <CameraIcon />
        </div>
        <div className="flex flex-col select-none overflow-hidden border-[2px] border-[#9D9AA4] h-[90%]"></div>
      </div>
      <div className="flex flex-col h-full gap-2 overflow-hidden">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            GPS location
          </Typography>
          <LocationOnIcon />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-2">
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Longitude:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>11</Typography>
          </div>
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row items-center gap-2">
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Latitude:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>11</Typography>
          </div>
        </div>
        <div className="overflow-hidden">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

const DeviceControl = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-row w-full h-full rounded-[32px] overflow-auto">
        <div className="flex flex-col min-w-[50%] gap-16 xl:p-14 p-6">
          <Introduce />
          <MainArea />
        </div>
        <div className="flex flex-col w-full bg-[#F6F2DD] xl:p-14 p-6 overflow-hidden">
          <LocationArea />
        </div>
      </div>
    </div>
  );
};

export default DeviceControl;
