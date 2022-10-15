import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";

export const setDeviceControlData = async (data, deviceID) => {
  try {
    const res = await updateDoc(doc(db, "device", deviceID), {
      ledColor: data.deviceControlData.ledColor,
      brightness: data.deviceControlData.brightness
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
