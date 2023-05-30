import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconMenu } from "assets/icon/icon_menu.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ReactComponent as IconEmpty } from "assets/icon/icon_empty_box.svg";
import { ReactComponent as IconAdd } from "assets/icon/icon_box_add.svg";
import { Button } from "@mui/material";
import AddDeviceModal from "components/AddDeviceModal";
import useToggle from "hooks/useToggle";

const DetailsIntroduce = () => {
  const { t } = useTranslation();
  const device_list = useSelector((state) => state.deviceList);
  const [addModal, toggleAdddModal, openAddModal, closeAddModal] = useToggle();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: device_list?.length ? "0%" : "100%",
      }}
    >
      <AddDeviceModal open={addModal} onClose={closeAddModal} />
      <div className="flex flex-row items-start pr-8">
        <Typography
          sx={{ color: "text_neutral.main", fontSize: 24, fontWeight: 700 }}
        >
          {t("device.title")}
        </Typography>
        <Button
          onClick={openAddModal}
          startIcon={<SvgIcon inheritViewBox component={IconAdd} />}
          sx={{ width: "180px", marginLeft: "auto" }}
          variant="primary filled"
        >
          {t("device.addButton")}{" "}
        </Button>
      </div>

      {device_list?.length ? (
        <TotalDevice />
      ) : (
        <AddDeviceAlert openAddModal={openAddModal} />
      )}
    </Box>
  );
};
const TotalDevice = () => {
  const { t } = useTranslation();
  const device_list = useSelector((state) => state.deviceList);
  return (
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
  );
};
const AddDeviceAlert = ({ openAddModal }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-3">
      <SvgIcon
        inheritViewBox={true}
        component={IconEmpty}
        sx={{ width: 130, height: 130 }}
      />
      <Typography sx={{ fontSize: 14, fontWeight: 400, color: "#5C5668" }}>
        {t("device.emptyText")}{" "}
      </Typography>
      <Button
        onClick={openAddModal}
        startIcon={<SvgIcon inheritViewBox component={IconAdd} />}
        sx={{ width: "180px" }}
        variant="primary filled"
      >
        {t("device.addButton")}{" "}
      </Button>
    </div>
  );
};
export default DetailsIntroduce;
