import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import {
  NavFilterButtonStyled,
  NavLogoStyled,
  NavSearchBarAndFilterButtonWrapperStyled,
  NavSearchBarWithLogoWrappperStyled,
  NavSearchButtonStyled,
  NavSearchInputLeadingIconStyled,
  NavSearchInputStyled,
  NavSearchInputWrapperStyled,
} from "../../styled_components/nav_bar/NavBarSearchBarWithLogoStyled";
const NavBarLogoFilterAndSearchBarContent = () => {
  return (
    <NavSearchBarWithLogoWrappperStyled>
      <NavLogoStyled>MyShiyach</NavLogoStyled>
      <NavSearchBarAndFilterButtonWrapperStyled>
        <NavSearchInputWrapperStyled>
          <NavSearchInputLeadingIconStyled>
            <CiSearch size="2em" color="grey" />
          </NavSearchInputLeadingIconStyled>
          <NavSearchInputStyled placeholder="Search for an item"></NavSearchInputStyled>
          <NavSearchButtonStyled>Search</NavSearchButtonStyled>
        </NavSearchInputWrapperStyled>
        <NavFilterButtonStyled>
          <BsFilter size="2em" />
        </NavFilterButtonStyled>
      </NavSearchBarAndFilterButtonWrapperStyled>
    </NavSearchBarWithLogoWrappperStyled>
  );
};

export default NavBarLogoFilterAndSearchBarContent;
