import { ProductDetailWrapperStyled } from "../styled_components/product_detail/ProductDetailOtherComponentsStyled";
import formatToPrice from "../../core/utils/comma_separator";
import ProductDetailCarousel from "../components/product_detail/ProductDetailCarousel";
import ProductDetailRecommendedItems from "../components/product_detail/ProductDetailRecommendedItems";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { useEffect } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { getRecommendedProducts } from "../../core/action_creators/product/get_recommended_products_action_creators";
import {
  clearRefreshProduct,
  refreshProduct,
} from "../../core/action_creators/product/refresh_product_action_creators";
import { useHistory, useParams } from "react-router-dom";
import { getProductDetail } from "../../core/action_creators/product/get_product_detail_action_creators";
import MasterComponent from "../components/common/MasterComponent";
import {
  clearGoToChat,
  goToChat,
} from "../../core/action_creators/chat/go_to_chat_action_creators";

import ProductDetailPersonInfo from "../components/product_detail/ProductDetailPersonInfo";
import ProductTimeInfo from "../components/product_detail/ProductTimeInfo";
import ProductDetailKeyValue from "../components/product_detail/ProductDetailKeyValue";
import ProductDetailRefreshProductButton from "../components/product_detail/ProductDetailRefreshProductButton";
import ProductDetailSendMessageButton from "../components/product_detail/ProductDetailSendMessageButton";
import ProductDetailEditButton from "../components/product_detail/ProductDetailEditButton";
import ProductDetailFavoritesButton from "../components/product_detail/ProductDetailFavoritesButton";
import ProductDetailOtherInfo from "../components/product_detail/ProductDetailOtherInfo";
import useScrollToTop from "../custom_hooks/useScrollToTop";

const ProductDetailPage = () => {
  let { id } = useParams<any>();
  const history = useHistory();
  useScrollToTop();

  const productDetailState = useAppSelector((state) => state.getProductDetail);
  const loginState = useAppSelector((state) => state.login);
  const goToChatState = useAppSelector((state) => state.goToChat);
  const getRecommendedProductsState = useAppSelector(
    (state) => state.recommendedProducts
  );
  const refreshProductState = useAppSelector((state) => state.refreshProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearGoToChat());
    dispatch(getProductDetail(id, loginState.result.token));
  }, [dispatch]);

  useEffect(() => {
    if (goToChatState.conversationId != null) {
      history.push(`/chatDetail/${goToChatState.conversationId}`);
    }
  }, [goToChatState.conversationId]);

  useEffect(() => {
    if (refreshProductState.product != null) {
      dispatch(clearRefreshProduct());
    }
  }, [refreshProductState.product, dispatch]);

  const handleRefresh = () => {
    dispatch(
      refreshProduct(
        productDetailState.result!.product._id,
        loginState.result.token as string
      )
    );
  };

  useEffect(() => {
    if (productDetailState.result?.product != null) {
      dispatch(
        getRecommendedProducts({
          page: 1,
          limit: 1000000,
          filterCriteria: {
            mainCategory: productDetailState.result!.product.mainCategory,
            subCategory: productDetailState.result!.product.subCategory,
          },
        })
      );
    }
  }, [
    productDetailState.result?.product.mainCategory,
    productDetailState.result?.product.subCategory,
    dispatch,
  ]);

  const renderPersonalInfo = () => {
    return (
      <ProductDetailPersonInfo user={productDetailState.result?.createdBy} />
    );
  };

  const renderProductTimeInfo = () => (
    <ProductTimeInfo
      createdAt={productDetailState.result?.product.createdAt ?? ""}
      refreshedAt={productDetailState.result?.product.refreshedAt ?? ""}
    />
  );

  const renderPrice = () => (
    <ProductDetailKeyValue
      args={{
        key: "price",
        value:
          formatToPrice(
            productDetailState.result?.product.price ?? 0
          ).toString() + " ETB",
        color: "lightgreen",
        fontSize: 38,
        fontWeight: 500,
      }}
    />
  );

  const renderDescription = () => (
    <ProductDetailKeyValue
      args={{
        key: "description",
        value: productDetailState.result?.product.description ?? "",
      }}
    />
  );

  const renderCity = () => (
    <ProductDetailKeyValue
      args={{
        key: "city",
        value: productDetailState.result?.product.city.split(";")[0] ?? "",
      }}
    />
  );

  const renderTitle = () => (
    <ProductDetailKeyValue
      args={{
        key: "title",
        value: productDetailState.result?.product.title ?? "",
        fontSize: 28,
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    />
  );

  const handleGoToChat = () => {
    dispatch(
      goToChat({
        memberOne: productDetailState.result!.createdBy._id,
        memberTwo: loginState.result.currentUser!._id,
      })
    );
  };

  const renderProductDetailInfo = () => (
    <ProductDetailOtherInfo product={productDetailState.result?.product} />
  );

  const renderActionButton = () => {
    let isCreatedByCurrentUser =
      productDetailState.result?.product.createdBy ===
      loginState.result.currentUser?._id;
    if (isCreatedByCurrentUser) {
      return <ProductDetailRefreshProductButton onRefresh={handleRefresh} />;
    } else {
      return <ProductDetailSendMessageButton onGoToChat={handleGoToChat} />;
    }
  };

  const renderOutlineActionButton = () => {
    let isCreatedByCurrentUser =
      productDetailState.result?.product.createdBy ===
      loginState.result.currentUser?._id;
    if (isCreatedByCurrentUser) {
      return (
        <ProductDetailEditButton
          productId={productDetailState.result?.product._id ?? ""}
        />
      );
    } else {
      return (
        <ProductDetailFavoritesButton
          product={productDetailState.result?.product}
        />
      );
    }
  };

  return (
    <MasterComponent activePage={ProductDetailPageRoute}>
      {productDetailState.isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductDetailWrapperStyled>
          {renderTitle()}
          <ProductDetailCarousel
            pictures={productDetailState.result?.product.productImages ?? []}
          />
          {renderCity()}
          {renderPrice()}
          {renderPersonalInfo()}
          {renderProductTimeInfo()}
          {renderProductDetailInfo()}
          {renderDescription()}

          {renderActionButton()}
          {renderOutlineActionButton()}

          {getRecommendedProductsState.isLoading ? (
            <LoadingSpinner />
          ) : (
            renderRecommendedItems()
          )}
        </ProductDetailWrapperStyled>
      )}
    </MasterComponent>
  );

  function renderRecommendedItems() {
    let recommmendedItems = getRecommendedProductsState.products.filter(
      (p) => p._id !== productDetailState.result?.product._id
    );
    return (
      recommmendedItems.length > 0 && (
        <ProductDetailRecommendedItems products={recommmendedItems} />
      )
    );
  }
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail/:id";
