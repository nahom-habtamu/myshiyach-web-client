import styled from "styled-components";
import { DARK_PINK_COLOR, PINK_COLOR } from "../../constants/colors";

const ValidationErrorModalStyled = styled.div`
  width: 60%;
  height: 200px;
  background-color: white;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    width: 80%;
    height: 200px;
    font-size: 25px;
  }
  
  @media (max-width: 500px) {
    width: 95%;
    height: 150px; 
    font-size: 20px;
  }
`;

const ValidationErrorModalTextStyled = styled.div`
  color: ${PINK_COLOR}
`

export {
    ValidationErrorModalStyled,
    ValidationErrorModalTextStyled
}