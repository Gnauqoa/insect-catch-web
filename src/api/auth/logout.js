import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { removeAccessToken } from "../../localStorage";

export const Logout = async () => {
  removeAccessToken();
  signOut(auth);
};
