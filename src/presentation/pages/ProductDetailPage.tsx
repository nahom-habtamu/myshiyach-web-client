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
  RecommendedItemsSectionWrapperStyled,
  RecommendedItemsTextStyled,
  RecommendedItemsWrapperStyled,
  RecommendedItemWrapperStyled,
  RecommendedItemColumnStyled,
  RecommendedItemImageStyled,
  RecommendedItemTitleStyled,
  RecommendedItemTimeLabelStyled,
} from "../styled_components/product_detail/ProductDetailOtherComponentsStyled";

import formatToPrice from "../../core/utils/comma_separator";
import { PRIMARY_COLOR } from "../constants/colors";
import { FiHeart, FiSend } from "react-icons/fi";

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

  const renderRecommendedItems = () => {
    const recomendedItems = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
      <RecommendedItemWrapperStyled>
        <RecommendedItemColumnStyled>
          <RecommendedItemImageStyled src="https://images.unsplash.com/photo-1667857481501-b447de8ed0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <RecommendedItemTitleStyled>
            2 x DELL 17" LCD TFT Monitor
          </RecommendedItemTitleStyled>
          <RecommendedItemTimeLabelStyled>
            2 days ago
          </RecommendedItemTimeLabelStyled>
        </RecommendedItemColumnStyled>
      </RecommendedItemWrapperStyled>
    ));
    return recomendedItems;
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

      <RecommendedItemsSectionWrapperStyled>
        <RecommendedItemsTextStyled>
          Recommended Items
        </RecommendedItemsTextStyled>
        <RecommendedItemsWrapperStyled>
          {renderRecommendedItems()}
        </RecommendedItemsWrapperStyled>
      </RecommendedItemsSectionWrapperStyled>
    </ProductDetailWrapperStyled>
  );
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail";
