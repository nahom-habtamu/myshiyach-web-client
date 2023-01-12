import { useState } from "react";
import { AuthInputError, AuthInputStyled, AuthInputWithErrorWrapperStyled } from "../../styled_components/AuthInputStyled";

type AuthInputProps = {
  type: string;
  placeHolder: string;
  obsecureText: boolean;
  onChanged: Function;
  validator: Function;
};

const AuthInput = (props: AuthInputProps) => {

  const [error, setError] = useState("");


  const onInputChanged = (e: any) => {
    const value = e.target.value;
    const validationResult = props.validator(value);
    setError(validationResult);
    props.onChanged(validationResult === null ? e : { target: { value: null } });
  }

  const hasError = error !== null && error.length > 0;

  return (
    <AuthInputWithErrorWrapperStyled>
      {
        hasError && <AuthInputError>{error}</AuthInputError>
      }
      <AuthInputStyled
        autoComplete="off"
        hasError={hasError}
        type={props.type}
        placeholder={props.placeHolder}
        onChange={(e) => onInputChanged(e)}
      />
    </AuthInputWithErrorWrapperStyled>
  );
};

export default AuthInput;
