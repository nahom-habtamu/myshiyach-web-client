import { useState } from "react";
import MainCategory from "../../../core/models/category/main_category";
import {
    FilterCategoryContentItemTextStyled,
    FilterCategoryItemContentWrapper,
    FilterCategoryItemTitleAndContentWrapperStyled,
    FilterCategoryItemTitleStyled,
    FilterCategoryWrapperStyled
} from "../../styled_components/common/NewFilterComponentsStyled";

const FilterCategories = (
    { onCategorySelected, categories, selectedMainCategory, selectedSubCategory, onTitleClicked }:
        {
            onTitleClicked: Function,
            onCategorySelected: Function, categories: MainCategory[],
            selectedMainCategory: string | null;
            selectedSubCategory: string | null;
        }
) => {

    const [hoveredMainCategory, setHoveredMainCategory] = useState<string | null>(null);

    return (
        <FilterCategoryWrapperStyled>
            {
                categories.map(e =>
                    <FilterCategoryItemTitleAndContentWrapperStyled
                        onClick={() => onTitleClicked(e)}
                        onMouseOver={() => setHoveredMainCategory(e._id)}
                        onMouseOut={() => setHoveredMainCategory(null)}

                    >
                        <FilterCategoryItemTitleStyled active={e._id === selectedMainCategory}>
                            {e.title.split(';')[0]}
                        </FilterCategoryItemTitleStyled>
                        <FilterCategoryItemContentWrapper active={hoveredMainCategory === e._id}>
                            {
                                e.subCategories.map(se =>
                                    <FilterCategoryContentItemTextStyled
                                        active={selectedSubCategory === se._id}
                                        onClick={() => onCategorySelected(e, se)}>
                                        {se.title.split(';')[0]}
                                    </FilterCategoryContentItemTextStyled>
                                )
                            }
                        </FilterCategoryItemContentWrapper>
                    </FilterCategoryItemTitleAndContentWrapperStyled>
                )
            }
        </FilterCategoryWrapperStyled>
    );
}

export default FilterCategories;