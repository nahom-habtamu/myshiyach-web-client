import styled from "styled-components";
import { DARK_PINK_COLOR, PINK_COLOR, PRIMARY_COLOR, PRIMARY_LIGHT_COLOR } from "../../constants/colors";

const ImagePickerWrapperStyled = styled.div`
  width: 92%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImagePickerButtonStyled = styled.label`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePickerDisplayWrapperStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const ImagePickerDisplayItemStyled = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  position: relative;
  color: red;
`;

const ImagePickerDisplayItemImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover cover;
`;

const ImagePickerDisplayItemCloseButtonWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: black;
`;

const ImagePickerWarningTextWrapperStyled = styled.div`
  width: fit-content;
  padding: 20px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  align-items: flex-start;
  border: 1px solid ${PINK_COLOR};
  border-radius: 15px;
`;

const ImagePickerWarningTextStyled = styled.div`
  font-weight: 500;
`;

export {
  ImagePickerWrapperStyled,
  ImagePickerButtonStyled,
  ImagePickerDisplayWrapperStyled,
  ImagePickerDisplayItemStyled,
  ImagePickerDisplayItemImageStyled,
  ImagePickerDisplayItemCloseButtonWrapperStyled,
  ImagePickerWarningTextWrapperStyled,
  ImagePickerWarningTextStyled
};
