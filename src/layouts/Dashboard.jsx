import { Box, SvgIcon, Tooltip } from "@mui/material";
import React from "react";
import { ReactComponent as IconDevice } from "assets/icon/icon_device.svg";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DashBoardLayout = () => {
  return (
    <div className="flex flex-row w-full relative">
      <Menu />
      <Outlet />
    </div>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "1px 0px 15px rgba(33, 34, 39, 0.1)",
        paddingTop: "48px",
        zIndex: "30",
      }}
    >
      <MenuOption
        icon={IconDevice}
        checked={true}
        title={t("dashboard.device_title")}
        to="device"
      />
    </Box>
  );
};

const MenuOption = ({ icon, title, checked, to }) => {
  return (
    <Tooltip placement="right" title={title}>
      <Link to={to}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            color: "text_neutral.main",
            background: checked ? "#fbb326" : "#fff",
            ":hover": {
              background: checked ? "#fbb326" : "#fff2db",
            },
            transition: "all 0.1s ease",
          }}
        >
          <SvgIcon component={icon} inheritViewBox={true} />
        </Box>
      </Link>
    </Tooltip>
  );
};
export default DashBoardLayout;
