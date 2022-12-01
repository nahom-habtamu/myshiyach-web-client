import { useEffect } from "react";
import { getMyPosts } from "../../core/action_creators/product/get_my_posts_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import DeletablePostList from "../components/common/DeletablePostList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
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
    dispatch(
      getMyPosts(loginState.result.currentUser!._id, loginState.result.token)
    );
  }, [dispatch, loginState.result.currentUser!._id]);

  return (
    <MasterComponent activePage={SettingPageRoute}>
      <MyPostsPageWrapperStyled>
        <MyPostsLabelStyled>My Posts</MyPostsLabelStyled>
        {myPostsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <DeletablePostList
            onDeleteClicked={() => {}}
            products={myPostsState.products ?? []}
          />
        )}
      </MyPostsPageWrapperStyled>
    </MasterComponent>
  );
};

export default MyPostsPage;
export const MyPostsPageRoute = "/myPosts";
