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

const ProductDetailRecommendedItems = () => {
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
    <RecommendedItemsSectionWrapperStyled>
      <RecommendedItemsTextStyled>Recommended Items</RecommendedItemsTextStyled>
      <RecommendedItemsWrapperStyled>
        {renderRecommendedItems()}
      </RecommendedItemsWrapperStyled>
    </RecommendedItemsSectionWrapperStyled>
  );
};

export default ProductDetailRecommendedItems;
