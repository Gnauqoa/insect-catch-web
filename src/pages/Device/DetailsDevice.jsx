import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const DetailsDevice = () => {
  const { device_id } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        minWidth: device_id ? "75%" : "0%",
        width: device_id ? "75%" : "0%",
        transition: "min-width 0.3s",
        boxShadow: "0px 8px 32px rgba(33, 34, 39, 0.1)",
      }}
    ></Box>
  );
};

export default DetailsDevice;
