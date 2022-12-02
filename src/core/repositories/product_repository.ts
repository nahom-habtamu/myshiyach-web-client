import CreateProductRequest from "../models/product/create_product_request";
import DeleteProductResponse from "../models/product/delete_product_response";
import EditProductRequest from "../models/product/edit_product_request";
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

export async function getProductsByUser({
  userId,
  token,
}: {
  userId: string;
  token: string;
}): Promise<Product> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.get(`/products/createdBy/${userId}`, config);
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

export async function deleteProduct({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<string> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.delete(`/products/${id}`, config);
  return (result.data as DeleteProductResponse).id;
}

export async function editProduct({
  product,
  token,
  id,
}: {
  product: EditProductRequest;
  token: string;
  id: string;
}): Promise<Product> {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token,
    },
  };
  let result = await axiosInstance.patch(`/products/${id}`, product, config);
  return result.data as Product;
}

export function getFavoriteProducts(): Product[] {
  let products = localStorage.getItem("favoriteProducts");

  if (products) {
    return JSON.parse(products) as Product[];
  }
  return [];
}

export function addFavoriteProduct(product: Product) {
  let products = localStorage.getItem("favoriteProducts");
  if (products) {
    let parsed = JSON.parse(products) as Product[];
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify([...parsed, product])
    );
  } else {
    localStorage.setItem("favoriteProducts", JSON.stringify([product]));
  }
}
