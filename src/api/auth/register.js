import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

export const SignUp = async (name, email, password, birth) => {
  try {
    
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      birth,
      uid: user.uid,
      job: "famer"
    });
    return res.user;
  } catch (err) {
    return { error: err.message };
  }
};
