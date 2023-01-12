import * as filterCriteriaActions from "../action_types/product/filter_criteria_action_types";
import FilterCriteria from "../models/filter/filter_criteria";

const initialFilterCriteria: FilterCriteria = {
  maxPrice: null,
  minPrice: null,
  mainCategory: null,
  subCategory: null,
  brand: null,
  city: null,
  sortByPriceAscending: null,
  sortByCreatedByAscending: null,
  keyword: null,
};

export default function filterCriteriaReducer(
  state: FilterCriteria = initialFilterCriteria,
  action: filterCriteriaActions.FilterCriteriaActionType
): FilterCriteria {
  switch (action.type) {
    case filterCriteriaActions.FILTER_CRITERIA_MODIFY:
      return {
        maxPrice: action.payload.maxPrice ?? state?.maxPrice ?? null,
        minPrice: action.payload.minPrice ?? state?.minPrice ?? null,
        mainCategory:
          action.payload.mainCategory ?? null,
        subCategory: action.payload.subCategory ?? null,
        brand: action.payload.brand ?? state?.brand ?? null,
        city: action.payload.city ?? state?.city ?? null,
        sortByPriceAscending:
          action.payload.sortByPriceAscending ??
          state?.sortByPriceAscending ??
          null,
        sortByCreatedByAscending:
          action.payload.sortByCreatedByAscending ??
          state?.sortByCreatedByAscending ??
          null,
        keyword: action.payload.keyword ?? null,
      };
    case filterCriteriaActions.FILTER_CRITERIA_CLEAR:
      return initialFilterCriteria;
    default:
      return state;
  }
}
