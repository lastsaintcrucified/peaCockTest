import { app } from "./firebase.service";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

await setDoc(doc(db, "students", "LA"), {
  name: "John Doe",
  state: "CA",
  country: "USA",
});
