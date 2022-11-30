import styled from "styled-components";

const ProductListItemsWrapperStyled = styled.div`
  margin: 25px 50px;
  background: white;
  padding: 15px;
`;

const ProductListItemWrapperStyled = styled.div`
  display: flex;
  height: 160px;
  width: 800px;
  gap: 25px;
  margin: 15px 25px;
  border-top: 1px solid black;
  padding-top: 15px;
  position: relative;
`;

const ProductListItemImageWrapperStyled = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ProductListItemImageStyled = styled.img`
  width: 100%;
  height: 70%;
  object-fit: fit;
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
`;

const ProductListItemCityStyled = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;
`;

const ProductListItemDescriptionStyled = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  color: gray;
  line-height: 22px;
`;

const ProductListItemPriceStyled = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;
`;

const ProductListItemFavoritesButtonWrapperStyled = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 5px;
  top: 20px;
  color: red;
`;

const ProductListItemRefreshedTimeStyled = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  font-size: 13px;
  color: gray;
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
