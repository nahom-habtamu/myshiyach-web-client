import * as filterCriteriaActions from "../action_types/product/filter_criteria_action_types";
import FilterCriteria from "../models/filter/filter_criteria";

export default function filterCriteriaReducer(
  state: FilterCriteria | null = null,
  action: filterCriteriaActions.FilterCriteriaActionType
): FilterCriteria | null {
  switch (action.type) {
    case filterCriteriaActions.FILTER_CRITERIA_MODIFY:
      return {
        maxPrice: action.payload.maxPrice ?? state?.maxPrice ?? null,
        minPrice: action.payload.minPrice ?? state?.minPrice ?? null,
        mainCategory:
          action.payload.mainCategory ?? state?.mainCategory ?? null,
        subCategory: action.payload.subCategory ?? state?.subCategory ?? null,
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
        keyword: action.payload.keyword ?? state?.keyword ?? null,
      };
    case filterCriteriaActions.FILTER_CRITERIA_CLEAR:
      return null;
    default:
      return state;
  }
}
