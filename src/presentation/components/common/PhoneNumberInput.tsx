import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { AuthInputError, AuthInputWithErrorWrapperStyled } from '../../styled_components/AuthInputStyled';


type PhoneNumberInputProps = {
    validator: Function;
    onChanged: Function;
    placeHolder: string;
}


const PhoneNumberInput = (props: PhoneNumberInputProps) => {

    const [error, setError] = useState("");

    const onInputChanged = (e: any) => {
        const validationResult = props.validator(e);
        setError(validationResult);
        props.onChanged(validationResult === null ? { target: { value: e } } : { target: { value: null } });
    }

    const hasError = error !== null && error.length > 0;

    return (
        <AuthInputWithErrorWrapperStyled>
            {
                hasError && <AuthInputError>Please Enter PhoneNumber</AuthInputError>
            }
            <PhoneInput
                onfocus="this.removeAttribute('readonly');"
                autoComplete='off'
                onChange={(value) => {
                    if (value === undefined) {
                        onInputChanged("");
                    }
                    else {
                        onInputChanged(value as string);
                    }
                }}
                defaultCountry={"ET"}
                defaultCode="ET"
                layout='first'
                withShadow
                autoFocus
                inputClass={`${hasError ? 'phoneNumberInputWithError' : 'phoneNumberInput'}`}
                className={`${hasError ? 'phoneNumberInputWithError' : 'phoneNumberInput'}`}
            />
        </AuthInputWithErrorWrapperStyled>
    )
}

export default PhoneNumberInput