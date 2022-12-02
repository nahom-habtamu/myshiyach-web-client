import { deleteSavedPostsItem } from "../../core/action_creators/product/saved_products_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import DeletablePostList from "../components/common/DeletablePostList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import {
  SavedPostsLabelStyled,
  SavedPostsPageWrapperStyled,
} from "../styled_components/saved_posts/SavedPostsPageComponentsStyled";

const SavedPostsPage = () => {
  const savedPostsState = useAppSelector((state) => state.savedPostsReducer);

  const dispatch = useAppDispatch();

  const handleProductDelete = (id: string) => {
    dispatch(deleteSavedPostsItem(id));
  };

  return (
    <MasterComponent activePage={SavedPostsPageRoute}>
      <SavedPostsPageWrapperStyled>
        <SavedPostsLabelStyled>Saved Posts</SavedPostsLabelStyled>
        {savedPostsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          <DeletablePostList
            onDeleteClicked={(id: string) => handleProductDelete(id)}
            products={savedPostsState.products ?? []}
          />
        )}
      </SavedPostsPageWrapperStyled>
    </MasterComponent>
  );
};

export default SavedPostsPage;
export const SavedPostsPageRoute = "/savedPosts";
