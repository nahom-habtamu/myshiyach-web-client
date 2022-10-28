import MainCategory from "../models/category/main_category";
import axiosInstance from "../utils/api";

export async function getAllCategories(): Promise<[MainCategory]> {
  let result = await axiosInstance.get("/products/getPaginated");
  return result.data as [MainCategory];
}
