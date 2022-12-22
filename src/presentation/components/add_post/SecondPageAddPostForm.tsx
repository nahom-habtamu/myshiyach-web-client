import { toggleValidationErrorModalOpen } from "../../../core/action_creators/common/validation_error_modal_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { AddPostPageInputState } from "../../pages/AddPostPage";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostInputWrapperStyled,
} from "../../styled_components/add_post/AddPostPageComponentsStyled";
import ImagePicker from "../common/ImagePicker";
import ProductDropDownInput, { DropDownItemData } from "../common/ProductDropDownInput";
import ProductInput from "../common/ProductInput";

const SecondPageAddPostForm = ({
  onFormSubmitted,
  onCancel,
  onPictureChanged,
  onFormValueChanged,
  formState,
  pickedImages
}: {
  onFormSubmitted: Function;
  onCancel: Function;
  onPictureChanged: Function;
  onFormValueChanged: Function;
  pickedImages: File[];
  formState: AddPostPageInputState;
}) => {

  const loginState = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );

  const renderDropDownInput = (
    label: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <ProductDropDownInput
        dropDownItems={items}
        label={label}
        value={(formState as any)[objectKey] ?? ""}
        onChange={(e: any) =>
          onFormValueChanged({
            ...formState,
            [objectKey]: e.target.value,
          })
        }
      />
    );
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
          onFormValueChanged({
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
    var cities = getDataNeededToAddPostState.result?.cities ?? [];
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
    let categorySelected = getDataNeededToAddPostState.result?.categories.find(
      (c) => c._id === formState.mainCategory
    );

    return categorySelected!.requiredFields.map((requiredField) => {
      if (requiredField.isDropDown) {
        return renderOtherDropDownInput(
          requiredField.objectKey,
          requiredField.title,
          parseOtherInputDropdown(requiredField.dropDownValues)
        );
      } else {
        return (
          <ProductInput
            placeHolder={requiredField.objectKey}
            onChanged={(e: any) =>
              onFormValueChanged({
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

  const handlePostPressed = () => {
    if ((formState.productImages.length > 0 || pickedImages.length > 0) &&
      formState.city && formState.contactPhone && formState.productDetail
    ) {
      let categorySelected = getDataNeededToAddPostState.result?.categories.find(
        (c) => c._id === formState.mainCategory
      );
      let validInputsCount = 0;
      for (let i = 0; i < categorySelected!.requiredFields.length; i++) {
        const requiredField = categorySelected!.requiredFields[i];
        if ((formState.productDetail as any)[requiredField!.objectKey]) {
          validInputsCount++;
        }
      }

      if (validInputsCount === categorySelected!.requiredFields.length) {
        onFormSubmitted(formState);
      } else {

        dispatch(toggleValidationErrorModalOpen('Something is Missing from Other Required Feilds'));
      }
    }
    else {
      let content = "";
      if (formState.productImages.length === 0 && pickedImages.length === 0) {
        content = "Please Pick Product Images";
      }
      else if (!formState.city) {
        content = "Please Enter City";
      }
      else if (!formState.description) {
        content = "Please Enter Contact Phone";
      }
      dispatch(toggleValidationErrorModalOpen(content));
    }
  }

  return (
    <AddPostInputWrapperStyled>
      <ImagePicker
        onImagePicked={(urlImages: string[], pickedImages: File[]) => {
          onPictureChanged(urlImages, pickedImages);
        }}
        initialImages={[]}
      />
      {renderDropDownInput("City", "city", parseCityToDropdown())}

      <ProductInput
        value={formState.contactPhone != null && formState.contactPhone.length === 0 ? loginState.result.currentUser?.phoneNumber : formState.contactPhone}
        placeHolder="Contact Person"
        onChanged={(e: any) =>
          onFormValueChanged({
            ...formState,
            contactPhone: e.target.value,
          })
        }
      />

      {buildOtherRequiredFeildInputs()}

      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled isOutlined onClick={() => onCancel()}>
          Cancel
        </AddPostActionButtonStyled>
        <AddPostActionButtonStyled onClick={handlePostPressed}>
          Post
        </AddPostActionButtonStyled>
      </AddPostActionButtonsWrapperStyled>
    </AddPostInputWrapperStyled>
  );
};

export default SecondPageAddPostForm;
