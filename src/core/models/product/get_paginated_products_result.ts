import PageAndLimit from "./page_and_limit";
import Product from "./product";

type GetPaginatedProductsResult = {
  previous: PageAndLimit | null;
  next: PageAndLimit | null;
  results: [Product];
};

export default GetPaginatedProductsResult;
