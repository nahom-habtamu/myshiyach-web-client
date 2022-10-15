import {
  ForgotPasswordStyled,
  RememberMeAndForgotPassWrapperStyled,
  RememberMeCheckBoxStyled,
  RememberMeLabelStyled,
} from "../../styled_components/RememberMeAndForgotPasswordStyled";

type RememberMeAndForgotPasswordProps = {
  onRememberMeChanged: Function;
};

const RememberMeAndForgotPassword = (
  props: RememberMeAndForgotPasswordProps
) => {
  return (
    <RememberMeAndForgotPassWrapperStyled>
      <RememberMeLabelStyled>
        <RememberMeCheckBoxStyled
          type="checkbox"
          onChange={() => props.onRememberMeChanged()}
        />
        Remember Me
      </RememberMeLabelStyled>
      <ForgotPasswordStyled
        onClick={() => console.log("Heading to Forgot Password")}
      >
        Forgot Password ?
      </ForgotPasswordStyled>
    </RememberMeAndForgotPassWrapperStyled>
  );
};

export default RememberMeAndForgotPassword;
