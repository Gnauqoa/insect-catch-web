import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as IconRemove } from "assets/icon/icon_box_remove.svg";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        paddingY: "4px",
        borderRadius: "8px",
      }}
    >
      <div className="flex flex-row items-center gap-2 py-3 px-4 cursor-pointer bg-[#fff] hover:bg-[#f0f0f1] border-0">
        <SvgIcon
          sx={{ width: 20, height: 20, color: "#E1251B" }}
          inheritViewBox={true}
          component={IconRemove}
        />
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#E1251B" }}>
          {t("deviceMenu.remove")}
        </Typography>
      </div>
    </Box>
  );
};

export default Menu;
