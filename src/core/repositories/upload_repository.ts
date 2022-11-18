import firebaseConf from "../config/firebase_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImages = async (files: File[], bucketName: string) => {
  let urls: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const storageRef = ref(
      firebaseConf.storage,
      `/${bucketName}/${Date.now().toString() + file.name}`
    );
    const uploadTask = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(uploadTask.ref);

    urls = [...urls, url];
  }

  return urls;
};
