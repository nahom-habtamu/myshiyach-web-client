import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AdvertisementSideBarItemStyled,
  AdvertisementSideBarWrapperStyled,
} from "../../styled_components/master/AdvertisementSideBarWrapperStyled";
import { BodyContentWrapperStyled } from "../../styled_components/master/BodyContentWrapperStyled";
import MasterPageContentWrapperStyled from "../../styled_components/master/MasterPageContentWrapperStyled";
import NavBarLogoFilterAndSearchBarContent from "./NavBarLogoFilterAndSearchBarContent";
import NavBarSideContent from "./NavBarSideContent";
import NavBarTopContent from "./NavBarTopContent";
import FilterProductsModel from "./FilterProductsModal";

type MasterComponentProps = {
  activePage: string;
  children: any;
};

const MasterComponent = (props: MasterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <MasterPageContentWrapperStyled>
      <NavBarTopContent />
      <NavBarLogoFilterAndSearchBarContent
        onFilterButtonPressed={() => setIsOpen(!isOpen)}
      />
      <BodyContentWrapperStyled>
        <NavBarSideContent
          activePage={props.activePage}
          onItemTapped={(value: string) => history.push(value)}
        />
        {props.children}
        <AdvertisementSideBarWrapperStyled marginTop={73}>
          <AdvertisementSideBarItemStyled />
          <AdvertisementSideBarItemStyled />
        </AdvertisementSideBarWrapperStyled>
      </BodyContentWrapperStyled>
      {isOpen && <FilterProductsModel onClose={() => setIsOpen(false)} />}
    </MasterPageContentWrapperStyled>
  );
};

export default MasterComponent;
