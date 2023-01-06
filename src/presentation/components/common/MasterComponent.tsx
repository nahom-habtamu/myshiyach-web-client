import { useState } from "react";
import MasterPageContentWrapperStyled from "../../styled_components/master/MasterPageContentWrapperStyled";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavExpandedModal from "./NavExpandedModal";
import FilterProductsModal from "./FilterProductsModal";

type MasterComponentProps = {
    activePage: string;
    children: any;
};

const MasterComponent = (props: MasterComponentProps) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    return (
        <MasterPageContentWrapperStyled>
            <NavBar
                onFilterButtonClicked={() => setIsFilterModalOpen(true)}
                activePage={props.activePage}
                onMenuClicked={() => setIsNavCollapsed(false)} />
            {
                props.children
            }
            <Footer />
            {!isNavCollapsed && <NavExpandedModal onClose={() => setIsNavCollapsed(true)} />}
            {isFilterModalOpen && <FilterProductsModal onClose={() => setIsFilterModalOpen(false)} />}
        </MasterPageContentWrapperStyled>
    )
}



export default MasterComponent;