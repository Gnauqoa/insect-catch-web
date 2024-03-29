import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import DeviceList from "./List";
import DeviceDetails from "./Details";
import Introduce from "./Introduce";
import useAPI from "hooks/useApi";
import { useDispatch } from "react-redux";
import { setDeviceList } from "reducers/deviceListReducer";

const DevicePage = () => {
  const dispatch = useDispatch();
  const [getDeviceList, loading] = useAPI("/v2/user/device", "get");
  useEffect(() => {
    getDeviceList().then((res) => {
      dispatch(setDeviceList(res.data.data.items));
    });
  }, []);
  return (
    <div className="flex flex-row w-full relative">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "48px 20px",
          gap: "24px",
          width: "100%",
          background: "#fff",
          zIndex: 10,
          position: "relative",
        }}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <CircularProgress />
          </div>
        ) : (
          <>
            <Introduce />
            <DeviceList />
          </>
        )}
      </Box>
      <DeviceDetails />
    </div>
  );
};

export default DevicePage;
