import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

export const setupFirebase = () => {
  return initializeApp(firebaseConfig);
};
