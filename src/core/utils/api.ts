import axios from "axios";

const instance = axios.create({
  baseURL: "https://myshiyach.com/api",
});

export default instance;
