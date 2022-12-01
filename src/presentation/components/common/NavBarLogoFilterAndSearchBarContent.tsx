import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
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
import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import { modifyFilterCriteria } from "../../../core/action_creators/product/filter_criteria_action_creators";
import FilterCriteria from "../../../core/models/filter/filter_criteria";

type Props = {
  onFilterButtonPressed: Function;
};

const NavBarLogoFilterAndSearchBarContent = (props: Props) => {
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
  };

  return (
    <>
      <NavSearchBarWithLogoWrappperStyled>
        <NavLogoStyled>MyShiyach</NavLogoStyled>
        <NavSearchBarAndFilterButtonWrapperStyled>
          <NavSearchInputWrapperStyled>
            <NavSearchInputLeadingIconStyled>
              <CiSearch size={ICON_SIZE_MEDIUM} color="grey" />
            </NavSearchInputLeadingIconStyled>
            <NavSearchInputStyled
              placeholder="Search for an item"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            ></NavSearchInputStyled>
            <NavSearchButtonStyled onClick={handleSearchClicked}>
              Search
            </NavSearchButtonStyled>
          </NavSearchInputWrapperStyled>
          <NavFilterButtonStyled onClick={() => props.onFilterButtonPressed()}>
            <BsFilter size={ICON_SIZE_MEDIUM} />
          </NavFilterButtonStyled>
        </NavSearchBarAndFilterButtonWrapperStyled>
      </NavSearchBarWithLogoWrappperStyled>
      <NavSearchBarBottomBorderStyled />
    </>
  );
};

export default NavBarLogoFilterAndSearchBarContent;
