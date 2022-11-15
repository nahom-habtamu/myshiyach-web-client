import { useEffect, useState } from "react";
import { getDataNeededToAddPost } from "../../core/action_creators/common/get_data_needed_to_add_post_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { AddPostWrapperStyled } from "../styled_components/add_post/AddPostPageComponentsStyled";
import {
  HotelFilterDropDownInputStyled,
  HotelFilterDropDownOptionStyled,
} from "../styled_components/home/HomeFilterModalStyled";

type AddPostPageInputState = {
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
  const [inputValue, setInputValue] =
    useState<AddPostPageInputState>(initalState);

  const getDataNeededToAddPostState = useAppSelector(
    (state) => state.getDataNeededToAddPost
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("CALLING THIS GUY");

    dispatch(getDataNeededToAddPost());
  });

  const renderDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <HotelFilterDropDownInputStyled
        placeholder={placeHolder}
        value={(inputValue as any)[objectKey] ?? ""}
        onChange={(e) =>
          setInputValue({
            ...inputValue,
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
      (c) => c._id === inputValue!.mainCategory
    );
    return mainCategory?.subCategories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  return <AddPostWrapperStyled></AddPostWrapperStyled>;

  type DropDownItemData = {
    value: string;
    title: string;
  };
};

export default AddPostPage;
export const AddPostPageRoute = "/addPost";
