import { useState } from "react";
import { FilterDropDownErrorStyled, FilterDropDownInputAndLabelAndErrorWrapperStyled, FilterDropDownInputStyled, FilterDropDownLabelStyled, FilterDropDownOptionStyled } from "../../styled_components/home/HomeFilterModalStyled";

type ProductDropDownInputProps = {
  label: string,
  value: string,
  onChange: Function,
  dropDownItems: DropDownItemData[],
}

export type DropDownItemData = {
  value: string | null;
  title: string;
};

const ProductDropDownInput = (props: ProductDropDownInputProps) => {


  const dropDownValidator = (value: string) => {
    if (value.length === 0) {
      return "Please Select One of the Options";
    }
    return null;
  }

  let items = [
    {
      value: null,
      title: 'Please Select'
    },
    ...props.dropDownItems
  ];

  const [error, setError] = useState<string | null>("");

  const onDropDownChanged = (e: any) => {
    const value = e.target.value;
    const validationResult = dropDownValidator(value);
    setError(validationResult);
    props.onChange(validationResult === null ? e : { target: { value: null } });
  }

  return (
    <FilterDropDownInputAndLabelAndErrorWrapperStyled>
      <FilterDropDownLabelStyled>{`* ${props.label}`}</FilterDropDownLabelStyled>
      <FilterDropDownInputStyled
        value={props.value}
        onChange={(e) => onDropDownChanged(e)}
      >
        {items.map((i) => (
          <FilterDropDownOptionStyled value={i.value ?? ""}>
            {i.title.split(";")[0]}
          </FilterDropDownOptionStyled>
        ))}
      </FilterDropDownInputStyled>
      {
        error !== null && error.length > 0 && <FilterDropDownErrorStyled>{error}</FilterDropDownErrorStyled>
      }
    </FilterDropDownInputAndLabelAndErrorWrapperStyled>
  )
}

export default ProductDropDownInput;