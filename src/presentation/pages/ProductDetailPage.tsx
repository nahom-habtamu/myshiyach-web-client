import {
  ProductDetailKeyStyled,
  ProductDetailKeyValueRowStyled,
  ProductDetailKeyValueWrapperStyled,
  ProductDetailValueStyled,
  ProductDetailWrapperStyled,
  SendMessageButtonStyled,
  ProductDetailButtonWrapperStyled,
  FavoritesButtonStyled,
} from "../styled_components/product_detail/ProductDetailOtherComponentsStyled";

import formatToPrice from "../../core/utils/comma_separator";
import { PRIMARY_COLOR } from "../constants/colors";
import { FiHeart, FiSend } from "react-icons/fi";
import ProductDetailCarousel from "../components/product_detail/ProductDetailCarousel";
import ProductDetailRecommendedItems from "../components/product_detail/ProductDetailRecommendedItems";
import { useLocation } from "react-router-dom";
import Product from "../../core/models/product/product";
import parseObjectToListOfObject from "../../core/utils/parseObjectToList";
import chunkArrayToEqualParts from "../../core/utils/chunkArrayToEqualParts";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { useEffect, useState } from "react";
import { getUserById } from "../../core/action_creators/user/get_user_by_id_action_creators";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { getRecommendedProducts } from "../../core/action_creators/product/get_recommended_products_action_creators";
import { refreshProduct } from "../../core/action_creators/product/refresh_product_action_creators";

const ProductDetailPage = () => {
  const location = useLocation();

  const [product, setProduct] = useState<Product>(location.state as Product);

  const authState = useAppSelector((state) => state.login);
  const getUserByIdState = useAppSelector((state) => state.getUserById);
  const getRecommendedProductsState = useAppSelector(
    (state) => state.recommendedProducts
  );
  const refreshProductState = useAppSelector((state) => state.refreshProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setProduct(refreshProductState.product ?? product);
  }, [refreshProductState.product?.refreshedAt]);

  useEffect(() => {
    dispatch(getUserById(product.createdBy, authState.result.token as string));
  }, [product.createdBy, dispatch, authState.result.token]);

  useEffect(() => {
    dispatch(refreshProduct(product._id, authState.result.token as string));
  }, [product._id, dispatch, authState.result.token]);

  useEffect(() => {
    dispatch(
      getRecommendedProducts({
        page: 1,
        limit: 1000000,
        filterCriteria: {
          mainCategory: product.mainCategory,
          subCategory: product.subCategory,
        },
      })
    );
  }, [product.mainCategory, product.subCategory, dispatch]);

  type RenderKeyValueArgs = {
    key: string;
    value: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    textTransform?: string;
  };

  const renderKeyValue = (args: RenderKeyValueArgs) => {
    return (
      <ProductDetailKeyValueWrapperStyled>
        <ProductDetailKeyStyled>{args.key}</ProductDetailKeyStyled>
        <ProductDetailValueStyled
          fontSize={args.fontSize}
          fontWeight={args.fontWeight}
          textTransform={args.textTransform}
          color={args.color}
        >
          {args.value}
        </ProductDetailValueStyled>
      </ProductDetailKeyValueWrapperStyled>
    );
  };

  const renderPersonalInfo = () => {
    let keyValueProps = {
      color: PRIMARY_COLOR,
      fontSize: 18,
      fontWeight: 500,
    };
    return (
      <ProductDetailKeyValueRowStyled>
        {getUserByIdState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {renderKeyValue({
              key: "name",
              value: getUserByIdState.user?.fullName ?? "",
              ...keyValueProps,
            })}
            {renderKeyValue({
              key: "Phone No",
              value: getUserByIdState.user?.phoneNumber ?? "",
              ...keyValueProps,
            })}
          </>
        )}
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderProductTimeInfo = () => {
    return (
      <ProductDetailKeyValueRowStyled>
        {renderKeyValue({
          key: "created",
          value: product.createdAt,
          fontSize: 18,
        })}
        {renderKeyValue({
          key: "Last Updated",
          value: product.refreshedAt,
          fontSize: 18,
        })}
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderProductDetailInfo = () => {
    const keyValueList = parseObjectToListOfObject(product.productDetail);
    let chunkedKeyValueList = chunkArrayToEqualParts(2, keyValueList);

    let productDetailInfo = chunkedKeyValueList.map((chunk, index) => {
      return (
        <ProductDetailKeyValueRowStyled key={index}>
          {chunk.map((chunkItem: any) =>
            renderKeyValue({
              key: chunkItem.key,
              value: chunkItem.value as string,
            })
          )}
        </ProductDetailKeyValueRowStyled>
      );
    });

    return productDetailInfo;
  };

  const renderPrice = () =>
    renderKeyValue({
      key: "price",
      value: formatToPrice(product.price).toString() + " ETB",
      color: "lightgreen",
      fontSize: 38,
      fontWeight: 500,
    });

  const renderDescription = () =>
    renderKeyValue({
      key: "description",
      value: product.description,
    });

  const renderCity = () =>
    renderKeyValue({
      key: "city",
      value: product.city,
    });

  const renderTitle = () =>
    renderKeyValue({
      key: "title",
      value: product.title,
      fontSize: 28,
      fontWeight: 500,
      textTransform: "uppercase",
    });

  const renderSendMessageButton = () => {
    return (
      <ProductDetailButtonWrapperStyled>
        <SendMessageButtonStyled>
          <FiSend size={25} style={{ marginBottom: "-5px" }} /> Send Message
        </SendMessageButtonStyled>
      </ProductDetailButtonWrapperStyled>
    );
  };

  const renderFavoritesButton = () => {
    return (
      <ProductDetailButtonWrapperStyled>
        <FavoritesButtonStyled>
          <FiHeart size={25} style={{ marginBottom: "-5px" }} /> Add to
          Favorites
        </FavoritesButtonStyled>
      </ProductDetailButtonWrapperStyled>
    );
  };

  return (
    <ProductDetailWrapperStyled>
      {renderTitle()}
      <ProductDetailCarousel pictures={product.productImages} />
      {renderCity()}
      {renderPrice()}
      {renderPersonalInfo()}
      {renderProductTimeInfo()}
      {renderProductDetailInfo()}
      {renderDescription()}

      {renderSendMessageButton()}
      {renderFavoritesButton()}

      {getRecommendedProductsState.isLoading ? (
        <LoadingSpinner />
      ) : (
        renderRecommendedItems()
      )}
    </ProductDetailWrapperStyled>
  );

  function renderRecommendedItems() {
    let recommmendedItems = getRecommendedProductsState.products.filter(
      (p) => p._id !== product._id
    );
    return (
      recommmendedItems.length > 0 && (
        <ProductDetailRecommendedItems products={recommmendedItems} />
      )
    );
  }
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail";
