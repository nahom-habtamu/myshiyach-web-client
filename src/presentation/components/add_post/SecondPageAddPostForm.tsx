import { useState } from "react";
import { useAppSelector } from "../../../store/storeHooks";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostInputStyled,
  AddPostInputWrapperStyled,
} from "../../styled_components/add_post/AddPostPageComponentsStyled";
import {
  HotelFilterDropDownInputStyled,
  HotelFilterDropDownOptionStyled,
} from "../../styled_components/home/HomeFilterModalStyled";
import ImagePicker from "../common/ImagePicker";

export type SecondInputFormState = {
  city: string;
  productImages: string[];
  contactPerson: string;
  productDetail: Object;
};

const initalState: SecondInputFormState = {
  city: "",
  productImages: [],
  contactPerson: "",
  productDetail: {},
};

const SecondPageAddPostForm = ({
  onFormSubmitted,
  onCancel,
  mainCategory,
}: {
  onFormSubmitted: Function;
  onCancel: Function;
  mainCategory: string;
}) => {
  const [secondInputValue, setSecondInputValue] =
    useState<SecondInputFormState>(initalState);

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );

  const renderDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <HotelFilterDropDownInputStyled
        placeholder={placeHolder}
        value={(secondInputValue as any)[objectKey] ?? ""}
        onChange={(e) =>
          setSecondInputValue({
            ...secondInputValue,
            [objectKey]: e.target.value,
          })
        }
      >
        {items.map((i) => (
          <HotelFilterDropDownOptionStyled value={i.value}>
            {i.title}
          </HotelFilterDropDownOptionStyled>
        ))}
      </HotelFilterDropDownInputStyled>
    );
  };

  const renderOtherDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <HotelFilterDropDownInputStyled
        placeholder={placeHolder}
        value={(secondInputValue.productDetail as any)[objectKey] ?? ""}
        onChange={(e) =>
          setSecondInputValue({
            ...secondInputValue,
            productDetail: {
              ...secondInputValue.productDetail,
              [objectKey]: e.target.value,
            },
          })
        }
      >
        {items.map((i) => (
          <HotelFilterDropDownOptionStyled value={i.value}>
            {i.title}
          </HotelFilterDropDownOptionStyled>
        ))}
      </HotelFilterDropDownInputStyled>
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
      (c) => c._id === mainCategory
    );

    return categorySelected!.requiredFields.map((requiredField) => {
      if (requiredField.isDropDown) {
        return renderOtherDropDownInput(
          requiredField.objectKey,
          requiredField.objectKey,
          parseOtherInputDropdown(requiredField.dropDownValues)
        );
      } else {
        return (
          <AddPostInputStyled
            type="text"
            placeholder={requiredField.objectKey}
            onChange={(e) =>
              setSecondInputValue({
                ...secondInputValue,
                productDetail: {
                  ...secondInputValue.productDetail,
                  [requiredField.objectKey]: e.target.value,
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
          console.log(pickedImages.map((e) => e.name));
          console.log(urlImages);
        }}
        initialImages={[]}
      />
      {renderDropDownInput("City", "city", parseCityToDropdown())}

      <AddPostInputStyled
        type="text"
        placeholder="Contact Person"
        onChange={(e) =>
          setSecondInputValue({
            ...secondInputValue,
            contactPerson: e.target.value,
          })
        }
      />
      {buildOtherRequiredFeildInputs()}

      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled isOutlined onClick={() => onCancel()}>
          Cancel
        </AddPostActionButtonStyled>
        <AddPostActionButtonStyled
          onClick={() => onFormSubmitted(secondInputValue)}
        >
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
