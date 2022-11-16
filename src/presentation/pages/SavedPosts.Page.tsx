import MasterComponent from "../components/common/master_component";

const SavedPostsPage = () => {
  return (
    <MasterComponent activePage={SavedPostsPageRoute}>
      <>I AM SAVED POSTS</>
    </MasterComponent>
  );
};

export default SavedPostsPage;
export const SavedPostsPageRoute = "/savedPosts";
