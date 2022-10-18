import SignUpRequest from "../models/signup_request";
import User from "../models/user";
import axiosInstance from "../utils/api";

export async function registerUser(
  signUpRequest: SignUpRequest
): Promise<User> {
  let result = await axiosInstance.post("/users", signUpRequest);
  return result.data as User;
}
