import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const AuthToggleActionOneStyled = styled.div`
  color: grey;
  margin-right: 5px;
  font-size: 17px;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const AuthToggleActionTwoStyled = styled.div`
  color: ${PRIMARY_COLOR};
  font-size: 18px;
  font-weight: bold;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const AuthToggleActionWrapperStyled = styled.div`
  display: flex;
  text-align: center;
  margin: 25px auto;
  width: fit-content;
`;

export {
  AuthToggleActionOneStyled,
  AuthToggleActionTwoStyled,
  AuthToggleActionWrapperStyled,
};
