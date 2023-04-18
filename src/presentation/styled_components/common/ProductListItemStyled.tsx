import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const ProductListItemsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin-block: 20px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
    float: left;
    grid-template-columns:  1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1400px) {
    float: left;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
  }
`;

const ProductListItemWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 350px;
  width: 170px;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);

  @media (min-width: 500px) {
    width: 240px;
  }

  @media (min-width: 600px) {
    width: 250px;
  }

  @media (min-width: 800px) {
    width: 230px;
  }

  @media (min-width: 1200px) {
    width: 280px;
  }

  @media (min-width: 1400px) {
    width: 250px;
  }

  @media (min-width: 1600px) {
    width: 270px;
  }
`;

const ProductListItemImageWrapperStyled = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ProductListItemImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  object-fit: center center;
`;

const ProductListItemOtherContentWrapper = styled.div`
  width: 93%;
  margin: 0 auto;
  height: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProductListItemTitleStyled = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  margin-top: 25px;

  @media (min-width: 800px) {
    margin-bottom: 40px;
  }
`;

const ProductListItemCityStyled = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 500;
`;

const ProductListItemPriceStyled = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  color: #52a744;
  line-height: 20.83px;
  font-weight: 700;
`;

const ProductListItemFavoritesButtonWrapperStyled = styled.div`
  position: absolute;
  right: 25px;
  top: 32%;
  height: 40px;
  width: 40px;
  box-shadow: 0 0 12px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 100%;
  color: ${PINK_COLOR};

  @media (min-width: 500px) {
    height: 50px;
    width: 50px;
  }
`;

const ProductListItemRefreshedTimeStyled = styled.div`
  font-size: 13px;
  color: gray;
  width: fit-content;
`;

const ProductListItemNoMoreProductsStyled = styled.div`
  text-align: center;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 25px;
  height: 300px;
  width: 90%;
  line-height: 300px;
  text-align: center;
  background: white;
  margin: 25px auto;
`;

export {
  ProductListItemsWrapperStyled,
  ProductListItemWrapperStyled,
  ProductListItemImageWrapperStyled,
  ProductListItemImageStyled,
  ProductListItemOtherContentWrapper,
  ProductListItemTitleStyled,
  ProductListItemCityStyled,
  ProductListItemPriceStyled,
  ProductListItemFavoritesButtonWrapperStyled,
  ProductListItemRefreshedTimeStyled,
  ProductListItemNoMoreProductsStyled,
};
