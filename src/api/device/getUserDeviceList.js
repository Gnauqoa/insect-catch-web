import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getDeviceIdList } from "./getDeviceIdList";

export const getUserDeviceList = async () => {
  try {
    const arrayID = await getDeviceIdList();
    if(arrayID === undefined) return [];
    const deviceRef = collection(db, "device");
    const q = query(
      deviceRef,
      where("id", "in", arrayID)
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    return err;
  }
};
