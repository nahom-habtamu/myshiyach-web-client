type FilterCriteria = {
  maxPrice: number | null;
  minPrice: number | null;
  mainCategory: string | null;
  subCategory: string | null;
  brand: string | null;
  city: string | null;
  sortByPriceAscending: boolean | null;
  sortByCreatedByAscending: boolean | null;
  keyword: string | null;
};

export default FilterCriteria;
