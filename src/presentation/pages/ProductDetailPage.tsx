import ProductDetailCarousel from "../components/product_detail/ProductDetailCarousel";
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
import ProductDetailRecommendedItems from "../components/product_detail/ProductDetailRecommendedItems";

const ProductDetailPage = () => {
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
    return (
      <ProductDetailKeyValueRowStyled>
        {renderKeyValue({
          key: "name",
          value: "Yonathan Zelalem",
          color: PRIMARY_COLOR,
          fontSize: 18,
          fontWeight: 500,
        })}
        {renderKeyValue({
          key: "Phone No",
          value: "092684984855",
          color: PRIMARY_COLOR,
          fontSize: 18,
          fontWeight: 500,
        })}
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderProductTimeInfo = () => {
    return (
      <ProductDetailKeyValueRowStyled>
        {renderKeyValue({
          key: "created",
          value: "7 Days Ago",
          fontSize: 18,
        })}
        {renderKeyValue({
          key: "Last Updated",
          value: "2 Minutes Ago",
          fontSize: 18,
        })}
      </ProductDetailKeyValueRowStyled>
    );
  };

  const renderPrice = () =>
    renderKeyValue({
      key: "price",
      value: formatToPrice(50000).toString(),
      color: "lightgreen",
      fontSize: 38,
      fontWeight: 500,
    });

  const renderDescription = () =>
    renderKeyValue({
      key: "description",
      value:
        "CYCLE COUNT 11, MACBOOK PRO 2019 16” LAPTOP, 512GB SSD, 16GB RAM, I7, ONLY USED FEW DAYS,GOOD AS NEWNO OFFERS, CAN HAND DELIVER",
    });

  const renderCity = () =>
    renderKeyValue({
      key: "city",
      value: "Adama",
    });

  const renderTitle = () =>
    renderKeyValue({
      key: "title",
      value: "CYCLE COUNT 11, MACBOOK PRO 2019 16” LAPTOP, 512GB SSD,",
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
      <ProductDetailCarousel />
      {renderCity()}
      {renderPrice()}
      {renderPersonalInfo()}
      {renderProductTimeInfo()}
      {renderDescription()}

      {renderSendMessageButton()}
      {renderFavoritesButton()}

      <ProductDetailRecommendedItems />
    </ProductDetailWrapperStyled>
  );
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail";
