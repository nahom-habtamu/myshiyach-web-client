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

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import { useHistory } from "react-router-dom";
import { ProductDetailPageRoute } from "../../pages/ProductDetailPage";
import Product from "../../../core/models/product/product";
import { toggleLoginPromptModalOpen } from "../../../core/action_creators/common/login_prompt_action_creators";

type PaginatedProductsProps = {
  paginatedProductsResult: GetPaginatedProductsResult | null;
};

const PaginatedProducts = (props: PaginatedProductsProps) => {
  const history = useHistory();
  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const handleGoingToProductDetail = (product: Product) => {
    // if (loginState.token.length === 0) {
    //   dispatch(toggleLoginPromptModalOpen());
    // } else {
    history.push(ProductDetailPageRoute, product);
    // }
  };

  return (
    <HomePageProductsWrapperStyled>
      {props.paginatedProductsResult?.results.map((p) => (
        <HomePageProductWrapperStyled
          key={p._id}
          onClick={() => handleGoingToProductDetail(p)}
        >
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
