import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ImagePicker from "../components/common/ImagePicker";
import MasterComponent from "../components/common/MasterComponent";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
} from "../styled_components/add_post/AddPostPageComponentsStyled";
import {
  EditPostInputWrapperStyled,
  EditProductPageWrapperStyled,
} from "../styled_components/edit_product/EditProductPageComponentsStyled";
import { getDataNeededToEditPost } from "../../core/action_creators/common/get_data_needed_to_edit_post_action_creators";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useParams } from "react-router-dom";
import ProductDropDownInput, { DropDownItemData } from "../components/common/ProductDropDownInput";
import ProductInput from "../components/common/ProductInput";
import { editProduct } from "../../core/action_creators/product/edit_product_action_creators";
import { toggleValidationErrorModalOpen } from "../../core/action_creators/common/validation_error_modal_action_creators";
import useScrollToTop from "../custom_hooks/useScrollToTop";

export type EditPostPageInputState = {
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

const initalState: EditPostPageInputState = {
  mainCategory: "",
  subCategory: "",
  price: 0,
  description: "",
  title: "",
  contactPhone: "",
  contactName: "",
  productImages: [],
  city: "",
  productDetail: {},
};

const EditProductPage = () => {
  let { id } = useParams<any>();

  useScrollToTop();

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
        contactName: editProductState.product.contactName ?? "",
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
    if ((
      formState.price && formState.description && formState.title && formState.mainCategory &&
      formState.subCategory && (formState.productImages.length + pickedImages.length >= 3)) &&
      formState.city && formState.contactPhone && formState.productDetail
    ) {
      let categorySelected = result?.categories.find(
        (c) => c._id === formState.mainCategory
      );
      let validInputsCount = 0;
      for (let i = 0; i < categorySelected!.requiredFields.length; i++) {
        const requiredField = categorySelected!.requiredFields[i];
        if ((formState.productDetail as any)[requiredField!.objectKey]["value"] !== null) {
          validInputsCount++;
        }
      }
      if (validInputsCount === categorySelected!.requiredFields.length) {
        dispatch(
          editProduct({
            product: formState,
            token: loginState.result.token,
            id: id,
            imagesToUpload: pickedImages,
          })
        );
      }
      else {
        dispatch(toggleValidationErrorModalOpen('Something is Missing from Other Required Feilds'));
      }
    }
    else {
      let content = "";
      if (!formState.mainCategory || !formState.subCategory) {
        content = "Please Enter Categories";
      }
      else if (!formState.title) {
        content = "Please Enter Title";
      }
      else if (!formState.description) {
        content = "Please Enter Description";
      }
      else if (!formState.price) {
        content = "Please Enter Price";
      }
      if (formState.productImages.length === 0 && pickedImages.length === 0) {
        content = "Please Pick Product Images";
      }
      else if ((formState.productImages.length + pickedImages.length) < 3) {
        content = "Please Select a Minimum of 3 Product Images";
      }
      else if (!formState.city) {
        content = "Please Enter City";
      }
      else if (!formState.description) {
        content = "Please Enter Contact Phone";
      }
      dispatch(toggleValidationErrorModalOpen(content));
    }
  };

  useEffect(() => {
    if (result != null) {
      setFormState({
        city: result!.product.city,
        title: result!.product.title,
        contactPhone: result!.product.contactPhone,
        contactName: result!.product.contactName ?? "",
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
    label: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <ProductDropDownInput
        value={(formState as any)[objectKey] ?? ""}
        onChange={(e: any) =>
          setFormState({
            ...formState,
            [objectKey]: e.target.value,
          })
        }
        dropDownItems={items}
        label={label}
      />
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
    objectKey: string,
    title: string,
    items: DropDownItemData[]
  ) => {
    let value = (formState as any)["productDetail"][objectKey] ?
      (formState as any)["productDetail"][objectKey]["value"] :
      "";
    return (
      <ProductDropDownInput
        label={title.split(";")[0]}
        onChange={(e: any) =>
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
        dropDownItems={items}
        value={value} />
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
          requiredField.objectKey,
          requiredField.title,
          parseOtherInputDropdown(requiredField.dropDownValues)
        );
      } else {
        let productDetailValue = (formState.productDetail as any)[
          requiredField.objectKey
        ];
        return (
          <ProductInput
            type="text"
            placeHolder={requiredField.objectKey}
            value={productDetailValue["value"].split(";")[0]}
            onChanged={(e: any) =>
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

            <ProductInput
              type="text"
              placeHolder="Title"
              onChanged={(e: any) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
              value={formState.title ?? ""}
            />

            <ProductInput
              isBigInput
              type="text"
              placeHolder="Description"
              onChanged={(e: any) =>
                setFormState({
                  ...formState,
                  description: e.target.value,
                })
              }
              value={formState.description ?? ""}
            />


            <ProductInput
              type="number"
              placeHolder="Price"
              onChanged={(e: any) =>
                setFormState({
                  ...formState,
                  price: parseFloat(e.target.value),
                })
              }
              value={formState.price ?? ""}
            />

            {renderDropDownInput("City", "city", parseCityToDropdown())}

            <ProductInput
              type="text"
              placeHolder="Contact Person"
              onChanged={(e: any) =>
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
};

export default EditProductPage;
export const EditProductPageRoute = "/editProduct/:id";
