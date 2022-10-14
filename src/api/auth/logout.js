import { auth } from "../../firebase";
import {signOut} from "firebase/auth"

export const Logout = async () => {
  signOut(auth);
};
