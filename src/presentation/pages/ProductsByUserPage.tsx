import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import {
  ProductsByUserLabelStyled,
  ProductsByUserWrapperStyled,
} from "../styled_components/products_by_user/ProductsByUserComponentsStyled";
import { getUserAndProducts } from "../../core/action_creators/common/get_user_and_products_action_creators";
import PaginatedProducts from "../components/home_page/PaginatedProducts";
import { goToChat } from "../../core/action_creators/chat/go_to_chat_action_creators";
import UserInformation from "../components/common/UserInformation";

const ProductsByUserPage = () => {
  let { id } = useParams<any>();

  const loginState = useAppSelector((state) => state.login);
  const userAndProductsState = useAppSelector(
    (state) => state.getUserAndProducts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAndProducts(id, loginState.result.token));
  }, [dispatch]);

  const handleGoingToChat = () => {
    dispatch(
      goToChat({
        memberOne: id,
        memberTwo: loginState.result.currentUser!._id,
      })
    );
  };

  return (
    <MasterComponent activePage={ProductsByUserPageRoute}>
      <ProductsByUserWrapperStyled>
        {userAndProductsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <UserInformation
              fullName={userAndProductsState.result?.user.fullName}
              phoneNumber={userAndProductsState.result?.user.phoneNumber}
              onGoToChatClicked={() => handleGoingToChat()}
            />
            <ProductsByUserLabelStyled>
              Products By User
            </ProductsByUserLabelStyled>
            <PaginatedProducts
              products={userAndProductsState.result?.products ?? []}
            />
          </>
        )}
      </ProductsByUserWrapperStyled>
    </MasterComponent>
  );
};

export default ProductsByUserPage;
export const ProductsByUserPageRoute = "/productsByUser/:id";
