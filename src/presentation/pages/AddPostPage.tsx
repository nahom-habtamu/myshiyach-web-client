import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDataNeededToAddPost } from "../../core/action_creators/common/get_data_needed_to_add_post_action_creators";
import {
  clearCreateProduct,
  createProduct,
} from "../../core/action_creators/product/create_product_action_creators";
import CreateProductRequest from "../../core/models/product/create_product_request";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import FirstPageAddPostForm from "../components/add_post/FirstPageAddPostForm";
import SecondPageAddPostForm from "../components/add_post/SecondPageAddPostForm";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { AddPostWrapperStyled } from "../styled_components/add_post/AddPostPageComponentsStyled";

export type AddPostPageInputState = {
  mainCategory: string;
  subCategory: string;
  price: number;
  description: string;
  title: string;
  contactPhone: string;
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
  contactPhone: "",
  productImages: [],
  city: "",
  productDetail: {},
};

const AddPostPage = () => {
  const [currentInputPage, setCurrentInputPage] = useState(0);
  const [pickedImages, setPickedImages] = useState<File[]>([]);
  const [inputValue, setInputValue] =
    useState<AddPostPageInputState>(initalState);

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );
  const authState = useAppSelector((state) => state.login);
  const createProductState = useAppSelector((state) => state.createProduct);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDataNeededToAddPost());
    dispatch(clearCreateProduct());
  }, [dispatch]);

  useEffect(() => {
    if (createProductState.product != null) {
      history.push("/postConfirm");
    }
  }, [createProductState, history, dispatch]);

  const handleCreatingProduct = () => {
    const productToSend: CreateProductRequest = {
      ...inputValue,
      createdBy: authState.result.currentUser!._id,
    };
    dispatch(
      createProduct(productToSend, authState.result.token, pickedImages)
    );
  };

  function renderAddFormInputs() {
    return (
      <AddPostWrapperStyled>
        {currentInputPage === 0 && (
          <FirstPageAddPostForm
            onFormSubmitted={() => setCurrentInputPage(1)}
            formState={inputValue}
            onFormValueChanged={(updatedInputValues: AddPostPageInputState) =>
              setInputValue(updatedInputValues)
            }
          />
        )}
        {currentInputPage === 1 && inputValue.mainCategory !== "" && (
          <SecondPageAddPostForm
            onPictureChanged={(urlImages: string[], pickedImages: File[]) => {
              setInputValue({ ...inputValue, productImages: urlImages });
              setPickedImages(pickedImages);
            }}
            onCancel={() => setCurrentInputPage(0)}
            onFormSubmitted={() => handleCreatingProduct()}
            formState={inputValue}
            onFormValueChanged={(updatedInputValues: AddPostPageInputState) =>
              setInputValue(updatedInputValues)
            }
          />
        )}
      </AddPostWrapperStyled>
    );
  }
  return getDataNeededToAddPostState.isLoading ? (
    <LoadingSpinner />
  ) : createProductState.isLoading ? (
    <LoadingSpinner />
  ) : (
    renderAddFormInputs()
  );
};

export default AddPostPage;
export const AddPostPageRoute = "/addPost";
