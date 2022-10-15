import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const RememberMeLabelStyled = styled.label`
  color: black;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  gap: 10px;
`;

const RememberMeCheckBoxStyled = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: ${PRIMARY_COLOR};
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${PRIMARY_COLOR};
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  :checked::before {
    transform: scale(1);
  }

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }
`;

const ForgotPasswordStyled = styled.div`
  color: ${PRIMARY_COLOR};
  font-size: 17px;
  font-weight: 500;
`;

const RememberMeAndForgotPassWrapperStyled = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
`;

export {
  RememberMeLabelStyled,
  RememberMeCheckBoxStyled,
  ForgotPasswordStyled,
  RememberMeAndForgotPassWrapperStyled,
};
