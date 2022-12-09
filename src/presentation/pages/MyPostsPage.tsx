import { useEffect } from "react";
import { deleteProduct } from "../../core/action_creators/product/delete_product_action_creators";
import {
  deleteMyPostsItem,
  getMyPosts,
} from "../../core/action_creators/product/get_my_posts_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import DeletablePostList from "../components/common/DeletablePostList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/MasterComponent";
import {
  MyPostsLabelStyled,
  MyPostsPageWrapperStyled,
} from "../styled_components/my_posts/MyPostsPageComponentsStyled";
import { SettingPageRoute } from "./SettingPage";

const MyPostsPage = () => {
  const loginState = useAppSelector((state) => state.login);
  const myPostsState = useAppSelector((state) => state.getMyPosts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loginState.result.currentUser != null) {
      dispatch(
        getMyPosts(loginState.result.currentUser._id, loginState.result.token)
      );
    }
  }, [dispatch, loginState.result]);

  const handleProductDelete = (id: string) => {
    dispatch(deleteProduct(id, loginState.result.token));
    dispatch(deleteMyPostsItem(id));
  };

  return (
    <MasterComponent activePage={SettingPageRoute}>
      <MyPostsPageWrapperStyled>
        <MyPostsLabelStyled>My Posts</MyPostsLabelStyled>
        {myPostsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <DeletablePostList
            onDeleteClicked={(id: string) => handleProductDelete(id)}
            products={myPostsState.products ?? []}
          />
        )}
      </MyPostsPageWrapperStyled>
    </MasterComponent>
  );
};

export default MyPostsPage;
export const MyPostsPageRoute = "/myPosts";
