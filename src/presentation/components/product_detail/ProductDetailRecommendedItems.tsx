import Product from "../../../core/models/product/product";
import {
  RecommendedItemColumnStyled,
  RecommendedItemImageStyled,
  RecommendedItemsSectionWrapperStyled,
  RecommendedItemsTextStyled,
  RecommendedItemsWrapperStyled,
  RecommendedItemTimeLabelStyled,
  RecommendedItemTitleStyled,
  RecommendedItemWrapperStyled,
} from "../../styled_components/product_detail/ProductDetailRecommendedStyled";

const ProductDetailRecommendedItems = ({
  products,
}: {
  products: Product[];
}) => {
  const renderRecommendedItems = () => {
    const recomendedItems = products.map((product) => (
      <RecommendedItemWrapperStyled>
        <RecommendedItemColumnStyled>
          <RecommendedItemImageStyled src={product.productImages[0]} />
          <RecommendedItemTitleStyled>
            {product.title}
          </RecommendedItemTitleStyled>
          <RecommendedItemTimeLabelStyled>
            {product.refreshedAt}
          </RecommendedItemTimeLabelStyled>
        </RecommendedItemColumnStyled>
      </RecommendedItemWrapperStyled>
    ));
    return recomendedItems;
  };

  return (
    <RecommendedItemsSectionWrapperStyled>
      <RecommendedItemsTextStyled>Recommended Items</RecommendedItemsTextStyled>
      <RecommendedItemsWrapperStyled>
        {renderRecommendedItems()}
      </RecommendedItemsWrapperStyled>
    </RecommendedItemsSectionWrapperStyled>
  );
};

export default ProductDetailRecommendedItems;
