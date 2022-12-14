import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const FilterModalStyled = styled.div`
  width: 700px;
  height: 600px;
  background-color: white;
  position: fixed;
  top: 120;
  right: 240;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 15px;
  align-items: center;
  gap: 25px;
`;

const FilterInputStyled = styled.input`
  height: 60px;
  font-size: 20px;
  border-radius: 15px;
  color: black;
  border: 1px solid lightgray;
  outline: none;
  padding-left: 20px;

  ::placeholder {
    color: grey;
  }
`;

const FilterPriceInputStyled = styled(FilterInputStyled)`
  width: 48%;
`;

const FilterPriceInputWrapperStyled = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FilterDropDownInputStyled = styled.select`
  height: 60px;
  width: 92%;
  border-radius: 15px;
  color: black;
  border: 1px solid lightgray;
  outline: none;
  padding-inline: 20px;
  font-size: 20px;
  line-height: 1;
`;

const FilterDropDownOptionStyled = styled.option`
  color: grey;
  font-size: 18px;
`;

const FilterLongInputStyled = styled(FilterInputStyled)`
  width: 80%;
`;

const FilterRadioButtonStyled = styled.input``;

const FilterRadioLabelStyled = styled.label`
  font-size: 20px;
  padding-left: 15px;
  color: grey;
`;

const FilterRadioSectionStyled = styled.div`
  width: 92%;
  height: 100px;
  border: 1px solid lightgray;
  padding: 15px;
`;

type FilterButtonProps = {
  isOutline: boolean;
};

const FilterButton = styled.button<FilterButtonProps>`
  width: 48%;
  height: 60px;
  border: 1px solid ${(props) => (props.isOutline ? "darkgray" : PRIMARY_COLOR)};
  background: ${(props) => (props.isOutline ? "white" : PRIMARY_COLOR)};
  color: ${(props) => (props.isOutline ? "darkgray" : "white")};
  font-size: 20px;
  border-radius: 15px;
`;

const FilterButtonWrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
`;

export {
  FilterModalStyled,
  FilterPriceInputWrapperStyled,
  FilterPriceInputStyled,
  FilterLongInputStyled,
  FilterDropDownInputStyled,
  FilterDropDownOptionStyled,
  FilterRadioLabelStyled,
  FilterRadioSectionStyled,
  FilterRadioButtonStyled,
  FilterButtonWrapper,
  FilterButton,
};
