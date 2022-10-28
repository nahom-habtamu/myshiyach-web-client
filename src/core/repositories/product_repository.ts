import GetPaginatedProductsResult from "../models/product/get_paginated_products_result";
import GetPaginatedProductsRequest from "../models/product/get_paginated_product_request";
import Product from "../models/product/product";
import axiosInstance from "../utils/api";

export async function getPaginatedProducts(
  request: GetPaginatedProductsRequest
): Promise<GetPaginatedProductsResult> {
  let result = await axiosInstance.post("/products/getPaginated", request);
  return result.data as GetPaginatedProductsResult;
}

export function getFavoriteProducts(): Product[] {
  let products: Product[] = [];
  return products;
}
