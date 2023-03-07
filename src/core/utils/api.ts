import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.myshiyach.com",
});

export default instance;
