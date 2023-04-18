import { useHistory } from "react-router-dom";
import User from "../../../core/models/user/user";
import { PRIMARY_COLOR } from "../../constants/colors";
import { ProductDetailKeyValueRowStyled } from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";
import ProductDetailKeyValue from "./ProductDetailKeyValue";
import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import { toggleLoginPromptModalOpen } from "../../../core/action_creators/common/login_prompt_action_creators";

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

  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleClick = () => {
    if (loginState.result.token.length === 0) {
      dispatch(toggleLoginPromptModalOpen());
    } else {
      history.push({
        pathname: `/productsByUser/${user?._id ?? ""}`,
      });
    }
  }

  return (
    <ProductDetailKeyValueRowStyled
      onClick={() => handleClick()}
    >
      <>
        <ProductDetailKeyValue
          args={{
            key: "name",
            value: loginState.result.token.length === 0 ? "Login For Details" : contactName ?? user?.fullName ?? "",
            ...keyValueProps,
          }}
        />
        <ProductDetailKeyValue
          args={{
            key: "Phone No",
            value: loginState.result.token.length === 0 ? "Login For Details" : contactPhone,
            ...keyValueProps,
          }}
        />
      </>
    </ProductDetailKeyValueRowStyled>
  );
};

export default ProductDetailPersonInfo;
