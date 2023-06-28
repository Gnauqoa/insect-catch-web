import { Box, CircularProgress, IconButton, SvgIcon } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as IconClose } from "assets/icon/icon_close.svg";
import Introduce from "./Introduce";
import DeviceControl from "./DeviceControl";
import useAPI from "hooks/useApi";

const Container = () => {
  const { device_id, lang } = useParams();
  const navigate = useNavigate();
  const [getDevice, loading, currentDevice] = useAPI(
    `/v2/user/device/${device_id}`,
    "get"
  );
  useEffect(() => {
    if (device_id) getDevice();
  }, [device_id]);
  if (device_id)
    return (
      <div className="flex flex-col py-6 pl-3">
        <IconButton
          sx={{ width: 28, height: 28 }}
          onClick={() => navigate(`/${lang}/dashboard/device`)}
        >
          <SvgIcon component={IconClose} inheritViewBox={true}></SvgIcon>
        </IconButton>
        <div className="flex flex-col pl-[32px] gap-12 w-full relative ">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Introduce
                name={currentDevice?.data.data.name}
                status={currentDevice?.data.data.status}
              />
              <DeviceControl device={currentDevice?.data.data} />
            </>
          )}
        </div>
      </div>
    );
  return <></>;
};
const DeviceDetails = () => {
  const { device_id, page } = useParams();
  const navigate = useNavigate();
  if (device_id && !page) navigate("control");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: device_id ? "75%" : "0%",
        width: device_id ? "75%" : "0%",
        transition: "min-width 0.3s",
        boxShadow: "0px 8px 32px rgba(33, 34, 39, 0.1)",
        zIndex: 30,
        minHeight: "100vh",
        height: "100vh",
        overflow: "auto",
        position: "relative",
      }}
    >
      <Container />
    </Box>
  );
};

export default DeviceDetails;
