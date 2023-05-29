import { Button, CircularProgress, Typography } from "@mui/material";
import CustomModal from "components/CustomModal";
import useAPI from "hooks/useApi";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setDeviceList } from "reducers/deviceListReducer";

const DeleteModal = ({ open, onClose, device_id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [deleteDevice, loading, res, err] = useAPI(
    `/v2/user/device/${device_id}`,
    "delete"
  );
  const [getDeviceList] = useAPI("/v2/user/device", "get");
  const handleDelete = () => {
    deleteDevice()
      .then((res) => {
        toast.success("Delete success");
        getDeviceList().then((device_list_res) => {
          dispatch(setDeviceList(device_list_res.data.data.items));
        });
        onClose();
      })
      .catch((err) => {
        toast.error(err.message);
        onClose();
      });
  };
  return (
    <CustomModal open={open} onClose={onClose}>
      <div className="flex flex-col bg-[#fff] py-5 px-6 w-[500px] rounded-[8px]">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: "#1C1A1F",
            paddingBottom: "20px",
          }}
        >
          {t("deviceMenu.deleteModal.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#4A4553",
            paddingY: "16px",
          }}
        >
          {t("deviceMenu.deleteModal.content")}
        </Typography>
        <div className="flex flex-row items-center gap-2 pt-5 ml-auto">
          <Button
            onClick={handleDelete}
            sx={{ padding: "12px" }}
            variant="primary filled"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : t("text.yes")}
          </Button>
          <Button
            onClick={onClose}
            sx={{ padding: "12px" }}
            variant="primary link"
          >
            {t("text.no")}
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
export default DeleteModal;
