import { AuthInputStyled } from "../../styled_components/AuthInputStyled";

type AuthInputProps = {
  type: string;
  placeHolder: string;
  obsecureText: boolean;
  onChanged: Function;
};

const AuthInput = (props: AuthInputProps) => {
  return (
    <AuthInputStyled
      type={props.type}
      placeholder={props.placeHolder}
      onChange={(e) => props.onChanged(e)}
    />
  );
};

export default AuthInput;
