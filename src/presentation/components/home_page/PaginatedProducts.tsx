import { GrFavorite } from "react-icons/gr";
import GetPaginatedProductsResult from "../../../core/models/product/get_paginated_products_result";
import formatToPrice from "../../../core/utils/comma_separator";
import { PINK_COLOR } from "../../constants/colors";
import { ICON_SIZE } from "../../constants/sizes";
import {
  HomePageFavoritesButtonWrapperStyled,
  HomePageOtherContentWrapper,
  HomePageProductCityStyled,
  HomePageProductDescriptionStyled,
  HomePageProductImageStyled,
  HomePageProductImageWrapperStyled,
  HomePageProductPriceStyled,
  HomePageProductRefreshedTimeStyled,
  HomePageProductsWrapperStyled,
  HomePageProductTitleStyled,
  HomePageProductWrapperStyled,
} from "../../styled_components/home/HomePageProductStyled";

type PaginatedProductsProps = {
  paginatedProductsResult: GetPaginatedProductsResult | null;
};

const PaginatedProducts = (props: PaginatedProductsProps) => {
  return (
    <HomePageProductsWrapperStyled>
      {props.paginatedProductsResult?.results.map((p) => (
        <HomePageProductWrapperStyled key={p._id}>
          <HomePageProductImageWrapperStyled>
            <HomePageProductImageStyled src={p.productImages[0]} />
          </HomePageProductImageWrapperStyled>
          <HomePageOtherContentWrapper>
            <HomePageProductTitleStyled>{p.title}</HomePageProductTitleStyled>
            <HomePageProductCityStyled>{p.city}</HomePageProductCityStyled>
            <HomePageProductDescriptionStyled>
              {p.description.slice(0, 150)}
            </HomePageProductDescriptionStyled>
            <HomePageProductPriceStyled>
              {formatToPrice(p.price)} Birr
            </HomePageProductPriceStyled>
            <HomePageFavoritesButtonWrapperStyled>
              <GrFavorite size={ICON_SIZE} color={PINK_COLOR} />
            </HomePageFavoritesButtonWrapperStyled>
            <HomePageProductRefreshedTimeStyled>
              {p.refreshedAt}
            </HomePageProductRefreshedTimeStyled>
          </HomePageOtherContentWrapper>
        </HomePageProductWrapperStyled>
      ))}
    </HomePageProductsWrapperStyled>
  );
};

export default PaginatedProducts;
