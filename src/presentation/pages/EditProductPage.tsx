import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ImagePicker from "../components/common/ImagePicker";
import MasterComponent from "../components/common/MasterComponent";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostDesciptionInputStyled,
  AddPostInputStyled,
} from "../styled_components/add_post/AddPostPageComponentsStyled";
import {
  EditPostInputWrapperStyled,
  EditProductPageWrapperStyled,
} from "../styled_components/edit_product/EditProductPageComponentsStyled";
import {
  HotelFilterDropDownInputStyled,
  HotelFilterDropDownOptionStyled,
} from "../styled_components/home/HomeFilterModalStyled";
import { getDataNeededToEditPost } from "../../core/action_creators/common/get_data_needed_to_edit_post_action_creators";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useParams } from "react-router-dom";
import { editProduct } from "../../core/action_creators/product/edit_product_action_creators";

export type EditPostPageInputState = {
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

const initalState: EditPostPageInputState = {
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

const EditProductPage = () => {
  let { id } = useParams<any>();

  const loginState = useAppSelector((state) => state.login);
  const editProductState = useAppSelector((state) => state.editProduct);
  const { isLoading, result } = useAppSelector(
    (state) => state.getDataNeededToEditPost
  );
  const [pickedImages, setPickedImages] = useState<File[]>([]);
  const [formState, setFormState] =
    useState<EditPostPageInputState>(initalState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getDataNeededToEditPost(id, loginState.result.token));
    }
  }, [dispatch, id, loginState.result.token]);

  useEffect(() => {
    if (editProductState.product != null) {
      setFormState({
        city: editProductState.product.city,
        title: editProductState.product.title,
        contactPhone: editProductState.product.contactPhone,
        price: editProductState.product.price,
        subCategory: editProductState.product.subCategory,
        mainCategory: editProductState.product.mainCategory,
        productImages: editProductState.product.productImages,
        description: editProductState.product.description,
        productDetail: editProductState.product.productDetail,
      });
    }
  }, [editProductState.product]);

  const handleUpdatingProduct = () => {
    dispatch(
      editProduct({
        product: formState,
        token: loginState.result.token,
        id: id,
        imagesToUpload: pickedImages,
      })
    );
  };

  useEffect(() => {
    if (result != null) {
      setFormState({
        city: result!.product.city,
        title: result!.product.title,
        contactPhone: result!.product.contactPhone,
        price: result!.product.price,
        subCategory: result!.product.subCategory,
        mainCategory: result!.product.mainCategory,
        productImages: result!.product.productImages,
        description: result!.product.description,
        productDetail: result!.product.productDetail,
      });
    }
  }, [result?.product]);

  const renderDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <HotelFilterDropDownInputStyled
        placeholder={placeHolder}
        value={(formState as any)[objectKey] ?? ""}
        onChange={(e) =>
          setFormState({
            ...formState,
            [objectKey]: e.target.value,
          })
        }
      >
        {items?.map((i) => (
          <HotelFilterDropDownOptionStyled value={i.value}>
            {i.title.split(";")[0]}
          </HotelFilterDropDownOptionStyled>
        ))}
      </HotelFilterDropDownInputStyled>
    );
  };

  const parseMainCategoryToDropdown = () => {
    var categories = result?.categories ?? [];
    return categories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const parseSubCategoryToDropdown = () => {
    var mainCategory = result?.categories.find(
      (c) => c._id === formState!.mainCategory
    );
    return mainCategory?.subCategories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const renderOtherDropDownInput = (
    title: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    let productDetailValue = (formState.productDetail as any)[objectKey];
    return (
      <HotelFilterDropDownInputStyled
        placeholder={title}
        value={productDetailValue ? productDetailValue["value"] : ""}
        onChange={(e) =>
          setFormState({
            ...formState,
            productDetail: {
              ...formState.productDetail,
              [objectKey]: {
                title: title,
                value: e.target.value,
              },
            },
          })
        }
      >
        {items.map((i) => (
          <HotelFilterDropDownOptionStyled value={i.value}>
            {i.title.split(";")[0]}
          </HotelFilterDropDownOptionStyled>
        ))}
      </HotelFilterDropDownInputStyled>
    );
  };

  const parseCityToDropdown = () => {
    var cities = result?.cities ?? [];
    return cities.map((e) => {
      return {
        title: e,
        value: e,
      };
    }) as DropDownItemData[];
  };

  const parseOtherInputDropdown = (values: string[]) => {
    return values.map((e) => {
      return {
        title: e,
        value: e,
      };
    }) as DropDownItemData[];
  };

  const buildOtherRequiredFeildInputs = () => {
    let categorySelected = result?.categories.find(
      (c) => c._id === formState.mainCategory
    );

    return categorySelected?.requiredFields.map((requiredField) => {
      if (requiredField.isDropDown) {
        return renderOtherDropDownInput(
          requiredField.title,
          requiredField.objectKey,
          parseOtherInputDropdown(requiredField.dropDownValues)
        );
      } else {
        let productDetailValue = (formState.productDetail as any)[
          requiredField.objectKey
        ];
        return (
          <AddPostInputStyled
            type="text"
            placeholder={requiredField.objectKey}
            value={productDetailValue ? productDetailValue["value"] : ""}
            onChange={(e) =>
              setFormState({
                ...formState,
                productDetail: {
                  ...formState.productDetail,
                  [requiredField.objectKey]: {
                    title: requiredField.title,
                    value: e.target.value,
                  },
                },
              })
            }
          />
        );
      }
    });
  };
  const handleRenderingSaveButton = () => {
    return editProductState.isLoading ? (
      <LoadingSpinner />
    ) : (
      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled onClick={handleUpdatingProduct}>
          Save Changes
        </AddPostActionButtonStyled>
      </AddPostActionButtonsWrapperStyled>
    );
  };

  return (
    <MasterComponent activePage={EditProductPageRoute}>
      <EditProductPageWrapperStyled>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <EditPostInputWrapperStyled>
            <ImagePicker
              onImagePicked={(urlImages: string[], pickedImages: File[]) => {
                setFormState({ ...formState, productImages: urlImages });
                setPickedImages(pickedImages);
              }}
              initialImages={[...(formState.productImages ?? [])]}
            />
            {renderDropDownInput(
              "Main Category",
              "mainCategory",
              parseMainCategoryToDropdown()
            )}
            {formState.mainCategory !== "" &&
              renderDropDownInput(
                "Sub Category",
                "subCategory",
                parseSubCategoryToDropdown()
              )}
            <AddPostInputStyled
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
              value={formState.title ?? ""}
            />
            <AddPostDesciptionInputStyled
              placeholder="Description"
              cols={6}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  description: e.target.value,
                })
              }
              value={formState.description ?? ""}
            />
            <AddPostInputStyled
              type="number"
              placeholder="Price"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  price: parseFloat(e.target.value),
                })
              }
              value={formState.price ?? ""}
            />
            {renderDropDownInput("City", "city", parseCityToDropdown())}

            <AddPostInputStyled
              type="text"
              placeholder="Contact Person"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  contactPhone: e.target.value,
                })
              }
              value={formState.contactPhone ?? ""}
            />
            {buildOtherRequiredFeildInputs()}

            {handleRenderingSaveButton()}
          </EditPostInputWrapperStyled>
        )}
      </EditProductPageWrapperStyled>
    </MasterComponent>
  );

  type DropDownItemData = {
    value: string;
    title: string;
  };
};

export default EditProductPage;
export const EditProductPageRoute = "/editProduct/:id";
