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
            onClicked={(mainCat: MainCategory | null, subCat: SubCategory | null) => 
              props.onCategorySelected(mainCat, subCat)}
            mainCategory={e}
            activeSubCategory={props.selectedSubCategory}
            activeMainCategory={props.selectedMainCategory}
            isActive={e._id === props.selectedMainCategory}
          />
        )
      }
    </CategoryItemsWrapperStyled>
  );
};

export default FilterCategories;
