import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { saveAccessToken } from "../../localStorage";

export const SignIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    saveAccessToken({ uid: res.user.uid, token: res.user.accessToken });
    return res;
  } catch (err) {
    return { error: err.message };
  }
};
