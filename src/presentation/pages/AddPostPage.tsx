import { useEffect, useState } from "react";
import { getDataNeededToAddPost } from "../../core/action_creators/common/get_data_needed_to_add_post_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import FirstPageAddPostForm, {
  FirstInputFormState,
} from "../components/add_post/FirstPageAddPostForm";
import SecondPageAddPostForm, {
  SecondInputFormState,
} from "../components/add_post/SecondPageAddPostForm";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { AddPostWrapperStyled } from "../styled_components/add_post/AddPostPageComponentsStyled";

type AddPostPageInputState = {
  mainCategory: string;
  subCategory: string;
  price: number;
  description: string;
  title: string;
  contactPerson: string;
  productImages: string[];
  city: string;
  productDetail: Object;
};

const initalState: AddPostPageInputState = {
  mainCategory: "",
  subCategory: "",
  price: 0,
  description: "",
  title: "",
  contactPerson: "",
  productImages: [],
  city: "",
  productDetail: {},
};

const AddPostPage = () => {
  const [currentInputPage, setCurrentInputPage] = useState(0);
  const [inputValue, setInputValue] =
    useState<AddPostPageInputState>(initalState);

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataNeededToAddPost());
  }, []);

  return getDataNeededToAddPostState.isLoading ? (
    <LoadingSpinner />
  ) : (
    <AddPostWrapperStyled>
      {currentInputPage === 0 && (
        <FirstPageAddPostForm
          onFormSubmitted={(e: FirstInputFormState) => {
            setInputValue({ ...inputValue, ...e });
            setCurrentInputPage(1);
          }}
        />
      )}
      {currentInputPage === 1 && inputValue.mainCategory != "" && (
        <SecondPageAddPostForm
          mainCategory={inputValue.mainCategory}
          onCancel={() => setCurrentInputPage(0)}
          onFormSubmitted={(e: SecondInputFormState) => {
            setInputValue({ ...inputValue, ...e });
            // TODO ADDING POST HERE
          }}
        />
      )}
    </AddPostWrapperStyled>
  );
};

export default AddPostPage;
export const AddPostPageRoute = "/addPost";
