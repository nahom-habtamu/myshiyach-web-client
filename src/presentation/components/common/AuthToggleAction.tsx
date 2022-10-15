import {
  AuthToggleActionOneStyled,
  AuthToggleActionTwoStyled,
  AuthToggleActionWrapperStyled,
} from "../../styled_components/AuthToggleActionStyled";

type AuthToggleActionProps = {
  textOne: string;
  textTwo: string;
  onPressed: Function;
};

const AuthToggleAction = (props: AuthToggleActionProps) => {
  return (
    <AuthToggleActionWrapperStyled onClick={() => props.onPressed()}>
      <AuthToggleActionOneStyled>{props.textOne}</AuthToggleActionOneStyled>
      <AuthToggleActionTwoStyled>{props.textTwo}</AuthToggleActionTwoStyled>
    </AuthToggleActionWrapperStyled>
  );
};

export default AuthToggleAction;
