import React from "react";
import Product from "../../../core/models/product/product";
import chunkArrayToEqualParts from "../../../core/utils/chunkArrayToEqualParts";
import parseObjectToListOfObject from "../../../core/utils/parseObjectToList";
import { ProductDetailKeyValueRowStyled } from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";
import ProductDetailKeyValue from "./ProductDetailKeyValue";

const ProductDetailOtherInfo = ({
  product,
}: {
  product: Product | undefined;
}) => {
  const keyValueList = parseObjectToListOfObject(product?.productDetail ?? []);
  let chunkedKeyValueList = chunkArrayToEqualParts(2, keyValueList);
  let productDetailInfo = chunkedKeyValueList.map((chunk, index) => {
    return (
      <ProductDetailKeyValueRowStyled key={index}>
        {chunk.map((chunkItem: any) => (
          <ProductDetailKeyValue
            args={{
              key: chunkItem.value["title"].split(";")[0] as string,
              value: chunkItem.value["value"].split(";")[0] as string,
            }}
          />
        ))}
      </ProductDetailKeyValueRowStyled>
    );
  });

  return <>{productDetailInfo}</>;
};

export default ProductDetailOtherInfo;
