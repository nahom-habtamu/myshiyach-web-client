import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const ActionButtonStyled = styled.button`
  background: ${PRIMARY_COLOR};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 1.2em 1em;
  font-size: 18px;
  width: 100%;

  @media (max-width: 800px) {
    font-size: 15px;
    border-radius: 15px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    border-radius: 10px;
  }
`;

const ActionButtonWrapper = styled.div`
  margin: 0 auto;
  width: 400px;

  @media (max-width: 800px) {
    width: 300px;
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;

export {
  ActionButtonStyled,
  ActionButtonWrapper
};
