import { useHistory } from "react-router-dom";
import User from "../../../core/models/user/user";
import { PRIMARY_COLOR } from "../../constants/colors";
import { ProductDetailKeyValueRowStyled } from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";
import ProductDetailKeyValue from "./ProductDetailKeyValue";

type ProductDetailPersonInfoProps = {
  user: User | undefined,
  contactPhone: string,
  contactName: string | undefined | null
};


const ProductDetailPersonInfo = ({ user, contactPhone, contactName }: ProductDetailPersonInfoProps) => {
  let keyValueProps = {
    color: PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 500,
  };

  const history = useHistory();

  return (
    <ProductDetailKeyValueRowStyled
      onClick={() => history.push(`/productsByUser/${user?._id ?? ""}`)}
    >
      <>
        <ProductDetailKeyValue
          args={{
            key: "name",
            value: contactName ?? user?.fullName ?? "",
            ...keyValueProps,
          }}
        />
        <ProductDetailKeyValue
          args={{
            key: "Phone No",
            value: contactPhone,
            ...keyValueProps,
          }}
        />
      </>
    </ProductDetailKeyValueRowStyled>
  );
};

export default ProductDetailPersonInfo;
