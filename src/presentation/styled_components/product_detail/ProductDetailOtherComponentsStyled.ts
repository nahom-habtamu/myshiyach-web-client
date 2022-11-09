import styled from "styled-components";
import { PINK_COLOR, PRIMARY_COLOR } from "../../constants/colors";

const ProductDetailWrapperStyled = styled.div`
  width: 50%;
  height: 100%;
  margin: 25px auto;
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
`;

const ProductDetailButtonWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 35px;
  border-bottom: 1px solid black;
  margin: 25px auto;
`;

const SendMessageButtonStyled = styled.button`
  width: 350px;
  height: 70px;
  font-size: 20px;
  border-radius: 20px;
  background: ${PRIMARY_COLOR};
  color: white;
  border: 2px solid transparent;
  transition: all 0.5s ease;

  :hover {
    color: ${PRIMARY_COLOR};
    background: white;
    border: 2px solid ${PRIMARY_COLOR};
  }
`;

const FavoritesButtonStyled = styled.button`
  width: 350px;
  height: 70px;
  font-size: 20px;
  border-radius: 20px;
  background: white;
  color: black;
  border: 2px solid ${PINK_COLOR};
  transition: all 0.5s ease;

  :hover {
    color: white;
    background: ${PINK_COLOR};
    border: 2px solid transparent;
  }
`;

const RecommendedItemsSectionWrapperStyled = styled.div``;

const RecommendedItemsTextStyled = styled.div`
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin-block: 15px;
`;

const RecommendedItemsWrapperStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 1);
  }
`;

const RecommendedItemWrapperStyled = styled.div`
  width: 300px;
  height: 250px;
  display: inline-block;
  margin-right: 45px;
  padding-bottom: 20px;
`;

const RecommendedItemColumnStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecommendedItemTimeLabelStyled = styled.div`
  font-size: 15px;
  color: lightgray;
`;

const RecommendedItemImageStyled = styled.img`
  width: 100%;
  height: 80%;
  object-fit: center center;
`;

const RecommendedItemTitleStyled = styled.div`
  font-size: 20px;
  color: black;
`;

export {
  ProductDetailWrapperStyled,
  ProductDetailKeyValueRowStyled,
  ProductDetailKeyValueWrapperStyled,
  ProductDetailKeyStyled,
  ProductDetailValueStyled,
  ProductDetailButtonWrapperStyled,
  SendMessageButtonStyled,
  FavoritesButtonStyled,
  RecommendedItemsSectionWrapperStyled,
  RecommendedItemsTextStyled,
  RecommendedItemsWrapperStyled,
  RecommendedItemWrapperStyled,
  RecommendedItemColumnStyled,
  RecommendedItemImageStyled,
  RecommendedItemTitleStyled,
  RecommendedItemTimeLabelStyled,
};
