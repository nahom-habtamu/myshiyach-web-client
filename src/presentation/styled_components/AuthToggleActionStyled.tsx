import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const AuthToggleActionOneStyled = styled.div`
  color: grey;
  margin-right: 5px;
  font-size: 17px;
  display: inline-block;
`;

const AuthToggleActionTwoStyled = styled.div`
  color: ${PRIMARY_COLOR};
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

const AuthToggleActionWrapperStyled = styled.div`
  display: flex;
  text-align: center;
  width: fit-content;
  margin: 25px auto;
`;

export {
  AuthToggleActionOneStyled,
  AuthToggleActionTwoStyled,
  AuthToggleActionWrapperStyled,
};
