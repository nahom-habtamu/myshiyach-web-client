import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const AuthInputWithErrorWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

const AuthInputError = styled.div`
  font-size: 15px;
  color: red;
`

const AuthInputStyled = styled.input<{ hasError?: boolean }>`
  background: white;
  border: 1px solid ${props => props.hasError ? 'red' : '#cec8c8'};
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
    border-color: ${props => props.hasError ? 'red' : 'gray'};
  }
  ::hover {
    border-color: ${props => props.hasError ? 'red' : 'gray'};
  }

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;

const SpaceStyled = styled.div`
  height: 25px;
`;


export { AuthInputStyled, AuthInputWrapperStyled, SpaceStyled, AuthInputError, AuthInputWithErrorWrapperStyled };