import React from "react";
import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "assets/icon/icon_arrow_left.svg";

const SummaryIntroduce = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      <Typography
        sx={{ color: "text_neutral.main", fontSize: 24, fontWeight: 700 }}
      >
        {t("device.title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
          color: "text_neutral.main",

          gap: "8px",
        }}
      >
        <IconButton
          onClick={() => navigate(`/${lang}/dashboard/device`)}
          sx={{
            width: 24,
            height: 24,
            color: "text_neutral.main",
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <SvgIcon component={IconArrowLeft} inheritViewBox={true} />
        </IconButton>
        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
          {t("device.back_button")}
        </Typography>
      </Box>
    </div>
  );
};

export default SummaryIntroduce;
