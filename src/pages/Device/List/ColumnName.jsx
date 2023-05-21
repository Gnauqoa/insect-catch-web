import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ColumnName = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row items-start  px-1 ">
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          {t("device.name_column")}
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          {t("device.status_column")}
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          {t("device.update_column")}
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          {t("device.id_column")}
        </Typography>
      </div>
      <div className="flex flex-col w-full hover:bg-[#f0f0f1] bg-[#03030A05] transition-colors py-3 px-3">
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, color: "text_neutral.main" }}
        >
          {t("device.action_column")}
        </Typography>
      </div>
    </div>
  );
};

export default ColumnName;
