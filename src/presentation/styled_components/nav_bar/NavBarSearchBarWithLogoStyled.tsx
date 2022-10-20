import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const NavLogoStyled = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

const NavSearchInputWrapperStyled = styled.div`
  width: 75%;
  height: 55px;
  position: relative;
`;

const NavSearchInputLeadingIconStyled = styled.div`
  position: absolute;
  left: 25px;
  height: 55px;
  display: flex;
  align-items: center;
`;

const NavSearchInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: #f2eded;
  padding-left: 100px;
  color: black;
  outline: none;
  border: none;
`;

const NavSearchButtonStyled = styled.button`
  width: 80px;
  font-size: 18px;
  height: 55px;
  border: none;
  border-radius: 100px;
  color: white;
  background: ${PINK_COLOR};
  position: absolute;
  right: 0;
`;

const NavFilterButtonStyled = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 100%;
  color: white;
  background: ${PINK_COLOR};
`;

const NavSearchBarAndFilterButtonWrapperStyled = styled.div`
  width: 50%;
  display: flex;
  gap: 25px;
`;

const NavSearchBarWithLogoWrappperStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export {
  NavLogoStyled,
  NavSearchInputWrapperStyled,
  NavSearchInputLeadingIconStyled,
  NavSearchInputStyled,
  NavSearchButtonStyled,
  NavFilterButtonStyled,
  NavSearchBarAndFilterButtonWrapperStyled,
  NavSearchBarWithLogoWrappperStyled,
};
