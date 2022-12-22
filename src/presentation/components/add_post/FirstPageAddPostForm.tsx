import { toggleValidationErrorModalOpen } from "../../../core/action_creators/common/validation_error_modal_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { AddPostPageInputState } from "../../pages/AddPostPage";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostInputWrapperStyled,
} from "../../styled_components/add_post/AddPostPageComponentsStyled";
import ProductDropDownInput, { DropDownItemData } from "../common/ProductDropDownInput";
import ProductInput from "../common/ProductInput";

const FirstPageAddPostForm = ({
  onFormSubmitted,
  onFormValueChanged,
  formState,
}: {
  onFormSubmitted: Function;
  onFormValueChanged: Function;
  formState: AddPostPageInputState;
}) => {

  const dispatch = useAppDispatch();

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );

  const renderDropDownInput = (
    label: string,
    objectKey: string,
    items: DropDownItemData[],
  ) => {
    return (
      <ProductDropDownInput
        value={(formState as any)[objectKey] ?? ""}
        onChange={(e: any) =>
          onFormValueChanged({
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
    var categories = getDataNeededToAddPostState.result?.categories ?? [];
    return categories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const parseSubCategoryToDropdown = () => {
    var mainCategory = getDataNeededToAddPostState.result?.categories.find(
      (c) => c._id === formState!.mainCategory
    );
    return mainCategory?.subCategories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const handleNextPressed = () => {
    if (formState.mainCategory && formState.subCategory && formState.title && formState.description && formState.price) {
      onFormSubmitted(formState);
    }
    else {
      let content = "";
      if(!formState.mainCategory || !formState.subCategory){
        content = "Please Enter Categories";
      }
      else if(!formState.title){
        content = "Please Enter Title";
      }
      else if(!formState.description){
        content = "Please Enter Description";
      }
      else if(!formState.price){
        content = "Please Enter Price";
      }
      dispatch(toggleValidationErrorModalOpen(content));
    }
  }

  return (
    <AddPostInputWrapperStyled style={{ paddingTop: "35px" }}>
      {renderDropDownInput(
        "Main Category",
        "mainCategory",
        parseMainCategoryToDropdown()
      )}
      {formState.mainCategory &&
        renderDropDownInput(
          "Sub Category",
          "subCategory",
          parseSubCategoryToDropdown()
        )}

      <ProductInput
        placeHolder="Title"
        onChanged={(e: any) =>
          onFormValueChanged({
            ...formState,
            title: e.target.value,
          })
        }
      />

      <ProductInput
        placeHolder="Description"
        isBigInput
        onChanged={(e: any) =>
          onFormValueChanged({
            ...formState,
            description: e.target.value,
          })
        }
      />

      <ProductInput
        placeHolder="Price"
        type="number"
        onChanged={(e: any) =>
          onFormValueChanged({
            ...formState,
            price: parseFloat(e.target.value),
          })
        }
      />

      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled onClick={handleNextPressed}>
          Next
        </AddPostActionButtonStyled>
      </AddPostActionButtonsWrapperStyled>
    </AddPostInputWrapperStyled>
  );
};

export default FirstPageAddPostForm;
