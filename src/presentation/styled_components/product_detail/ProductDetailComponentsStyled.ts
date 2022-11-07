import styled from "styled-components";

const ProductDetailWrapperStyled = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDetailTitleWrapperStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 23px;
  font-weight: bold;
  border-top: 1px solid black;
  padding-top: 20px;
`;

const ProductDetailTitleBadgeStyled = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  color: gray;
  font-size: 17px !important;
  font-weight: lighter !important;
  text-transform: capitalize !important;
`;

const ProductDetailOtherDetailWrapperStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 23px;
  font-weight: bold;
  border-top: 1px solid black;
  padding-top: 20px;
`;

export {
  ProductDetailWrapperStyled,
  ProductDetailTitleWrapperStyled,
  ProductDetailTitleBadgeStyled,
};
