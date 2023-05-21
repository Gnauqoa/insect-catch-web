import { IconButton, SvgIcon, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DeviceNode = ({ name, status, updated_at }) => {
  const { t } = useTranslation();
  return (
    <Link to="252">
      <div className="flex flex-row items-center py-4 w-full group transition-colors hover:bg-[#03030A05] cursor-pointer">
        <div className="flex flex-col w-full px-3  ">
          <Typography
            className="group-hover:text-primary-main"
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
                  {t("device.online_text")}
                </Typography>
              </div>
            ) : (
              <div className="flex flex-row w-auto justify-center px-2 py-1 border-[1px] border-[#03030A1A] rounded-[4px] bg-[#f0f0f0]">
                <Typography
                  sx={{ fontSize: 12, fontWeight: 500, color: "#03030AA6" }}
                >
                  {t("device.offline_text")}
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
            className="group-hover:text-primary-main"
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

export default DeviceNode;
