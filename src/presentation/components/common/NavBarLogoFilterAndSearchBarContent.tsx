import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { ICON_SIZE } from "../../constants/sizes";
import {
  NavFilterButtonStyled,
  NavLogoStyled,
  NavSearchBarAndFilterButtonWrapperStyled,
  NavSearchBarBottomBorderStyled,
  NavSearchBarWithLogoWrappperStyled,
  NavSearchButtonStyled,
  NavSearchInputLeadingIconStyled,
  NavSearchInputStyled,
  NavSearchInputWrapperStyled,
} from "../../styled_components/nav_bar/NavBarSearchBarWithLogoStyled";

type NavBarLogoFilterAndSearchBarContentProps = {
  onFilterButtonPressed: Function;
};

const NavBarLogoFilterAndSearchBarContent = (
  props: NavBarLogoFilterAndSearchBarContentProps
) => {
  return (
    <>
      <NavSearchBarWithLogoWrappperStyled>
        <NavLogoStyled>MyShiyach</NavLogoStyled>
        <NavSearchBarAndFilterButtonWrapperStyled>
          <NavSearchInputWrapperStyled>
            <NavSearchInputLeadingIconStyled>
              <CiSearch size={ICON_SIZE} color="grey" />
            </NavSearchInputLeadingIconStyled>
            <NavSearchInputStyled placeholder="Search for an item"></NavSearchInputStyled>
            <NavSearchButtonStyled>Search</NavSearchButtonStyled>
          </NavSearchInputWrapperStyled>
          <NavFilterButtonStyled onClick={() => props.onFilterButtonPressed()}>
            <BsFilter size={ICON_SIZE} />
          </NavFilterButtonStyled>
        </NavSearchBarAndFilterButtonWrapperStyled>
      </NavSearchBarWithLogoWrappperStyled>
      <NavSearchBarBottomBorderStyled />
    </>
  );
};

export default NavBarLogoFilterAndSearchBarContent;
