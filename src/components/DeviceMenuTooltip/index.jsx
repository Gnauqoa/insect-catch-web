import CustomTooltip from "components/CustomTooltip";
import React from "react";
import Menu from "./Menu";

const DeviceMenuTooltip = ({ children, placement, onClose, open }) => {
  return (
    <div>
      <CustomTooltip
        disableFocusListener
        disableTouchListener
        title={
          <div onClick={onClose}>
            <Menu />
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
