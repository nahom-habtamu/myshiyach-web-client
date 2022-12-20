import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const ProductListItemsWrapperStyled = styled.div<{hasMargin: boolean}>`
  margin: ${props => props.hasMargin ? '25px 50px' : '0px 0px'};
  background: white;
  padding: 15px;
  width: ${props => props.hasMargin ? '95%' : '100%'};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    margin: 15px 0px;
  }
`;

const ProductListItemWrapperStyled = styled.div`
  display: flex;
  height: 160px;
  width: 80%;
  gap: 25px;
  margin: 15px 25px;
  border-top: 1px solid black;
  padding-top: 15px;
  position: relative;

  @media (max-width: 1200px) {
    height: 135px;
    width: 90%;
  }

  @media (max-width: 500px) {
    height: 140px;
    width: 95%;
    margin: 10px 15px;
    gap: 5px;
  }

`;

const ProductListItemImageWrapperStyled = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 900px) {
    width: 40%;
    height: 100%;
  }

  @media (max-width: 500px) {
    width: 50%;
    height: 100%;
  }

`;

const ProductListItemImageStyled = styled.img`
  width: 100%;
  height: 70%;
  object-fit: fit;
  
  @media (max-width: 500px) {
    width: 100%;
    height: 80%;
    line-height: 80%;
  }
`;

const ProductListItemOtherContentWrapper = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductListItemTitleStyled = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-block: 5px;
  letter-spacing: 1px;
  
  @media (max-width: 1200px) {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
    font-weight: 400;
  }

`;

const ProductListItemCityStyled = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 5px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    margin-bottom: 0px;
  }

`;

const ProductListItemDescriptionStyled = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  color: gray;
  line-height: 22px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
    line-height: 20px;
  }

  @media (max-width: 900px) {
    margin-bottom: 5px;
    line-height: 18px;
  }

  @media (max-width: 500px) {
    margin-bottom: 0px;
    line-height: 12px;
    font-size: 11px;
  }

`;

const ProductListItemPriceStyled = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 17px;
    margin-bottom: 15px;
  }

  @media (max-width: 900px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    margin-bottom: 3px;
  }
`;

const ProductListItemFavoritesButtonWrapperStyled = styled.div`
  position: absolute;
  right: 5px;
  height: fit-content;
  width: fit-content;
  top: 20px;
  color: ${PINK_COLOR};
  
  @media (max-width: 900px) {
    height: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
  
  @media (max-width: 500px) {
    height: 92%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;

const ProductListItemRefreshedTimeStyled = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  font-size: 15px;
  color: gray;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 900px) {
    left: 5px;
    bottom: -5px;
    font-size: 12px;
    padding-top: 10px;
  }

  @media (max-width: 500px) {
    left: 5px;
    bottom: -5px;
    font-size: 11px;
    padding-top: 10px;
  }
`;

const ProductListItemNoMoreProductsStyled = styled.div`
  text-align: center;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 25px;
`;

export {
  ProductListItemsWrapperStyled,
  ProductListItemWrapperStyled,
  ProductListItemImageWrapperStyled,
  ProductListItemImageStyled,
  ProductListItemOtherContentWrapper,
  ProductListItemTitleStyled,
  ProductListItemCityStyled,
  ProductListItemDescriptionStyled,
  ProductListItemPriceStyled,
  ProductListItemFavoritesButtonWrapperStyled,
  ProductListItemRefreshedTimeStyled,
  ProductListItemNoMoreProductsStyled,
};
