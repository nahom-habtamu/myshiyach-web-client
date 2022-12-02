import { FiSend } from "react-icons/fi";
import { useAppSelector } from "../../../store/storeHooks";
import {
  ActionButtonStyled,
  ProductDetailButtonWrapperStyled,
} from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";

const ProductDetailRefreshProductButton = ({
  onRefresh,
}: {
  onRefresh: Function;
}) => {
  const refreshProductState = useAppSelector((state) => state.refreshProduct);

  return (
    <ProductDetailButtonWrapperStyled>
      <ActionButtonStyled onClick={() => onRefresh()} color={"darkgrey"}>
        <FiSend size={25} style={{ marginBottom: "-5px" }} />
        {refreshProductState.isLoading
          ? "Refresh Product ......."
          : "Refresh Product"}
      </ActionButtonStyled>
    </ProductDetailButtonWrapperStyled>
  );
};

export default ProductDetailRefreshProductButton;
