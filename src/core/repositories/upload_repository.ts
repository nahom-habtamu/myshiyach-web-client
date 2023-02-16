import firebaseConf from "../config/firebase_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axiosInstance from "../utils/api";
import { CONVERSATION_IMAGE_UPLOAD_KEY, PRODUCT_BUCKET, PRODUCT_IMAGE_UPLOAD_KEY } from "../constants/upload_constants";

export const uploadImagesToFirebase = async (files: File[], bucketName: string) => {
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

export const uploadImagesToApiServer = async (files: File[], bucketName: string) => {
  let urls: string[] = [];

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const formData = new FormData();

    const value = getFormDataKeyAndApiRouteByBucketName(bucketName);

    formData.append(value.formKey, file);
    let result = await axiosInstance.post(`/upload/${value.apiRoute}`, formData, config);
    let url = result.data as string;
    urls = [...urls, url];
  }

  return urls;
};

const getFormDataKeyAndApiRouteByBucketName = (bucketName: string) => {
  return {
    formKey: bucketName === PRODUCT_BUCKET ? PRODUCT_IMAGE_UPLOAD_KEY : CONVERSATION_IMAGE_UPLOAD_KEY,
    apiRoute: bucketName === PRODUCT_BUCKET ? 'productImage' : 'conversationImage'
  }
}
