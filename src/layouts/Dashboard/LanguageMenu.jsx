import { Box, SvgIcon, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ReactComponent as IconTranslate } from "assets/icon/icon_translate.svg";
import { useTranslation } from "react-i18next";
import CustomTooltip from "components/CustomTooltip";
import { ReactComponent as IconFlagVN } from "assets/icon/icon_vietnam_flag.svg";
import { ReactComponent as IconFlagUK } from "assets/icon/icon_uk_flag.svg";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { t } from "i18next";

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
        className="flex flex-row items-center gap-2 p-3 cursor-pointer"
      >
        <SvgIcon inheritViewBox={true} component={iconFlag} />
        <Typography
          sx={{ fontSize: 14, fontWeight: 600, color: "text_neutral.main" }}
        >
          {name}
        </Typography>
      </Box>
    </div>
  );
};
const LanguageMenu = () => {
  return (
    <CustomTooltip
      title={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "#F6F6F6",
            paddingY: "8px",
            borderRadius: "8px",
            boxShadow: "inset 0px -1px 0px #EAEAEA",
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
        <SvgIcon component={IconTranslate} inheritViewBox={true} />
      </Box>
    </CustomTooltip>
  );
};

export default LanguageMenu;
