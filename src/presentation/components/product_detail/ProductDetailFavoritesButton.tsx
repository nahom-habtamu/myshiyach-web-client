import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  updateSavedPostsItem
} from "../../../core/action_creators/product/saved_products_action_creators";
import Product from "../../../core/models/product/product";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
  ProductDetailButtonWrapperStyled,
  OutlineActionButtonStyled,
} from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";

const ProductDetailFavoritesButton = ({
  product,
}: {
  product: Product | undefined;
}) => {
  const dispatch = useAppDispatch();
  const favoriteProductsState = useAppSelector((state) => state.savedPosts);
  const loginState = useAppSelector((state) => state.login);


  const addToFavorite = (product: Product) => {
    let favoriteProductsUpdated = [...favoriteProductsState.products, product];
    console.log(favoriteProductsUpdated);
    dispatch(updateSavedPostsItem(
      favoriteProductsUpdated,
      loginState.result.currentUser!._id,
      loginState.result.token)
    );
  }

  const removeFromFavorite = (product: Product) => {
    let favoriteProductsUpdated = favoriteProductsState.products.filter(p => p._id !== product._id);
    console.log(favoriteProductsUpdated);
    dispatch(updateSavedPostsItem(
      favoriteProductsUpdated,
      loginState.result.currentUser!._id,
      loginState.result.token)
    );
  }


  let isNotFavorite =
    favoriteProductsState.products.filter((sp) => sp._id === product?._id)
      .length === 0;
  return (
    <ProductDetailButtonWrapperStyled>
      <OutlineActionButtonStyled
        onClick={() => {
          !isNotFavorite
            ? removeFromFavorite(product!)
            : addToFavorite(product!);
        }}
      >
        {
          isNotFavorite ? <MdFavoriteBorder size={ICON_SIZE_MEDIUM} style={{ marginBottom: "-7px" }} /> :
            <MdFavorite size={ICON_SIZE_MEDIUM} style={{ marginBottom: "-7px" }} />
        }
        {
          isNotFavorite ? "Add To Favorites" : "Remove From Favorites"
        }
      </OutlineActionButtonStyled>
    </ProductDetailButtonWrapperStyled>
  );
};

export default ProductDetailFavoritesButton;
