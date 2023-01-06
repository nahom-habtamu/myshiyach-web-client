import { useState } from "react";
import MasterPageContentWrapperStyled from "../../styled_components/master/MasterPageContentWrapperStyled";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavExpandedModal from "./NavExpandedModal";

type MasterComponentProps = {
    activePage: string;
    children: any;
};

const MasterComponent = (props: MasterComponentProps) => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    return (
        <MasterPageContentWrapperStyled>
            <NavBar
                activePage={props.activePage}
                onMenuClicked={() => setIsNavCollapsed(false)} />
            {
                props.children
            }
            <Footer/>
            {!isNavCollapsed && <NavExpandedModal onClose={() => setIsNavCollapsed(true)} />}
        </MasterPageContentWrapperStyled>
    )
}



export default MasterComponent;