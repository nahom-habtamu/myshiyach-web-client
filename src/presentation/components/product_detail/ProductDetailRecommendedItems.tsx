import { useHistory } from "react-router-dom";
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
import formatRefreshedAtDate from "../../utils/formatRefreshedAtDate";
import { useAppDispatch } from "../../../store/storeHooks";

const ProductDetailRecommendedItems = ({ products }: { products: Product[] }) => {
  const history = useHistory();

  const renderRecommendedItems = () => {
    const handleNavigatingToProductDetailPage = (id: string) => {
      history.push({
        pathname: `/productDetail/${id}`,
      });
    }
    const recomendedItems = products.map((product) => (
      <RecommendedItemWrapperStyled onClick={() => handleNavigatingToProductDetailPage(product._id)}>
        <RecommendedItemColumnStyled>
          <RecommendedItemImageStyled src={product.productImages[0]} />
          <RecommendedItemTitleStyled>
            {product.title}
          </RecommendedItemTitleStyled>
          <RecommendedItemTimeLabelStyled>
            {formatRefreshedAtDate(product.refreshedAt)}
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
