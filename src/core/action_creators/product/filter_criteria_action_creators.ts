import * as actions from "../../action_types/product/filter_criteria_action_types";
import FilterCriteria from "../../models/filter/filter_criteria";

export const modifyFilterCriteria = (
  request: FilterCriteria
): actions.FilterCriteriaModifyAction => {
  return {
    type: actions.FILTER_CRITERIA_MODIFY,
    payload: request,
  };
};

export const clearFilterCriteria = (): actions.FilterCriteriaClearAction => {
  return { type: actions.FILTER_CRITERIA_CLEAR };
};
