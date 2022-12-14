import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const AuthInputStyled = styled.input`
  background: white;
  border: 1px solid #cec8c8;
  border-radius: 20px;
  color: ${PRIMARY_COLOR};
  padding: 1em 0.3em 1em 1em;
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

  @media (max-width: 800px) {
    padding: 1em;
    font-size: 16px;
  }

  @media (max-width: 500px) {
    padding: 0.8em;
    font-size: 14px;
  }
`;

const AuthInputWrapperStyled = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 300px;
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;

const SpaceStyled = styled.div`
  height: 25px;
`;

export { AuthInputStyled, AuthInputWrapperStyled, SpaceStyled };
