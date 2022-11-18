import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4KK1uBzCgPUCkRPmcFyXgmKenJY3LCBs",
  authDomain: "mnale-6577c.firebaseapp.com",
  projectId: "mnale-6577c",
  storageBucket: "mnale-6577c.appspot.com",
  messagingSenderId: "98572027350",
  appId: "1:98572027350:web:73f1fbab6e4a726d11d077",
  measurementId: "G-TBXZX79N7M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();

export default {
  app,
  auth,
  storage,
  RecaptchaVerifier,
};
