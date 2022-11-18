import { useAppSelector } from "../../../store/storeHooks";
import { AddPostPageInputState } from "../../pages/AddPostPage";
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

const FirstPageAddPostForm = ({
  onFormSubmitted,
  onFormValueChanged,
  formState,
}: {
  onFormSubmitted: Function;
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
      <HotelFilterDropDownInputStyled
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
      (c) => c._id === formState!.mainCategory
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
      {formState.mainCategory &&
        renderDropDownInput(
          "Sub Category",
          "subCategory",
          parseSubCategoryToDropdown()
        )}
      <AddPostInputStyled
        type="text"
        placeholder="Title"
        onChange={(e) =>
          onFormValueChanged({
            ...formState,
            title: e.target.value,
          })
        }
      />
      <AddPostDesciptionInputStyled
        placeholder="Description"
        cols={6}
        onChange={(e) =>
          onFormValueChanged({
            ...formState,
            description: e.target.value,
          })
        }
      />
      <AddPostInputStyled
        type="number"
        placeholder="Price"
        onChange={(e) =>
          onFormValueChanged({
            ...formState,
            price: parseFloat(e.target.value),
          })
        }
      />
      <AddPostActionButtonsWrapperStyled>
        <AddPostActionButtonStyled onClick={() => onFormSubmitted(formState)}>
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
