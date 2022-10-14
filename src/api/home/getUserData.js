import { db } from "../../firebase";

import { doc, getDoc } from "firebase/firestore";
import { getAccessToken } from "../../localStorage";

export const getUserData = async () => {
  try {
    const docRef = doc(db, "users", getAccessToken().uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log({ error: "can't found user data" });
    }
  } catch (err) {}
};
