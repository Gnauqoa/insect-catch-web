import { Box } from "@mui/material";
import React from "react";
import { ReactComponent as IconDevice } from "assets/icon/icon_device.svg";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";
import DashboardOption from "./DashboardOption";
import UserMenu from "./UserMenu";
import useToggle from "hooks/useToggle";

const DashBoardLayout = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname.split("/")[2];
  const [openModal, onToggle, onOpen, onClose] = useToggle();
  return (
    <div className="flex flex-row w-full relative">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "1px 0px 15px rgba(33, 34, 39, 0.1)",
          paddingY: "48px",
          zIndex: "30",
        }}
      >
        <DashboardOption
          icon={IconDevice}
          checked={location === "dashboard"}
          title={t("dashboard.device_title")}
          to="device"
        />
        <div className="flex flex-col mt-auto">
          <LanguageMenu />
          <UserMenu onLogout={onOpen} />
        </div>
      </Box>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
