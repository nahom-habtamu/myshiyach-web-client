import MainCategory from "../../../core/models/category/main_category";
import {
  HomePageCategoryItemStyled,
  HomePageCategoryListWrapperStyled,
} from "../../styled_components/home/HomePageCategoryStyled";

type FilterCategoriesProps = {
  categories: MainCategory[];
  selectedMainCategory: string | null;
  onCategorySelected: Function;
};

const FilterCategories = (props: FilterCategoriesProps) => {
  return (
    <HomePageCategoryListWrapperStyled>
      {props.categories.map((c) => (
        <HomePageCategoryItemStyled
          key={c._id}
          isActive={c._id === props.selectedMainCategory}
          onClick={() => props.onCategorySelected(c)}
        >
          {c.title.split(";")[0]}
        </HomePageCategoryItemStyled>
      ))}
    </HomePageCategoryListWrapperStyled>
  );
};

export default FilterCategories;
