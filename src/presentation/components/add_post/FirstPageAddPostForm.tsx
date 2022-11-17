import { useState } from "react";
import { useAppSelector } from "../../../store/storeHooks";
import {
  AddPostActionButtonStyled,
  AddPostActionButtonsWrapperStyled,
  AddPostDesciptionInputStyled,
  AddPostInputStyled,
  AddPostInputWrapperStyled,
} from "../../styled_components/add_post/AddPostPageComponentsStyled";
import {
  HotelFilterDropDownInputStyled,
  HotelFilterDropDownOptionStyled,
} from "../../styled_components/home/HomeFilterModalStyled";

export type FirstInputFormState = {
  mainCategory: string;
  subCategory: string;
  price: number;
  description: string;
  title: string;
};

const initalState: FirstInputFormState = {
  mainCategory: "",
  subCategory: "",
  price: 0,
  description: "",
  title: "",
};

const FirstPageAddPostForm = ({
  onFormSubmitted,
}: {
  onFormSubmitted: Function;
}) => {
  const [firstInputValue, setFirstInputValue] =
    useState<FirstInputFormState>(initalState);

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
        value={(firstInputValue as any)[objectKey] ?? ""}
        onChange={(e) =>
          setFirstInputValue({
            ...firstInputValue,
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
      (c) => c._id === firstInputValue!.mainCategory
    );
    return mainCategory?.subCategories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };
  return (
    <AddPostInputWrapperStyled style={{ paddingTop: "35px" }}>
      {renderDropDownInput(
        "Main Category",
        "mainCategory",
        parseMainCategoryToDropdown()
      )}
      {firstInputValue.mainCategory &&
        renderDropDownInput(
          "Sub Category",
          "subCategory",
          parseSubCategoryToDropdown()
        )}
      <AddPostInputStyled
        type="text"
        placeholder="Title"
        onChange={(e) =>
          setFirstInputValue({
            ...firstInputValue,
            title: e.target.value,
          })
        }
      />
      <AddPostDesciptionInputStyled
        placeholder="Description"
        cols={6}
        onChange={(e) =>
          setFirstInputValue({
            ...firstInputValue,
            description: e.target.value,
          })
        }
      />
      <AddPostInputStyled
        type="number"
        placeholder="Price"
        onChange={(e) =>
          setFirstInputValue({
            ...firstInputValue,
            price: parseFloat(e.target.value),
          })
        }
      />
      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled
          onClick={() => onFormSubmitted(firstInputValue)}
        >
          Next
        </AddPostActionButtonStyled>
      </AddPostActionButtonsWrapperStyled>
    </AddPostInputWrapperStyled>
  );

  type DropDownItemData = {
    value: string;
    title: string;
  };
};

export default FirstPageAddPostForm;
