import { GrEdit } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import {
  ProductDetailButtonWrapperStyled,
  OutlineActionButtonStyled,
} from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";

const ProductDetailEditButton = ({ productId }: { productId: string }) => {
  const history = useHistory();

  return (
    <ProductDetailButtonWrapperStyled>
      <OutlineActionButtonStyled
        color="green"
        onClick={() => {
          history.push(`/editProduct/${productId}`);
        }}
      >
        <GrEdit size={25} style={{ marginBottom: "-5px" }} />
        Edit Product
      </OutlineActionButtonStyled>
    </ProductDetailButtonWrapperStyled>
  );
};

export default ProductDetailEditButton;
