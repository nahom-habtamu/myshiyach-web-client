import LoginResult from "../models/LoginResult";
import axiosInstance from '../constants/api';
import LoginRequest from "../models/LoginRequest";

export async function login(loginRequest: LoginRequest): Promise<LoginResult> {
    let result = await axiosInstance.post('/auth', loginRequest);
    return result.data as LoginResult;
}