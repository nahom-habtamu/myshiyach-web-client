import { useState } from "react";
import NavBarLogoFilterAndSearchBarContent from "../components/common/NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "../components/common/NavBarSideContent";
import NavBarTopContent from "../components/common/NavBarTopContent";
import { BodyContentWrapperStyled } from "../styled_components/body/BodyContentWrapperStyled";
import AddPostPage from "./AddPostPage";
import ChatListPage from "./ChatListPage";
import HomePage from "./HomePage";
import SavedPostsPage from "./SavedPosts.Page";
import SettingsPage from "./SettingsPage";

const MasterPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const buildContentToDisplay = () => {
    switch (currentPage) {
      case 0:
        return <HomePage />;
      case 1:
        return <ChatListPage />;
      case 2:
        return <AddPostPage />;
      case 3:
        return <SavedPostsPage />;
      case 4:
        return <SettingsPage />;
    }
  };

  return (
    <>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent />
      <BodyContentWrapperStyled>
        <>
          <NavBarSideContent
            activeBar={currentPage}
            onItemTapped={(value: number) => setCurrentPage(value)}
          />
          {buildContentToDisplay()}
        </>
      </BodyContentWrapperStyled>
    </>
  );
};

export default MasterPage;
export const MasterPageRoute = "/";
