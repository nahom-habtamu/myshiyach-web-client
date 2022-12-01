import DeletablePostList from "../components/common/DeletablePostList";
import MasterComponent from "../components/common/master_component";
import {
  MyPostsLabelStyled,
  MyPostsPageWrapperStyled,
} from "../styled_components/my_posts/MyPostsPageComponentsStyled";
import { SettingPageRoute } from "./SettingPage";

const MyPostsPage = () => (
  <MasterComponent activePage={SettingPageRoute}>
    <MyPostsPageWrapperStyled>
      <MyPostsLabelStyled>My Posts</MyPostsLabelStyled>
      <DeletablePostList
        avatarContent="NM"
        onDeleteClicked={() => {}}
        products={[]}
      />
    </MyPostsPageWrapperStyled>
  </MasterComponent>
);

export default MyPostsPage;
export const MyPostsPageRoute = "/myPosts";
