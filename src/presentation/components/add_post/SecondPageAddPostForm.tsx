import { useAppSelector } from "../../../store/storeHooks";
import { AddPostPageInputState } from "../../pages/AddPostPage";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostInputStyled,
  AddPostInputWrapperStyled,
} from "../../styled_components/add_post/AddPostPageComponentsStyled";
import {
  FilterDropDownInputStyled,
  FilterDropDownOptionStyled,
} from "../../styled_components/home/HomeFilterModalStyled";
import ImagePicker from "../common/ImagePicker";

const SecondPageAddPostForm = ({
  onFormSubmitted,
  onCancel,
  onPictureChanged,
  onFormValueChanged,
  formState,
}: {
  onFormSubmitted: Function;
  onCancel: Function;
  onPictureChanged: Function;
  onFormValueChanged: Function;
  formState: AddPostPageInputState;
}) => {
  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );

  const renderDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <FilterDropDownInputStyled
        placeholder={placeHolder}
        value={(formState as any)[objectKey] ?? ""}
        onChange={(e) =>
          onFormValueChanged({
            ...formState,
            [objectKey]: e.target.value,
          })
        }
      >
        {items.map((i) => (
          <FilterDropDownOptionStyled value={i.value}>
            {i.title.split(";")[0]}
          </FilterDropDownOptionStyled>
        ))}
      </FilterDropDownInputStyled>
    );
  };

  const renderOtherDropDownInput = (
    objectKey: string,
    title: string,
    items: DropDownItemData[]
  ) => {
    return (
      <FilterDropDownInputStyled
        placeholder={title.split(";")[0]}
        onChange={(e) =>
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
      >
        {items.map((i) => (
          <FilterDropDownOptionStyled value={i.value}>
            {i.title.split(";")[0]}
          </FilterDropDownOptionStyled>
        ))}
      </FilterDropDownInputStyled>
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
          <AddPostInputStyled
            type="text"
            placeholder={requiredField.objectKey}
            onChange={(e) =>
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

  return (
    <AddPostInputWrapperStyled>
      <ImagePicker
        onImagePicked={(urlImages: string[], pickedImages: File[]) => {
          onPictureChanged(urlImages, pickedImages);
        }}
        initialImages={[]}
      />
      {renderDropDownInput("City", "city", parseCityToDropdown())}

      <AddPostInputStyled
        type="text"
        placeholder="Contact Person"
        onChange={(e) =>
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
        <AddPostActionButtonStyled onClick={() => onFormSubmitted(formState)}>
          Post
        </AddPostActionButtonStyled>
      </AddPostActionButtonsWrapperStyled>
    </AddPostInputWrapperStyled>
  );

  type DropDownItemData = {
    value: string;
    title: string;
  };
};

export default SecondPageAddPostForm;
