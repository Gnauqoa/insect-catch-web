import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconFlagVN } from "assets/icon/icon_vietnam_flag.svg";
import { ReactComponent as IconFlagUK } from "assets/icon/icon_uk_flag.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { t } from "i18next";

const LanguageMenu = () => {
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
      <LanguageOption
        name={t("dashboard.lang.vi")}
        iconFlag={IconFlagVN}
        current_lang={"vi"}
      />
      <LanguageOption
        name={t("dashboard.lang.en")}
        iconFlag={IconFlagUK}
        current_lang={"en"}
      />
    </Box>
  );
};
const LanguageOption = ({ iconFlag, name, current_lang }) => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const path = useLocation().pathname.split("/").slice(2).join("/");
  return (
    <div onClick={() => navigate(`/${current_lang}/${path}`)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          cursor: "pointer",
          background: lang === current_lang ? "#fbb326" : "#fff",
          ":hover": {
            background: lang === current_lang ? "#fbb326" : "#fff2db",
          },
        }}
        className="flex flex-row items-center gap-2 p-2 cursor-pointer"
      >
        <SvgIcon
          sx={{ width: 20, height: 20 }}
          inheritViewBox={true}
          component={iconFlag}
        />
        <Typography
          sx={{ fontSize: 14, fontWeight: 600, color: "text_neutral.main" }}
        >
          {name}
        </Typography>
      </Box>
    </div>
  );
};
export default LanguageMenu;
