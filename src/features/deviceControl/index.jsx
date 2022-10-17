import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Link,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import Afternoon from "./assets/afternoon.svg";
import CameraIcon from "@mui/icons-material/Camera";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceControlData } from "../../api/device/getDeviceControlData";
import { updateDeviceControlData } from "./reducer";
import { useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { setDeviceControlData } from "../../api/device/setDeviceControlData";

const Introduce = () => {
  const deviceControlData = useSelector((state) => state.deviceControlData);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center gap-4">
        <Link underline="none" href="/device">
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 48,
          }}
        >
          {deviceControlData.name}
        </Typography>
      </div>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 16,
          color: "#979CA5",
        }}
      >
        Hmmm, your device seem work very good!
      </Typography>
    </div>
  );
};
const MainArea = ({ isCharging = 0, rain = 0.2, weather = 1 }) => {
  const deviceControlData = useSelector((state) => state.deviceControlData);
  const dispatch = useDispatch();
  const handleColorChange = (color) => {
    dispatch(
      updateDeviceControlData({ ...deviceControlData, ledColor: "#ffffff" })
    );
  };
  const handleBrightnessChange = (e, value) => {
    dispatch(
      updateDeviceControlData({ ...deviceControlData, brightness: value })
    );
  };
  return (
    <div className="relative w-full ">
      <div className="flex flex-col gap-12 relative">
        <div className="flex flex-row">
          <div className="flex flex-col h-[300px] w-full overflow-hidden">
            <img
              className="h-full w-auto"
              src={
                weather === 1
                  ? Day
                  : weather === 2
                  ? Afternoon
                  : weather === 3
                  ? Night
                  : Raining
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="flex flex-row gap-2 item-center">
                <DeviceThermostatIcon />
                <Typography>Temperature:</Typography>
                <Typography>{deviceControlData.temp}°C</Typography>
              </div>
              <div className="xl:flex hidden w-[2px] h-[full] bg-[#000000]" />
              <div className="flex  flex-row gap-2 item-center">
                <img src={Humi} />
                <Typography>Humidity:</Typography>
                <Typography>{deviceControlData.humi}%</Typography>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="flex flex-row gap-2">
                <img src={Rain} />
                <Typography>Rain: </Typography>
                <Typography>{rain}%</Typography>
              </div>
              <div className="xl:flex hidden w-[2px] h-[full] bg-[#000000]" />
              <div className="flex flex-row gap-2">
                <WbTwilightIcon />
                <Typography>Optic: </Typography>
                <Typography>{deviceControlData.optic}</Typography>
              </div>
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
                  deviceControlData.battery > 75
                    ? "batterySlider.high"
                    : deviceControlData.battery > 50
                    ? "batterySlider.good"
                    : deviceControlData.battery > 25
                    ? "batterySlider.normal"
                    : deviceControlData.battery > 10
                    ? "batterySlider.week"
                    : "batterySlider.veryWeek",
              }}
            >
              {isCharging ? (
                <ElectricBoltIcon />
              ) : deviceControlData.battery > 90 ? (
                <BatteryFullIcon />
              ) : deviceControlData.battery > 80 ? (
                <Battery90Icon />
              ) : deviceControlData.battery > 60 ? (
                <Battery80Icon />
              ) : deviceControlData.battery > 50 ? (
                <Battery60Icon />
              ) : deviceControlData.battery > 30 ? (
                <Battery50Icon />
              ) : deviceControlData.battery > 20 ? (
                <Battery30Icon />
              ) : deviceControlData.battery > 5 ? (
                <Battery20Icon />
              ) : (
                <Battery1BarIcon />
              )}
              <Typography>{deviceControlData.battery}%</Typography>
              <Slider
                disabled
                value={parseInt(deviceControlData.battery)}
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
                      deviceControlData.battery > 75
                        ? "batterySlider.high"
                        : deviceControlData.battery > 50
                        ? "batterySlider.good"
                        : deviceControlData.battery > 25
                        ? "batterySlider.normal"
                        : deviceControlData.battery > 10
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
            <MuiColorInput
              value={deviceControlData.ledColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="flex flex-col gap-2 select-none">
            <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
              Brightness
            </Typography>
            <div className="flex flex-row gap-4 items-center">
              <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                {deviceControlData.brightness}%
              </Typography>
              <Slider value={deviceControlData.brightness} onChange={handleBrightnessChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationArea = () => {
  const deviceControlData = useSelector((state) => state.deviceControlData);
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex flex-col max-h-[50%] gap-4">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Camera picture
          </Typography>
          <CameraIcon />
        </div>
        <div className="flex flex-col select-none overflow-hidden border-[2px] border-[#9D9AA4] h-[100%]">
          <img src={deviceControlData.imgUrl} />
        </div>
      </div>
      <div className="flex flex-col h-full gap-2 overflow-hidden">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            GPS location
          </Typography>
          <LocationOnIcon />
        </div>
        <div className="flex flex-row gap-4">
          <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
            Longitude: {deviceControlData.coordinates.longitude}
          </Typography>
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
            Latitude: {deviceControlData.coordinates.latitude}
          </Typography>
        </div>
        <div className="overflow-hidden">
          <MapContainer
            key={Math.random()}
            center={[
              deviceControlData.coordinates.longitude - 0.06,
              deviceControlData.coordinates.latitude,
            ]}
            style={{ height: "100vh", width: "100wh" }}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                deviceControlData.coordinates.longitude,
                deviceControlData.coordinates.latitude,
              ]}
            >
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
  const [onSaving, setOnSaving] = useState(false);
  const deviceControlData = useSelector((state) => state.deviceControlData);

  const params = useParams();
  const dispatch = useDispatch();
  const handleGetDeviceControlData = async () => {
    const response = await getDeviceControlData(params.deviceID);
    dispatch(updateDeviceControlData(response));
  };
  const handleSave = async () => {
    setOnSaving(true);
    const res = await setDeviceControlData(
      { deviceControlData },
      params.deviceID
    );
    setOnSaving(false);
  };
  useEffect(() => {
    handleGetDeviceControlData();
  }, []);
  return (
    <div className="xl:h-screen">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={onSaving}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex xl:flex-row  flex-col w-full h-full rounded-[32px]">
        <div className="flex flex-col relative xl:min-w-[50%] ">
          <div className="flex flex-col w-full h-0 sticky top-[50%] pr-[20px] z-10 items-end ">
            <IconButton
              size="large"
              onClick={handleSave}
              disabled={onSaving}
              color="success"
            >
              <SaveIcon />
            </IconButton>
          </div>
          <div className="flex flex-col gap-16 xl:p-16 p-8 overflow-x-auto">
            <Introduce />
            <MainArea />
          </div>
        </div>
        <div className="flex flex-col w-full xl:h-full h-screen bg-[#F6F2DD] xl:p-14 p-6 overflow-hidden">
          <LocationArea />
        </div>
      </div>
    </div>
  );
};

export default DeviceControl;
