import MainCategory from "../../../core/models/category/main_category";
import {
  HomePageCategoryItemStyled,
  HomePageCategoryListWrapperStyled,
} from "../../styled_components/home/HomePageCategoryStyled";

type FilterCategoriesProps = {
  categories: MainCategory[];
  selectedMainCategory: string | null;
};

const FilterCategories = (props: FilterCategoriesProps) => {
  return (
    <HomePageCategoryListWrapperStyled>
      {props.categories.map((c) => (
        <HomePageCategoryItemStyled
          isActive={c._id === props.selectedMainCategory}
        >
          {c.title}
        </HomePageCategoryItemStyled>
      ))}
    </HomePageCategoryListWrapperStyled>
  );
};

export default FilterCategories;
