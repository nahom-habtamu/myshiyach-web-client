import { useState } from "react";
import {
    AddPostDesciptionInputStyled,
    AddPostErrorStyled,
    AddPostInputStyled,
    AddPostSingleInputWrapperStyled
} from "../../styled_components/add_post/AddPostPageComponentsStyled";

type ProductInputProps = {
    onChanged: Function,
    isBigInput?: boolean,
    placeHolder: string;
    type?: string;
    value?: string | number;
}

const ProductInput = (props: ProductInputProps) => {

    const [error, setError] = useState<string | null>("");

    const normalInputValidator = (value: string) => {
        if (value.length === 0) {
            return `Enter ${props.placeHolder}`
        }
        return null;
    }

    const onChanged = (e: any) => {
        const value = e.target.value;
        const validationResult = normalInputValidator(value);
        setError(validationResult);
        props.onChanged(validationResult === null ? e : { target: { value: null } });
    }

    return (
        <AddPostSingleInputWrapperStyled>
            {
                !props.isBigInput || props.isBigInput == undefined ?
                    <AddPostInputStyled
                        type={props.type ?? 'text'}
                        placeholder={props.placeHolder}
                        onChange={(e) => onChanged(e)}
                        value={props.value}
                    /> :
                    <AddPostDesciptionInputStyled
                        cols={6}
                        placeholder={props.placeHolder}
                        onChange={(e) => onChanged(e)}
                        value={props.value}
                    />
            }
            {
                error !== null && error.length > 0 &&
                <AddPostErrorStyled>{error}</AddPostErrorStyled>
            }
        </AddPostSingleInputWrapperStyled>
    )
}

export default ProductInput;