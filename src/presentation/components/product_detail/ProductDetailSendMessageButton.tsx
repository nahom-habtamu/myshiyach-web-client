import { FiSend } from "react-icons/fi";
import { useAppSelector } from "../../../store/storeHooks";
import {
  ActionButtonStyled,
  ProductDetailButtonWrapperStyled,
} from "../../styled_components/product_detail/ProductDetailOtherComponentsStyled";

const ProductDetailSendMessageButton = ({
  onGoToChat,
}: {
  onGoToChat: Function;
}) => {
  const goToChatState = useAppSelector((state) => state.goToChat);

  return (
    <ProductDetailButtonWrapperStyled>
      <ActionButtonStyled onClick={() => onGoToChat()}>
        <FiSend size={25} style={{ marginBottom: "-5px" }} />
        {goToChatState.isLoading ? "Send Message ......." : "Send Message"}
      </ActionButtonStyled>
    </ProductDetailButtonWrapperStyled>
  );
};

export default ProductDetailSendMessageButton;
