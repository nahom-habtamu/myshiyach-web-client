import axiosInstance from "../utils/api";

export async function getAllCities(): Promise<string[]> {
  let result = await axiosInstance.get("/cities");
  return result.data as string[];
}
