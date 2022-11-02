import styled from "styled-components";

const HomePageProductsWrapperStyled = styled.div`
  margin: 25px 50px;
  background: white;
  padding: 15px;
`;

const HomePageProductWrapperStyled = styled.div`
  display: flex;
  height: 160px;
  width: 800px;
  gap: 25px;
  margin: 15px 25px;
  border-top: 1px solid black;
  padding-top: 15px;
  position: relative;
`;

const HomePageProductImageWrapperStyled = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const HomePageProductImageStyled = styled.img`
  width: 100%;
  height: 70%;
  object-fit: fit;
`;

const HomePageOtherContentWrapper = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomePageProductTitleStyled = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-block: 5px;
  letter-spacing: 1px;
`;

const HomePageProductCityStyled = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;
`;

const HomePageProductDescriptionStyled = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  color: gray;
  line-height: 22px;
`;

const HomePageProductPriceStyled = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: #483549;
  line-height: 20.83px;
  font-weight: 700;
`;

const HomePageFavoritesButtonWrapperStyled = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 5px;
  top: 20px;
  color: red;
`;

const HomePageProductRefreshedTimeStyled = styled.div`
  position: absolute;
  right: 5px;
  bottom: 20px;
  font-size: 13px;
  color: gray;
`;

export {
  HomePageProductsWrapperStyled,
  HomePageProductWrapperStyled,
  HomePageProductImageWrapperStyled,
  HomePageProductImageStyled,
  HomePageOtherContentWrapper,
  HomePageProductTitleStyled,
  HomePageProductCityStyled,
  HomePageProductDescriptionStyled,
  HomePageProductPriceStyled,
  HomePageFavoritesButtonWrapperStyled,
  HomePageProductRefreshedTimeStyled,
};
