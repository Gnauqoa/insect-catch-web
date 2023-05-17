import { Box } from "@mui/material";
import React from "react";
import DeviceList from "./DeviceList";
import DetailsDevice from "./DetailsDevice";
import { useParams } from "react-router-dom";
import Introduce from "./Introduce";

const DevicePage = () => {
  const { device_id } = useParams();
  return (
    <div className="flex flex-row w-full">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: device_id ? "24px 20px" : "48px 20px",
          gap: "24px",
          width: "100%",
        }}
        className="flex flex-col px-12 py-5 gap-6 w-full"
      >
        <Introduce />
        <DeviceList />
      </Box>
      <DetailsDevice />
    </div>
  );
};

export default DevicePage;
