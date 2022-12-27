import DropDownCategoryItem from "../common/DropDownCategoryItem";
import MainCategory from "../../../core/models/category/main_category";
import { CategoryItemsWrapperStyled } from "../../styled_components/common/DropDownCategoryItemStyled";
import SubCategory from "../../../core/models/category/sub_category";
import RequiredFeild from "../../../core/models/category/required_feild";

type FilterCategoriesProps = {
  categories: MainCategory[];
  selectedMainCategory: string | null;
  selectedSubCategory: string | null;
  onCategorySelected: Function;
};

const FilterCategories = (props: FilterCategoriesProps) => {

  let categories = [
    {
      _id: 'all',
      title: 'All;ሁሉም',
      subCategories: [] as SubCategory[],
      requiredFields: [] as RequiredFeild[],
    },
    ...props.categories
  ];

  return (
    <CategoryItemsWrapperStyled>
      {
        categories.map(e =>
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
