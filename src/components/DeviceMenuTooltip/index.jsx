import CustomTooltip from "components/CustomTooltip";
import React from "react";
import Menu from "./Menu";
import DeleteModal from "./DeleteModal";
import useToggle from "hooks/useToggle";

const DeviceMenuTooltip = ({
  children,
  placement,
  onClose,
  open,
  device_id,
}) => {
  const [deleteModal, toggleDeleteModal, showDeleteModal, hideDeleteModal] =
    useToggle();
  return (
    <div>
      <DeleteModal
        open={deleteModal}
        onClose={hideDeleteModal}
        device_id={device_id}
      />
      <CustomTooltip
        disableFocusListener
        disableTouchListener
        title={
          <div onClick={onClose}>
            <Menu onDelete={showDeleteModal} />
          </div>
        }
        placement={placement}
        open={open}
        onClose={onClose}
      >
        {children}
      </CustomTooltip>
    </div>
  );
};

export default DeviceMenuTooltip;
