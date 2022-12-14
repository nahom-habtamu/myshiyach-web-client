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

  @media (max-width: 800px) {
    width: 400px;
    height: 500px;
    gap: 15px;  
    top: 140;
    right: 40;
  }
  
  @media (max-width: 500px) {
    width: 350px;
    height: 450px;
    gap: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
  }
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

  @media (max-width: 800px) {
    height: 45px;
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    height: 30px;
    font-size: 14px; 
    border-radius: 5px;
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

  @media (max-width: 800px) {
    height: 45px;
    font-size: 16px;
    padding-inline: 10px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    height: 30px;
    font-size: 14px; 
    padding-inline: 5px;
    border-radius: 5px;
  }
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

  @media (max-width: 800px) {
    height: 45px;
    font-size: 16px;
  }
  
  @media (max-width: 500px) {
    height: 30px;
    font-size: 14px; 
  }
`;

const FilterRadioSectionStyled = styled.div`
  width: 92%;
  height: 100px;
  border: 1px solid lightgray;
  padding: 15px;

  @media (max-width: 800px) {
    height: 90px;
  }
  
  @media (max-width: 500px) {
    height: 80px;
  }
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

  @media (max-width: 800px) {
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
  }
  
  @media (max-width: 500px) {
    height: 40px;
    font-size: 14px;
    border-radius: 5px;
  }
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
