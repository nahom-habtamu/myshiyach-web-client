import {
  ProductDetailKeyValueWrapperStyled,
  ProductDetailKeyStyled,
  ProductDetailValueStyled,
} from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";

type RenderKeyValueArgs = {
  key: string;
  value: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textTransform?: string;
};
const ProductDetailKeyValue = ({ args }: { args: RenderKeyValueArgs }) => {
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

export default ProductDetailKeyValue;
