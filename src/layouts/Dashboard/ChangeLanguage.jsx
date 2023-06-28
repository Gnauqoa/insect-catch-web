import { Box, SvgIcon } from "@mui/material";
import React from "react";
import { ReactComponent as IconTranslate } from "assets/icon/icon_translate.svg";
import CustomTooltip from "components/CustomTooltip";
import LanguageMenu from "components/LanguageMenu";

const ChangeLanguage = () => {
  return (
    <CustomTooltip title={<LanguageMenu />} placement="right">
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
        <SvgIcon
          sx={{ width: 24, height: 24 }}
          component={IconTranslate}
          inheritViewBox={true}
        />
      </Box>
    </CustomTooltip>
  );
};

export default ChangeLanguage;
