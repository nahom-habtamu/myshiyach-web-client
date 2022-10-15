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
`;

const ActionButtonWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export {
  ActionButtonStyled,
  ActionButtonWrapper
};
