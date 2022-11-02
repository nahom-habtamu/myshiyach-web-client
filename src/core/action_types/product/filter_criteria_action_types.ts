import FilterCriteria from "../../models/filter/filter_criteria";

export const FILTER_CRITERIA_MODIFY =
  "productActionTypes/FILTER_CRITERIA_MODIFY";
export interface FilterCriteriaModifyAction {
  type: typeof FILTER_CRITERIA_MODIFY;
  payload: FilterCriteria;
}

export const FILTER_CRITERIA_CLEAR = "productActionTypes/FILTER_CRITERIA_CLEAR";
export interface FilterCriteriaClearAction {
  type: typeof FILTER_CRITERIA_CLEAR;
}

export type FilterCriteriaActionType =
  | FilterCriteriaModifyAction
  | FilterCriteriaClearAction;
