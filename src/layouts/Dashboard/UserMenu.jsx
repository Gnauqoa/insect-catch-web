import { Box, SvgIcon, Typography } from "@mui/material";
import CustomTooltip from "components/CustomTooltip";
import React, { useEffect } from "react";
import { ReactComponent as IconProfile } from "assets/icon/icon_profile_circle.svg";
import { ReactComponent as IconLogOut } from "assets/icon/icon_logout.svg";
import { useTranslation } from "react-i18next";
import useToggle from "hooks/useToggle";
import useAPI from "hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "reducers/loginStatusReducer";

const UserMenu = () => {
  const [openTooltip, toggleTooltip, onOpen, onClose] = useToggle(false);
  return (
    <CustomTooltip
      open={openTooltip}
      onOpen={onOpen}
      onClose={onClose}
      title={
        <div onClick={onClose}>
          <OptionList />
        </div>
      }
      placement="right"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          color: "text_neutral.main",
          background: "#fff",
          ":hover": {
            background: "#fff2db",
          },
          transition: "all 0.1s ease",
          cursor: "pointer",
        }}
      >
        <SvgIcon component={IconProfile} inheritViewBox={true} />
      </Box>
    </CustomTooltip>
  );
};
const OptionList = () => {
  const { t } = useTranslation();
  const [logout] = useAPI("/v2/user/current/logout", "delete");
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout().then((res) => {
      dispatch(setLoginStatus({ isChecking: false, isLogin: false }));
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        paddingY: "8px",
        borderRadius: "8px",
        width: "150px",
      }}
    >
      <div
        onClick={handleLogout}
        className="flex flex-row items-center gap-2 p-2 cursor-pointer bg-[#fff] hover:bg-[#f0f0f1] border-0"
      >
        <SvgIcon
          sx={{ width: 20, height: 20, color: "#E1251B" }}
          inheritViewBox={true}
          component={IconLogOut}
        />
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#E1251B" }}>
          {t("dashboard.logout")}
        </Typography>
      </div>
    </Box>
  );
};
export default UserMenu;
