import formatToPrice from "../../../core/utils/comma_separator";
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
import {
  addSavedPostsItem,
  deleteSavedPostsItem,
} from "../../../core/action_creators/product/saved_products_action_creators";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const PaginatedProducts = ({ products }: { products: Product[] }) => {
  const loginState = useAppSelector((state) => state.login);
  const favoriteProductsState = useAppSelector((state) => state.savedPosts);
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

  const handleSavingProduct = (e: any, product: Product) => {
    e.stopPropagation();
    if (loginState.result.token.length === 0) {
      dispatch(toggleLoginPromptModalOpen());
    } else {
      dispatch(addSavedPostsItem(product));
    }
  };

  const handleDeletingSavedProduct = (e: any, product: Product) => {
    e.stopPropagation();
    if (loginState.result.token.length === 0) {
      dispatch(toggleLoginPromptModalOpen());
    } else {
      dispatch(deleteSavedPostsItem(product._id));
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
            <ProductListItemCityStyled>{p.city.split(';')[0]}</ProductListItemCityStyled>
            <ProductListItemDescriptionStyled>
              {p.description.slice(0, 150)}
            </ProductListItemDescriptionStyled>
            <ProductListItemPriceStyled>
              {formatToPrice(p.price)} Birr
            </ProductListItemPriceStyled>

            {p.createdBy !== loginState.result.currentUser?._id && (
              <ProductListItemFavoritesButtonWrapperStyled>
                {favoriteProductsState.products.filter((sp) => sp._id === p._id)
                  .length === 0 ? (
                  <MdFavoriteBorder
                    size={ICON_SIZE_MEDIUM}
                    onClick={(e) => handleSavingProduct(e, p)}
                  />
                ) : (
                  <MdFavorite
                    size={ICON_SIZE_MEDIUM}
                    onClick={(e) => handleDeletingSavedProduct(e, p)}
                  />
                )}
              </ProductListItemFavoritesButtonWrapperStyled>
            )}

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
