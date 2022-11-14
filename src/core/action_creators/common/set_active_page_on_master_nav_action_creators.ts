import * as actions from "../../action_types/common/set_active_page_on_master_nav_action_types";

export const setActivePageOnMasterNav = (
  pageRoute: string
): actions.SetActivePageOnMasterNav => {
  return {
    type: actions.SET_ACTIVE_PAGE_ON_MASTER_NAV,
    payload: pageRoute,
  };
};
