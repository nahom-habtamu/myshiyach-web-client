import MainCategory from "../category/main_category";
import GetPaginatedProductsResult from "./get_paginated_products_result";
import Product from "./product";

type DisplayPaginatedProductsResult = {
  categories: MainCategory[];
  favoriteProducts: Product[];
  cities: string[];
  productsWithPageAndLimit: GetPaginatedProductsResult;
};

export default DisplayPaginatedProductsResult;
