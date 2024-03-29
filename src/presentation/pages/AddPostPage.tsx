import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDataNeededToAddPost } from "../../core/action_creators/common/get_data_needed_to_add_post_action_creators";
import {
  createProduct,
} from "../../core/action_creators/product/create_product_action_creators";
import CreateProductRequest from "../../core/models/product/create_product_request";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import FirstPageAddPostForm from "../components/add_post/FirstPageAddPostForm";
import SecondPageAddPostForm from "../components/add_post/SecondPageAddPostForm";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { AddPostWrapperStyled } from "../styled_components/add_post/AddPostPageComponentsStyled";
import MasterComponent from "../components/common/MasterComponent";
import { PostConfirmationPageRoute } from "./PostConfirmationPage";
import useScrollToTop from "../custom_hooks/useScrollToTop";

export type AddPostPageInputState = {
  mainCategory: string;
  subCategory: string;
  price: number;
  description: string;
  title: string;
  contactPhone: string;
  contactName: string;
  productImages: string[];
  city: string;
  productDetail: Object;
};

const buildInitialState = (phoneNumber: string, name: string): AddPostPageInputState => {
  return {
    mainCategory: "",
    subCategory: "",
    price: 0,
    description: "",
    title: "",
    contactPhone: phoneNumber,
    contactName: name,
    productImages: [],
    city: "",
    productDetail: {},
  };
}

const AddPostPage = () => {
  useScrollToTop();
  const [currentInputPage, setCurrentInputPage] = useState(0);
  const [pickedImages, setPickedImages] = useState<File[]>([]);
  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );
  const authState = useAppSelector((state) => state.login);
  const [inputValue, setInputValue] =
    useState<AddPostPageInputState>(() =>
      buildInitialState(
        authState.result.currentUser?.phoneNumber ?? "",
        authState.result.currentUser?.fullName ?? ""
      ));
  const createProductState = useAppSelector((state) => state.createProduct);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDataNeededToAddPost());
  }, [dispatch]);

  useEffect(() => {
    if (createProductState.product != null) {
      history.push(PostConfirmationPageRoute);
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
            pickedImages={pickedImages}
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
  return (
    <MasterComponent activePage={AddPostPageRoute}>
      {getDataNeededToAddPostState.isLoading ? (
        <LoadingSpinner />
      ) : createProductState.isLoading ? (
        <LoadingSpinner />
      ) : (
        renderAddFormInputs()
      )}
    </MasterComponent>
  );
};

export default AddPostPage;
export const AddPostPageRoute = "/addPost";
