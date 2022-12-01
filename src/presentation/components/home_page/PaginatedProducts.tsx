import { GrFavorite } from "react-icons/gr";
import formatToPrice from "../../../core/utils/comma_separator";
import { PINK_COLOR } from "../../constants/colors";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
  ProductListItemFavoritesButtonWrapperStyled,
  ProductListItemOtherContentWrapper,
  ProductListItemCityStyled,
  ProductListItemDescriptionStyled,
  ProductListItemImageStyled,
  ProductListItemImageWrapperStyled,
  ProductListItemPriceStyled,
  ProductListItemRefreshedTimeStyled,
  ProductListItemsWrapperStyled,
  ProductListItemTitleStyled,
  ProductListItemWrapperStyled,
} from "../../styled_components/common/ProductListItemStyled";

import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import Product from "../../../core/models/product/product";
import { toggleLoginPromptModalOpen } from "../../../core/action_creators/common/login_prompt_action_creators";
import { useHistory } from "react-router-dom";

const PaginatedProducts = ({ products }: { products: Product[] }) => {
  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleGoingToProductDetail = (product: Product) => {
    if (loginState.result.token.length === 0) {
      dispatch(toggleLoginPromptModalOpen());
    } else {
      history.push({
        pathname: `/productDetail/${product._id}`,
      });
    }
  };

  return (
    <ProductListItemsWrapperStyled>
      {products.map((p) => (
        <ProductListItemWrapperStyled
          key={p._id}
          onClick={() => handleGoingToProductDetail(p)}
        >
          <ProductListItemImageWrapperStyled>
            <ProductListItemImageStyled src={p.productImages[0]} />
          </ProductListItemImageWrapperStyled>
          <ProductListItemOtherContentWrapper>
            <ProductListItemTitleStyled>{p.title}</ProductListItemTitleStyled>
            <ProductListItemCityStyled>{p.city}</ProductListItemCityStyled>
            <ProductListItemDescriptionStyled>
              {p.description.slice(0, 150)}
            </ProductListItemDescriptionStyled>
            <ProductListItemPriceStyled>
              {formatToPrice(p.price)} Birr
            </ProductListItemPriceStyled>
            <ProductListItemFavoritesButtonWrapperStyled>
              <GrFavorite size={ICON_SIZE_MEDIUM} color={PINK_COLOR} />
            </ProductListItemFavoritesButtonWrapperStyled>
            <ProductListItemRefreshedTimeStyled>
              {p.refreshedAt}
            </ProductListItemRefreshedTimeStyled>
          </ProductListItemOtherContentWrapper>
        </ProductListItemWrapperStyled>
      ))}
    </ProductListItemsWrapperStyled>
  );
};

export default PaginatedProducts;
