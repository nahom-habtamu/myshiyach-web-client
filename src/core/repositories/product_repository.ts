import CreateProductRequest from "../models/product/create_product_request";
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

export async function refreshProduct({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<Product> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.patch(`/products/refresh/${id}`, config);
  return result.data as Product;
}

export async function getProductById({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<Product> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.get(`/products/${id}`, config);
  return result.data as Product;
}

export async function createProduct({
  product,
  token,
}: {
  product: CreateProductRequest;
  token: string;
}): Promise<Product> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.post(`/products/`, product, config);
  return result.data as Product;
}

export function getFavoriteProducts(): Product[] {
  let products: Product[] = [];
  return products;
}
