import {
  ProductDetailKeyStyled,
  ProductDetailKeyValueRowStyled,
  ProductDetailKeyValueWrapperStyled,
  ProductDetailValueStyled,
  ProductDetailWrapperStyled,
  ActionButtonStyled,
  ProductDetailButtonWrapperStyled,
  OutlineActionButtonStyled,
} from "../styled_components/product_detail/ProductDetailOtherComponentsStyled";

import formatToPrice from "../../core/utils/comma_separator";
import { PRIMARY_COLOR } from "../constants/colors";
import { FiHeart, FiSend } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import ProductDetailCarousel from "../components/product_detail/ProductDetailCarousel";
import ProductDetailRecommendedItems from "../components/product_detail/ProductDetailRecommendedItems";
import parseObjectToListOfObject from "../../core/utils/parseObjectToList";
import chunkArrayToEqualParts from "../../core/utils/chunkArrayToEqualParts";

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
import MasterComponent from "../components/common/master_component";
import {
  clearGoToChat,
  goToChat,
} from "../../core/action_creators/chat/go_to_chat_action_creators";
import {
  addSavedPostsItem,
  deleteSavedPostsItem,
} from "../../core/action_creators/product/saved_products_action_creators";
import { ICON_SIZE_LARGE } from "../constants/sizes";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const ProductDetailPage = () => {
  let { id } = useParams<any>();
  const history = useHistory();

  const productDetailState = useAppSelector((state) => state.getProductDetail);
  const loginState = useAppSelector((state) => state.login);
  const goToChatState = useAppSelector((state) => state.goToChat);
  const favoriteProductsState = useAppSelector(
    (state) => state.savedPostsReducer
  );
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
      // TODO updating product after refreshing
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
      <ProductDetailKeyValueRowStyled
        onClick={() =>
          history.push(
            `/productsByUser/${productDetailState.result?.createdBy._id}`
          )
        }
      >
        <>
          {renderKeyValue({
            key: "name",
            value: productDetailState.result?.createdBy?.fullName ?? "",
            ...keyValueProps,
          })}
          {renderKeyValue({
            key: "Phone No",
            value: productDetailState.result?.createdBy?.phoneNumber ?? "",
            ...keyValueProps,
          })}
        </>
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderProductTimeInfo = () => {
    return (
      <ProductDetailKeyValueRowStyled>
        {renderKeyValue({
          key: "created",
          value: productDetailState.result?.product.createdAt ?? "",
          fontSize: 18,
        })}
        {renderKeyValue({
          key: "Last Updated",
          value: productDetailState.result?.product.refreshedAt ?? "",
          fontSize: 18,
        })}
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderProductDetailInfo = () => {
    const keyValueList = parseObjectToListOfObject(
      productDetailState.result?.product.productDetail ?? []
    );
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
      value:
        formatToPrice(
          productDetailState.result?.product.price ?? 0
        ).toString() + " ETB",
      color: "lightgreen",
      fontSize: 38,
      fontWeight: 500,
    });

  const renderDescription = () =>
    renderKeyValue({
      key: "description",
      value: productDetailState.result?.product.description ?? "",
    });

  const renderCity = () =>
    renderKeyValue({
      key: "city",
      value: productDetailState.result?.product.city ?? "",
    });

  const renderTitle = () =>
    renderKeyValue({
      key: "title",
      value: productDetailState.result?.product.title ?? "",
      fontSize: 28,
      fontWeight: 500,
      textTransform: "uppercase",
    });

  const handleGoToChat = () => {
    dispatch(
      goToChat({
        memberOne: productDetailState.result!.createdBy._id,
        memberTwo: loginState.result.currentUser!._id,
      })
    );
  };

  const renderActionButton = () => {
    let isCreatedByCurrentUser =
      productDetailState.result?.product.createdBy ===
      loginState.result.currentUser?._id;

    if (isCreatedByCurrentUser) {
      return (
        <ProductDetailButtonWrapperStyled>
          <ActionButtonStyled onClick={handleRefresh} color={"darkgrey"}>
            <FiSend size={25} style={{ marginBottom: "-5px" }} />
            {refreshProductState.isLoading
              ? "Refresh Product ......."
              : "Refresh Product"}
          </ActionButtonStyled>
        </ProductDetailButtonWrapperStyled>
      );
    } else {
      return (
        <ProductDetailButtonWrapperStyled>
          <ActionButtonStyled onClick={handleGoToChat}>
            <FiSend size={25} style={{ marginBottom: "-5px" }} />
            {goToChatState.isLoading ? "Send Message ......." : "Send Message"}
          </ActionButtonStyled>
        </ProductDetailButtonWrapperStyled>
      );
    }
  };

  const renderOutlineActionButton = () => {
    let isCreatedByCurrentUser =
      productDetailState.result?.product.createdBy ===
      loginState.result.currentUser?._id;

    if (isCreatedByCurrentUser) {
      return (
        <ProductDetailButtonWrapperStyled>
          <OutlineActionButtonStyled
            color="green"
            onClick={() => {
              history.push(
                `/editProduct/${productDetailState.result?.product._id}`
              );
            }}
          >
            <GrEdit size={25} style={{ marginBottom: "-5px" }} />
            Edit Product
          </OutlineActionButtonStyled>
        </ProductDetailButtonWrapperStyled>
      );
    } else {
      let isNotFavorite =
        favoriteProductsState.products.filter(
          (sp) => sp._id === productDetailState.result?.product._id
        ).length === 0;
      return (
        <ProductDetailButtonWrapperStyled>
          <OutlineActionButtonStyled
            onClick={() => {
              !isNotFavorite
                ? dispatch(
                    deleteSavedPostsItem(productDetailState.result!.product._id)
                  )
                : dispatch(
                    addSavedPostsItem(productDetailState.result!.product)
                  );
            }}
          >
            {isNotFavorite ? (
              <>
                <MdFavoriteBorder
                  size={ICON_SIZE_LARGE}
                  style={{ marginBottom: "-5px" }}
                />
                Add to Favorites
              </>
            ) : (
              <>
                <MdFavorite
                  size={ICON_SIZE_LARGE}
                  style={{ marginBottom: "-5px" }}
                />
                Remove From Favorites
              </>
            )}
          </OutlineActionButtonStyled>
        </ProductDetailButtonWrapperStyled>
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
