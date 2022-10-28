import FilterCriteria from "../filter/filter_criteria";

type GetPaginatedProductsRequest = {
  page: number;
  limit: number;
  filterCriteria: FilterCriteria | null;
};

export default GetPaginatedProductsRequest;
