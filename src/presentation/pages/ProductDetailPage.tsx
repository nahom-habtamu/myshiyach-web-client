import { useEffect } from "react";
import ProductDetailCarousel from "../components/product_detail/ProductDetailCarousel";
import {
  ProductDetailTitleBadgeStyled,
  ProductDetailTitleWrapperStyled,
  ProductDetailWrapperStyled,
} from "../styled_components/product_detail/ProductDetailComponentsStyled";

const ProductDetailPage = () => {
  return (
    <ProductDetailWrapperStyled>
      <ProductDetailTitleWrapperStyled>
        <ProductDetailTitleBadgeStyled>Title</ProductDetailTitleBadgeStyled>
        cycle count 11, macbook pro 2019"6 laptop, 512gb ssd
      </ProductDetailTitleWrapperStyled>
      <ProductDetailCarousel></ProductDetailCarousel>
    </ProductDetailWrapperStyled>
  );
};

export default ProductDetailPage;
export const ProductDetailPageRoute = "/productDetail";
