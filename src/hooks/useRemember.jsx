import { useState } from "react";
import { setRememberMe } from "services/localStorage";
import { getRememberMe } from "services/localStorage";

const useRemember = () => {
  const [remember, setRemember] = useState(getRememberMe());
  const toggle = () => {
    setRemember(!remember);
    setRememberMe(!remember);
  };
  return [remember, toggle];
};

export default useRemember;
