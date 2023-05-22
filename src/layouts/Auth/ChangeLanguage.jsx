import { Box, SvgIcon } from "@mui/material";
import CustomTooltip from "components/CustomTooltip";
import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconFlagUK } from "assets/icon/icon_uk_flag.svg";
import { ReactComponent as IconFlagVN } from "assets/icon/icon_vietnam_flag.svg";
import LanguageMenu from "components/LanguageMenu";

const ChangeLanguage = () => {
  const { lang } = useParams();
  return (
    <CustomTooltip title={<LanguageMenu />} placement="top-end">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: 25,
          bottom: 20,
          background: "#fff",
          padding: "8px 24px",
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.34)",
          borderRadius: "8px",
          ":hover": {
            background: "#fff2db",
          },
          transition: "all 0.2s ease",
        }}
      >
        <SvgIcon
          inheritViewBox={true}
          component={lang === "vi" ? IconFlagVN : IconFlagUK}
        />
      </Box>
    </CustomTooltip>
  );
};

export default ChangeLanguage;
