import MasterComponent from "../components/common/master_component";

const AddPostPage = () => {
  return (
    <MasterComponent activePage={AddPostPageRoute}>
      I AM ADD POST PAGE
    </MasterComponent>
  );
};

export default AddPostPage;
export const AddPostPageRoute = "/addPost";
