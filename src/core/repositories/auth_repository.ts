import LoginResult from "../models/login_result";
import axiosInstance from '../utils/api';
import LoginRequest from "../models/login_request";

export async function login(loginRequest: LoginRequest): Promise<LoginResult> {
    let result = await axiosInstance.post('/auth', loginRequest);
    return result.data as LoginResult;
}