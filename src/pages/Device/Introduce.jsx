import { IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "assets/icon/icon_arrow_left.svg";

const Introduce = () => {
  const { device_id, lang } = useParams();

  const navigate = useNavigate();
  if (device_id)
    return (
      <div>
        <Typography
          sx={{ color: "text_neutral.main", fontSize: 24, fontWeight: 700 }}
        >
          My Devices
        </Typography>
        <div
          onClick={() => navigate(`/${lang}/dashboard/device`)}
          className="flex flex-row items-center cursor-pointer"
        >
          <IconButton>
            <SvgIcon
              component={IconArrowLeft}
              inheritViewBox={true}
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <Typography
            sx={{ fontSize: 20, fontWeight: 700, color: "text_neutral.main" }}
          >
            Back
          </Typography>
        </div>
      </div>
    );
  return (
    <div>
      <Typography
        sx={{ color: "text_neutral.main", fontSize: 24, fontWeight: 700 }}
      >
        My Devices
      </Typography>
      <div className="flex flex-row items-center gap-3">
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: "#03030AA6" }}>
          2 Devices
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
