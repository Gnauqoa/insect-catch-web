import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { ReactComponent as IconCube } from "assets/icon/icon_cube.svg";
import { Link, useParams } from "react-router-dom";

const DeviceList = () => {
  const { device_id } = useParams();
  if (device_id)
    return (
      <div className="flex flex-col">
        <DeviceNodeSummary name="252" checked={true} />
      </div>
    );
  return (
    <div className="flex flex-col w-full">
      <ColumnHeader />
      <DeviceNode status={false} name="Insert catch" />
    </div>
  );
};
const ColumnHeader = () => {
  return (
    <div className="flex flex-row items-start  px-1 ">
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          Name
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          Status
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          Last update
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          Device ID
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          Action
        </Typography>
      </div>
    </div>
  );
};
const DeviceNode = ({ name, status, updated_at }) => {
  return (
    <Link to="252">
      <div className="flex flex-row items-center py-4 w-full transition-colors hover:bg-[#03030A05] cursor-pointer">
        <div className="flex flex-col w-full px-3  ">
          <Typography
            sx={{ fontSize: 14, fontWeight: 500, color: "#03030AD9" }}
          >
            {name}
          </Typography>
        </div>
        <div className="flex flex-col w-full px-3 ">
          <div className="flex">
            {status ? (
              <div className="flex flex-row w-auto justify-center px-2 py-1 border-[1px] border-[#c5ead3] rounded-[4px] bg-[#55c686]">
                <Typography
                  sx={{ fontSize: 12, fontWeight: 500, color: "#fff" }}
                >
                  Online
                </Typography>
              </div>
            ) : (
              <div className="flex flex-row w-auto justify-center px-2 py-1 border-[1px] border-[#03030A1A] rounded-[4px] bg-[#f0f0f0]">
                <Typography
                  sx={{ fontSize: 12, fontWeight: 500, color: "#03030AA6" }}
                >
                  Offline
                </Typography>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full px-3 ">
          <Typography
            sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
          >
            {dayjs(updated_at).fromNow()}
          </Typography>
        </div>
        <div className="flex flex-col w-full px-3 ">
          <Typography
            sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
          >
            252
          </Typography>
        </div>
        <div className="flex flex-col w-full px-3">
          <IconButton
            sx={{
              width: 32,
              height: 32,
              border: "1px solid #03030A26",
              borderRadius: "2px",
            }}
          >
            <SvgIcon
              sx={{ width: "100%", height: "100%" }}
              inheritViewBox={true}
              component={IconMenu}
            />
          </IconButton>
        </div>
      </div>
    </Link>
  );
};
const DeviceNodeSummary = ({ name, checked }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        padding: "16px 24px",
        boxShadow: checked ? "0px 0px 16px rgba(33, 34, 39, 0.1)" : "",
        borderRadius: "4px",
        borderLeft: checked ? "5px solid #056838" : "",
      }}
    >
      <SvgIcon
        component={IconCube}
        inheritViewBox={true}
        sx={{ width: 24, height: 24, color: "secondary.main" }}
      />
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 500,
          color: checked ? "secondary.main" : "text_neutral.main",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
export default DeviceList;
