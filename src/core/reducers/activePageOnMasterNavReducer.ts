import * as setActivePageTypes from "../action_types/common/set_active_page_on_master_nav_action_types";

import { HomePageRoute } from "../../presentation/pages/HomePage";

export default function setActivePageOnMasterNavReducer(
  state: string = HomePageRoute,
  action: setActivePageTypes.SetActivePageOnMasterNav
): string {
  switch (action.type) {
    case setActivePageTypes.SET_ACTIVE_PAGE_ON_MASTER_NAV:
      return action.payload;
    default:
      return state;
  }
}
