import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const LoginPromptModalStyled = styled.div`
  width: 70%;
  height: 250px;
  background-color: white;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    width: 80%;
    height: 200px;
    font-size: 20px;
  }
  
  @media (max-width: 500px) {
    width: 95%;
    height: 150px; 
    font-size: 15px;
  }
`;

const LoginPromptModalTextStyled = styled.div`
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  padding-inline: 8px;
  letter-spacing: 0.5px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding-inline: 6px;
  }
  
  @media (max-width: 500px) {
    font-size: 15px;
    padding-inline: 4px; 
  }
`;

export { LoginPromptModalStyled, LoginPromptModalTextStyled };
