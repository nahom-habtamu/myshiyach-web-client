import styled from "styled-components";
import { PINK_COLOR, PRIMARY_COLOR } from "../../constants/colors";

const ProductDetailWrapperStyled = styled.div`
  width: 60%;
  height: 100%;
  margin: 25px auto;  
  
  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const ProductDetailKeyValueRowStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProductDetailKeyValueWrapperStyled = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  border-top: 1px solid darkgray;
  padding-block: 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ProductDetailKeyStyled = styled.div`
  font-size: 16px;
  color: gray;
  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const ProductDetailValueStyled = styled.div<{
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textTransform?: string;
}>`
  font-size: ${(props) => props.fontSize || 20};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || "black"};
  text-transform: ${(props) => props.textTransform || "none"};

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }

`;

const ProductDetailButtonWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 35px;
  border-bottom: 1px solid black;
  margin: 25px auto;
`;

const ActionButtonStyled = styled.button<{ color?: string }>`
  width: 350px;
  height: 70px;
  font-size: 20px;
  border-radius: 20px;
  background: ${(props) => props.color ?? PRIMARY_COLOR};
  color: white;
  border: 2px solid transparent;
  transition: all 0.5s ease;

  :hover {
    color: ${(props) => props.color ?? PRIMARY_COLOR};
    background: white;
    border: 2px solid ${(props) => props.color ?? PRIMARY_COLOR};
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 60px;
    font-size: 18px;
    border-radius: 20px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 50px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

const OutlineActionButtonStyled = styled.button<{ color?: string }>`
  width: 350px;
  height: 70px;
  font-size: 20px;
  border-radius: 20px;
  background: white;
  color: black;
  border: 2px solid ${(props) => props.color ?? PINK_COLOR};
  transition: all 0.5s ease;

  :hover {
    color: white;
    background: ${(props) => props.color ?? PINK_COLOR};
    border: 2px solid transparent;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 60px;
    font-size: 18px;
    border-radius: 20px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 50px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

export {
  ProductDetailWrapperStyled,
  ProductDetailKeyValueRowStyled,
  ProductDetailKeyValueWrapperStyled,
  ProductDetailKeyStyled,
  ProductDetailValueStyled,
  ProductDetailButtonWrapperStyled,
  ActionButtonStyled,
  OutlineActionButtonStyled,
};
