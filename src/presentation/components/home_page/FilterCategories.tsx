import {
    FilterCategoryItemTitleAndContentWrapperStyled,
    FilterCategoryItemTitleStyled,
    FilterCategoryWrapperStyled
} from "../../styled_components/common/NewFilterComponentsStyled";

export type CatItem = {
    title: string,
    value: string
};

const FilterCategories = (
    { onCategorySelected, categories, selectedCategory, isSubCat }:
        {
            onCategorySelected: Function, categories: CatItem[], selectedCategory: string | null, isSubCat: boolean
        }) => {

    return (
        <FilterCategoryWrapperStyled isSubCat={isSubCat}>
            {
                categories.map(e =>
                    <FilterCategoryItemTitleAndContentWrapperStyled onClick={() => onCategorySelected(e)}>
                        <FilterCategoryItemTitleStyled active={e.value === selectedCategory}>
                            {e.title.split(';')[0]}
                        </FilterCategoryItemTitleStyled>
                    </FilterCategoryItemTitleAndContentWrapperStyled>
                )
            }
        </FilterCategoryWrapperStyled>
    );
}

export default FilterCategories;