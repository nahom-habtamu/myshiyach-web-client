import { ProductDetailKeyValueRowStyled } from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";
import ProductDetailKeyValue from "./ProductDetailKeyValue";

const ProductTimeInfo = ({
  createdAt,
  refreshedAt,
}: {
  createdAt: string;
  refreshedAt: string;
}) => {
  return (
    <ProductDetailKeyValueRowStyled>
      <ProductDetailKeyValue
        args={{
          key: "created",
          value: createdAt,
          fontSize: 18,
        }}
      />
      <ProductDetailKeyValue
        args={{
          key: "Last Updated",
          value: refreshedAt,
          fontSize: 18,
        }}
      />
    </ProductDetailKeyValueRowStyled>
  );
};

export default ProductTimeInfo;
