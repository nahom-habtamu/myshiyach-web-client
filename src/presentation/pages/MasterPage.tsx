import { useState } from "react";
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
import SavedPostsPage, { SavedPostsPageRoute } from "./SavedPosts.Page";
import SettingsPage, { SettingsPageRoute } from "./SettingsPage";

const MasterPage = () => {
  const [currentPage, setCurrentPage] = useState(HomePageRoute);
  const [isOpen, setIsOpen] = useState(false);

  const buildContentToDisplay = () => {
    switch (currentPage) {
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
          activePage={currentPage}
          onItemTapped={(value: string) => setCurrentPage(value)}
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
