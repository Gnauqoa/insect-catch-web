import React from "react";

const IconAtom = ({ src, size = "s", className }) => {
  const getSize = () => {
    if (size === "m") return "iconM";
    if (size === "l") return "iconL";
    if (size === "xl") return "iconXL";
    return "iconS";
  };
  return (
    <div
      className={
        "w-" + getSize() + " overflow-hidden max-h-" + getSize() + " h-auto " + className
      }
    >
      <img className="w-full h-auto" src={src} />
    </div>
  );
};

export default IconAtom;
