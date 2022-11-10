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

const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state as Product;

  console.log(product);

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
        {renderKeyValue({
          key: "name",
          value: "Yonathan Zelalem",
          ...keyValueProps,
        })}
        {renderKeyValue({
          key: "Phone No",
          value: "092684984855",
          ...keyValueProps,
        })}
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

      <ProductDetailRecommendedItems />
    </ProductDetailWrapperStyled>
  );
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail";
