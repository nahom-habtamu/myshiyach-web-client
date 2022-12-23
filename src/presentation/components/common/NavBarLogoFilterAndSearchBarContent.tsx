import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
  NavBarActiveTogglerButtonStyled,
  NavFilterButtonStyled,
  NavLogoAndActiveTogglerWrapper,
  NavLogoImageStyled,
  NavLogoStyled,
  NavLogoWrapperStyled,
  NavSearchBarAndFilterButtonWrapperStyled,
  NavSearchBarBottomBorderStyled,
  NavSearchBarWithLogoWrappperStyled,
  NavSearchButtonIconStyled,
  NavSearchButtonStyled,
  NavSearchInputLeadingIconStyled,
  NavSearchInputStyled,
  NavSearchInputWrapperStyled,
} from "../../styled_components/nav_bar/NavBarSearchBarWithLogoStyled";
import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import { modifyFilterCriteria } from "../../../core/action_creators/product/filter_criteria_action_creators";
import FilterCriteria from "../../../core/models/filter/filter_criteria";
import { PINK_COLOR } from "../../constants/colors";
import { FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomePageRoute } from "../../pages/HomePage";
import { useHistory } from "react-router-dom";

type Props = {
  onFilterButtonPressed: Function;
  onNavBarTogglePressed: Function;
  collapsed: boolean;
  activePage: string;
};

const NavBarLogoFilterAndSearchBarContent = (props: Props) => {

  const history = useHistory();

  const filterCriteria = useAppSelector((state) => state.filterCriteria);
  const [keyword, setKeyword] = useState(filterCriteria.keyword ?? "");

  const dispatch = useAppDispatch();

  const handleSearchClicked = () => {
    dispatch(
      modifyFilterCriteria({
        ...filterCriteria,
        keyword,
      } as FilterCriteria)
    );
    if (props.activePage != HomePageRoute) {
      history.push(HomePageRoute);
    }
  };

  return (
    <>
      <NavSearchBarWithLogoWrappperStyled>
        <NavLogoAndActiveTogglerWrapper>
          <NavBarActiveTogglerButtonStyled>
            {!props.collapsed ? (
              <FaRegWindowClose
                size={ICON_SIZE_LARGE}
                onClick={() => props.onNavBarTogglePressed(true)}
              />
            ) : (
              <GiHamburgerMenu
                size={ICON_SIZE_LARGE}
                onClick={() => props.onNavBarTogglePressed(false)}
              />
            )}
          </NavBarActiveTogglerButtonStyled>
          <NavLogoWrapperStyled onClick={() => history.push(HomePageRoute)}>
            <NavLogoImageStyled src="/icon.png"/>
            <NavLogoStyled>MyShiyach</NavLogoStyled>
          </NavLogoWrapperStyled>
        </NavLogoAndActiveTogglerWrapper>

        <NavSearchBarAndFilterButtonWrapperStyled>
          <NavSearchInputWrapperStyled>
            <NavSearchInputLeadingIconStyled>
              <CiSearch size={ICON_SIZE_MEDIUM} color="grey" />
            </NavSearchInputLeadingIconStyled>
            <NavSearchInputStyled
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            ></NavSearchInputStyled>
            <NavSearchButtonStyled onClick={handleSearchClicked}>
              Search
            </NavSearchButtonStyled>
            <NavSearchButtonIconStyled onClick={handleSearchClicked}>
              <CiSearch size={ICON_SIZE_MEDIUM} color={PINK_COLOR} />
            </NavSearchButtonIconStyled>
          </NavSearchInputWrapperStyled>
          {
            props.activePage === HomePageRoute &&
            <NavFilterButtonStyled onClick={() => props.onFilterButtonPressed()}>
              <BsFilter size={ICON_SIZE_MEDIUM} />
            </NavFilterButtonStyled>
          }
        </NavSearchBarAndFilterButtonWrapperStyled>
      </NavSearchBarWithLogoWrappperStyled>
      <NavSearchBarBottomBorderStyled />
    </>
  );
};

export default NavBarLogoFilterAndSearchBarContent;
