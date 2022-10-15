import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const AuthInputStyled = styled.input`
  background: white;
  border: 1px solid #cec8c8;
  border-radius: 20px;
  color: ${PRIMARY_COLOR};
  padding: 1em 0em;
  padding-left: 25px;
  font-size: 18px;
  outline: none;
  text-align: left;
  width: 100%;

  ::placeholder {
    color: lightgray;
  }
  :focus {
    border-color: gray;
  }
  ::hover {
    border-color: gray;
  }
`;

const AuthInputWrapperStyled = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const SpaceStyled = styled.div`
  height: 25px;
`;

export { AuthInputStyled, AuthInputWrapperStyled, SpaceStyled };
