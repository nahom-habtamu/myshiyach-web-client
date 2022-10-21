import NavBarLogoFilterAndSearchBarContent from "../components/common/NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "../components/common/NavBarSideContent";
import NavBarTopContent from "../components/common/NavBarTopContent";
import { BodyContentWrapperStyled } from "../styled_components/body/BodyContentWrapperStyled";

const HomePage = () => {
  return (
    <>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent />
      <BodyContentWrapperStyled>
        <NavBarSideContent activeBar={0} />
      </BodyContentWrapperStyled>
    </>
  );
};

export default HomePage;
export const HomePageRoute = "/";
