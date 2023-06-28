import { IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconCube } from "assets/icon/icon_cube.svg";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { ReactComponent as IconUser } from "assets/icon/icon_user.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Introduce = ({ name, status }) => {
  const { t } = useTranslation();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col w-[96px] h-[96px] p-7 border-[1px] border-[#03030A0F] rounded-[4px]">
        <SvgIcon
          sx={{ width: "100%", height: "100%", color: "primary.main" }}
          inheritViewBox={true}
          component={IconCube}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center min-h-fit gap-4">
          <Typography
            sx={{ fontSize: 23, fontWeight: 700, color: "#03030AD9" }}
          >
            {name}
          </Typography>
          {status ? (
            <div className="flex flex-row w-auto justify-center px-2 py-1 border-[1px] border-[#c5ead3] rounded-[4px] bg-[#55c686]">
              <Typography sx={{ fontSize: 12, fontWeight: 500, color: "#fff" }}>
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
        <div className="flex flex-row items-center gap-2">
          <SvgIcon
            sx={{ width: 24, height: 24, color: "secondary.main" }}
            inheritViewBox={true}
            component={IconUser}
          />
          <Typography
            sx={{ fontSize: 16, fontWeight: 400, color: "secondary.main" }}
          >
            {currentUser.last_name}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
