import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import {
  ProductsByUserLabelStyled,
  ProductsByUserWrapperStyled,
  UserInformationActionsWrapperStyled,
  UserInformationAvatarStyled,
  UserInformationNameStyled,
  UserInformationPhoneNumberStyled,
  UserInformationSendMessageStyled,
  UserInformationWrapperStyled,
} from "../styled_components/products_by_user/ProductsByUserComponentsStyled";
import { getUserAndProducts } from "../../core/action_creators/common/get_user_and_products_action_creators";
import PaginatedProducts from "../components/home_page/PaginatedProducts";
import { goToChat } from "../../core/action_creators/chat/go_to_chat_action_creators";

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

  const renderUserInformation = () => {
    let avatarContent = buildAvatarContent();
    return (
      <UserInformationWrapperStyled>
        <UserInformationAvatarStyled>
          {avatarContent}
        </UserInformationAvatarStyled>
        <UserInformationNameStyled>
          {userAndProductsState.result?.user.fullName ?? ""}
        </UserInformationNameStyled>
        <UserInformationActionsWrapperStyled>
          <UserInformationPhoneNumberStyled>
            {userAndProductsState.result?.user.phoneNumber ?? ""}
          </UserInformationPhoneNumberStyled>
          <UserInformationSendMessageStyled onClick={handleGoingToChat}>
            Send Message
          </UserInformationSendMessageStyled>
        </UserInformationActionsWrapperStyled>
      </UserInformationWrapperStyled>
    );

    function buildAvatarContent() {
      let avatarContent = userAndProductsState.result?.user?.fullName;
      if (avatarContent) {
        console.log(avatarContent);
        if (avatarContent.split(" ").length > 0) {
          avatarContent =
            avatarContent.split(" ")[0][0] + avatarContent.split(" ")[1][0];
        } else {
          avatarContent = avatarContent.split(" ")[0][0];
        }
      }
      return avatarContent ?? "";
    }
  };

  return (
    <MasterComponent activePage={ProductsByUserPageRoute}>
      <ProductsByUserWrapperStyled>
        {userAndProductsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {renderUserInformation()}
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
