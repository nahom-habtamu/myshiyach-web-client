import NavBarLogoFilterAndSearchBarContent from "../components/common/NavBarLogoFilterAndSearchBarContent";
import NavBarTopContent from "../components/common/NavBarTopContent";

const HomePage = () => {
  return (
    <>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent />
    </>
  );
};

export default HomePage;
export const HomePageRoute = "/";
