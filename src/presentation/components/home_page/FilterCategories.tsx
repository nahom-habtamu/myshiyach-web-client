import DropDownCategoryItem from "../common/DropDownCategoryItem";
import MainCategory from "../../../core/models/category/main_category";
import { CategoryItemsWrapperStyled } from "../../styled_components/common/DropDownCategoryItemStyled";
import SubCategory from "../../../core/models/category/sub_category";

type FilterCategoriesProps = {
  categories: MainCategory[];
  selectedMainCategory: string | null;
  selectedSubCategory: string | null;
  onCategorySelected: Function;
};

const FilterCategories = (props: FilterCategoriesProps) => {
  return (
    <CategoryItemsWrapperStyled>
      {
        props.categories.map(e =>
          <DropDownCategoryItem
            onClicked={(mainCat: MainCategory, subCat: SubCategory) => props.onCategorySelected(mainCat, subCat)}
            mainCategory={e}
            subCategory={props.selectedSubCategory}
            isActive={e._id === props.selectedMainCategory}
          />
        )
      }
    </CategoryItemsWrapperStyled>
  );
};

export default FilterCategories;
