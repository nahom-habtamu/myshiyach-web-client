import SignUpRequest from "../models/user/signup_request";
import User from "../models/user/user";
import axiosInstance from "../utils/api";

export async function registerUser(
  signUpRequest: SignUpRequest
): Promise<User> {
  let result = await axiosInstance.post("/users", signUpRequest);
  return result.data as User;
}

export async function getUserById({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<User> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.get(`/users/${id}`, config);
  return result.data as User;
}
