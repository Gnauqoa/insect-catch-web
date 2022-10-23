import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";


// not use this function, now use realtime db 
export const getDeviceControlData = async (deviceID) => {
  try {
    const docRef = doc(db, "device", deviceID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log({ error: "can't found device data" });
    }
  } catch (err) {}
};
