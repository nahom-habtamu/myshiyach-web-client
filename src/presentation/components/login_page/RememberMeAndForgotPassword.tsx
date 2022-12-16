import {
  ForgotPasswordStyled,
  RememberMeAndForgotPassWrapperStyled,
} from "../../styled_components/RememberMeAndForgotPasswordStyled";

const RememberMeAndForgotPassword = ({ onForgotPassword }: { onForgotPassword: Function }) => {
  return (
    <RememberMeAndForgotPassWrapperStyled>
      <ForgotPasswordStyled onClick={() => onForgotPassword()}>
        Forgot Password ?
      </ForgotPasswordStyled>
    </RememberMeAndForgotPassWrapperStyled>
  );
};

export default RememberMeAndForgotPassword;
