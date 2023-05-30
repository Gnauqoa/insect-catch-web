import { Button, CircularProgress, Typography } from "@mui/material";
import CustomModal from "components/CustomModal";
import MyInput from "components/MyInput";
import useAPI from "hooks/useApi";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setDeviceList } from "reducers/deviceListReducer";

const AddDeviceModal = ({ open, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [addCode, setAddCode] = useState("");
  const [addDevice, loading] = useAPI("v2/user/device/add_device", "post");
  const [getDeviceList] = useAPI("/v2/user/device", "get");

  const handleAdd = () => {
    addDevice({
      add_code: addCode,
    })
      .then((res) => {
        toast.success("Add success!");
        getDeviceList().then((device_list_res) => {
          dispatch(setDeviceList(device_list_res.data.data.items));
        });
        onClose();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        onClose();
      });
  };
  return (
    <CustomModal open={open}>
      <div className="flex flex-col py-5 px-6 w-[500px] bg-[#fff] rounded-[16px]">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: "#1C1A1F",
            paddingBottom: "20px",
          }}
        >
          {t("addModal.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#4A4553",
            paddingY: "16px",
          }}
        >
          {t("addModal.content")}
        </Typography>
        <MyInput
          value={addCode}
          onChange={(e) => {
            setAddCode(e.currentTarget.value);
          }}
          inputProps={{ maxLength: 6 }}
        />
        <div className="flex flex-row items-center gap-2 pt-5 ml-auto">
          <Button
            onClick={handleAdd}
            sx={{ padding: "12px" }}
            variant="primary filled"
            disabled={loading || addCode.length !== 6}
          >
            {loading ? <CircularProgress size={24} /> : t("text.connect")}
          </Button>
          <Button
            onClick={onClose}
            sx={{ padding: "12px" }}
            variant="primary link"
          >
            {t("text.cancel")}
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default AddDeviceModal;
