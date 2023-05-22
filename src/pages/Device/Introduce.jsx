import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "assets/icon/icon_arrow_left.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Introduce = () => {
  const { device_id, lang } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const device_list = useSelector((state) => state.deviceList);
  if (device_id)
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
  return (
    <div>
      <Typography
        sx={{ color: "text_neutral.main", fontSize: 24, fontWeight: 700 }}
      >
        {t("device.title")}
      </Typography>
      <div className="flex flex-row items-center gap-3">
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: "#03030AA6" }}>
          {device_list ? device_list.length : 0} {t("device.text_count")}
        </Typography>
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
    </div>
  );
};

export default Introduce;
