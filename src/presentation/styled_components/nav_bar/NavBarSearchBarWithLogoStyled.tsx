import styled from "styled-components";
import { DARK_PINK_COLOR, LIGHT_GRAY_COLOR, PINK_COLOR } from "../../constants/colors";

const NavLogoStyled = styled.div`
  font-size: 120%;
  color: black;
  font-weight: 600;
  
  @media (max-width: 900px) {
    font-size: 200%;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    font-size: 140%;
    font-weight: 400;
  }
`;

const NavLogoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;

  :hover {
    padding-bottom: 3px;
    border-bottom: 2px solid grey;
    cursor: pointer;
  }
`;

const NavLogoImageStyled = styled.img`
  width: 70px;
  height: 70px;
  object-fit: center center;

  @media (max-width: 900px) {
    display: none;
  }
`;


const NavBarActiveTogglerButtonStyled = styled.div`
  top: 25px;
  right: 25px;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const NavLogoAndActiveTogglerWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const NavSearchInputWrapperStyled = styled.div`
  width: 75%;
  height: 55px;
  position: relative;
  
  @media (max-width: 900px) {
    width: 90%;
    height: 45px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const NavSearchInputLeadingIconStyled = styled.div`
  position: absolute;
  left: 25px;
  height: 55px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavSearchInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${LIGHT_GRAY_COLOR};
  padding-inline: 100px;
  color: black;
  outline: none;
  border: none;
  font-size: 110%;

  @media (max-width: 900px) {
    padding-inline: 25px;
    font-size: 100%;
  }

  @media (max-width: 500px) {
    font-size: 90%;
  }
`;

const NavSearchButtonStyled = styled.button`
  width: 80px;
  font-size: 110%;
  height: 55px;
  border: none;
  border-radius: 100px;
  color: white;
  background: ${PINK_COLOR};
  position: absolute;
  right: 0;

  :hover {
    background: ${DARK_PINK_COLOR};
    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavSearchButtonIconStyled = styled.button`
  width: 80px;
  font-size: 110%;
  height: 55px;
  border: none;
  border-radius: 100px;
  color: white;
  position: absolute;
  right: 0;
  display: none;

  :hover {
    background: ${LIGHT_GRAY_COLOR};
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 60px;
    font-size: 90%;
    height: 45px;
    display: inline-block;
  }
`;

const NavFilterButtonStyled = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 100%;
  color: white;
  background: ${PINK_COLOR};

  :hover {
    background: ${DARK_PINK_COLOR};
    cursor: pointer;
  }

  @media (max-width: 900px) {
    height: 45px;
  }
`;

const NavSearchBarAndFilterButtonWrapperStyled = styled.div`
  width: 50%;
  display: flex;
  gap: 25px;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 66%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const NavSearchBarWithLogoWrappperStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const NavSearchBarBottomBorderStyled = styled.div`
  width: 100%;
  height: 1.2px;
  background: black;
`;

export {
  NavLogoStyled,
  NavSearchInputWrapperStyled,
  NavSearchInputLeadingIconStyled,
  NavSearchInputStyled,
  NavSearchButtonStyled,
  NavSearchButtonIconStyled,
  NavFilterButtonStyled,
  NavSearchBarBottomBorderStyled,
  NavSearchBarAndFilterButtonWrapperStyled,
  NavSearchBarWithLogoWrappperStyled,
  NavBarActiveTogglerButtonStyled,
  NavLogoAndActiveTogglerWrapper,
  NavLogoWrapperStyled,
  NavLogoImageStyled
};
