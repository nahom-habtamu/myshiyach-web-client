import { useState } from "react";
import { setActivePageOnMasterNav } from "../../core/action_creators/common/set_active_page_on_master_nav_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import FilterProductsModel from "../components/common/FilterProductsModal";
import NavBarLogoFilterAndSearchBarContent from "../components/common/NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "../components/common/NavBarSideContent";
import NavBarTopContent from "../components/common/NavBarTopContent";
import {
  AdvertisementSideBarItemStyled,
  AdvertisementSideBarWrapperStyled,
} from "../styled_components/master/AdvertisementSideBarWrapperStyled";
import { BodyContentWrapperStyled } from "../styled_components/master/BodyContentWrapperStyled";
import MasterPageContentWrapperStyled from "../styled_components/master/MasterPageContentWrapperStyled";
import AddPostPage, { AddPostPageRoute } from "./AddPostPage";
import ChatListPage, { ChatListPageRoute } from "./ChatListPage";
import HomePage, { HomePageRoute } from "./HomePage";
import ProductDetailPage, { ProductDetailPageRoute } from "./ProductDetailPage";
import SavedPostsPage, { SavedPostsPageRoute } from "./SavedPosts.Page";
import SettingsPage, { SettingsPageRoute } from "./SettingsPage";

const MasterPage = () => {
  const activePage = useAppSelector((state) => state.activePageOnMasterNav);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  
  const buildContentToDisplay = () => {
    switch (activePage) {
      case HomePageRoute:
        return <HomePage />;
      case ChatListPageRoute:
        return <ChatListPage />;
      case AddPostPageRoute:
        return <AddPostPage />;
      case SavedPostsPageRoute:
        return <SavedPostsPage />;
      case SettingsPageRoute:
        return <SettingsPage />;
      case ProductDetailPageRoute:
        return <ProductDetailPage />;
    }
  };

  return (
    <MasterPageContentWrapperStyled>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent
        onFilterButtonPressed={() => setIsOpen(!isOpen)}
      />
      <BodyContentWrapperStyled>
        <NavBarSideContent
          activePage={activePage}
          onItemTapped={(value: string) =>
            dispatch(setActivePageOnMasterNav(value))
          }
        />
        {buildContentToDisplay()}
        <AdvertisementSideBarWrapperStyled marginTop={73}>
          <AdvertisementSideBarItemStyled />
          <AdvertisementSideBarItemStyled />
        </AdvertisementSideBarWrapperStyled>
      </BodyContentWrapperStyled>
      {isOpen && <FilterProductsModel onClose={() => setIsOpen(false)} />}
    </MasterPageContentWrapperStyled>
  );
};

export default MasterPage;
export const MasterPageRoute = "/";
