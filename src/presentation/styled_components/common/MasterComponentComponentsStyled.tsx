import styled from "styled-components";
import { PINK_COLOR, PRIMARY_COLOR } from "../../constants/colors";

export const NavBarWrapperStyled = styled.div`
    background: ${PRIMARY_COLOR};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
`;

export const NavTopContentWrapperStyled = styled.div`
    width: 100%;
    display: flex;
`;

export const NavBarLogoWrapperStyled = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    gap: 15px;

    @media (min-width: 1100px) {
        width: 35%;
    }

    @media (min-width: 800px) {
        width: 40%;
    }

`;

export const NavBarLogoNameStyled = styled.div`
    font-size: 0px;
    color: white;
    transition: all 0.5 ease;

    @media (min-width: 1100px) {
        font-size: 35px;
    }

    @media (min-width: 800px) {
        font-size: 30px;
    }

`;

export const NavBarLogoStyled = styled.img`
    width: 40px;
    height: 40px;
    object-fit: center center;
    border-radius: 100%;

    @media (min-width: 1100px) {
        width: 55px;
        height: 55px;
    }

    @media (min-width: 800px) {
        width: 45px;
        height: 45px;
    }

`;

export const NavBarOtherContentStyled = styled.div`
    display: flex;
    width: 40%;
    gap: 25px;
    justify-content: flex-end;

    @media (min-width: 1100px) {
        width: 65%;
        justify-content: center;
        gap: 35px;
    }

    @media (min-width: 800px) {
        width: 60%;
        gap: 30px;
    }
`;

export const NavIconsStyled = styled.div<{ active: boolean }>`
    height: 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${props => props.active ? 'gray' : 'white'};
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    :hover {
        color: gray;
    }

    @media (min-width: 1100px) {
        height: 50px;
        font-size: ${props => props.active ? '19px' : '17px'};      
    }

    @media (min-width: 800px) {
        height: 45px;
        font-size: 15px;   
        font-size: ${props => props.active ? '17px' : '15px'};         
    }
`;

export const ResponsiveIconStyled = styled(NavIconsStyled) <{ isActiveOnSmallScreen?: boolean }>`
  display: ${props => props.isActiveOnSmallScreen ? 'flex' : 'none'};
  @media (min-width: 800px) {
    display: ${props => props.isActiveOnSmallScreen ? 'none' : 'flex'};
  }
`;

export const NavSearchBarWrapperStyled = styled.div<{ active: boolean }>`
    width: 100%;
    height: 45px;
    margin: 0 auto;
    display: ${props => props.active ? 'flex' : 'none'};
    gap: 10px;
    margin-top: 20px;
    transition: all 0.5s ease;
    
    @media (min-width: 1100px) {
        width: 60%;
        height: 55px;
    }

    @media (min-width: 800px) {
        width: 70%;
        height: 50px;
    }
`;

export const NavSearchButtonStyled = styled.div`
    width: 45px;
    height: 100%;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${PINK_COLOR};
    color: white;

    @media (min-width: 1100px) {
        width: 50px;
    }

    @media (min-width: 800px) {
        width: 55px;
    }
`;

export const NavSearchInputStyled = styled.input`
    width: 75%;
    height: 100%;
    border: none;
    border-radius: 25px;
    background: white;
    text-align: center;
    color: gray;
    outline: none;
    ::placeholder {
        color: light-gray;
    }
`;