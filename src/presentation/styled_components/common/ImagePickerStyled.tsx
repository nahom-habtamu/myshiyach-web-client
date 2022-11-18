import styled from "styled-components";

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

export {
  ImagePickerWrapperStyled,
  ImagePickerButtonStyled,
  ImagePickerDisplayWrapperStyled,
  ImagePickerDisplayItemStyled,
  ImagePickerDisplayItemImageStyled,
  ImagePickerDisplayItemCloseButtonWrapperStyled,
};
