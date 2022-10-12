import { Typography } from "@mui/material";
import React from "react";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
// add weather read and weather sensor
// https://dribbble.com/tags/weather_website
// https://dribbble.com/tags/temperature
const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="font-[700] text-[48px]">Device name</p>
      <p className="font-[400] text-[#979CA5] text-[16px]">
        Hmmm, your device seem work very good!
      </p>
    </div>
  );
};

const MainArea = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <Typography sx={{ fontSize: 72, fontWeight: 700 }}>27</Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 400 }}> ° C</Typography>
      </div>
      <div className="flex flex-col gap-2">
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
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Thursday |
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            2:45 am
          </Typography>
        </div>
      </div>
      <div className="flex flex-col">
          
      </div>
    </div>
  );
};

const DeviceControl = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col xl:p-14 p-6 w-full h-full rounded-[32px] overflow-auto gap-16">
        <Introduce />
        <MainArea />
      </div>
    </div>
  );
};

export default DeviceControl;
