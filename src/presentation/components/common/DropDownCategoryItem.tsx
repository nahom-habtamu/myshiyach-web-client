import { useState } from "react";
import MainCategory from "../../../core/models/category/main_category";
import SubCategory from "../../../core/models/category/sub_category";
import {
    CategoryDropDownButtonStyled, CategoryDropDownContentStyled, CategoryDropDownItemStyled,
    CategoryItemDropDownWrapperStyled
} from "../../styled_components/common/DropDownCategoryItemStyled";

type DropDownCategoryItemProps = {
    mainCategory: MainCategory,
    activeSubCategory: string | null,
    activeMainCategory: string | null,
    isActive?: boolean,
    onClicked: Function
};

const DropDownCategoryItem = (
    { mainCategory, activeSubCategory, isActive, onClicked, activeMainCategory }
        : DropDownCategoryItemProps) => {

    const handleCategoryClicked = (subCat: SubCategory) => {

        if (subCat.title === 'All;ሁሉም' && activeMainCategory === mainCategory._id) {
            if(activeSubCategory !== null){
                onClicked(mainCategory, null)
            }
            else {
                onClicked(null, null);
            }
        }
        else if (subCat._id === activeSubCategory) {
            onClicked(mainCategory, null);
        }
        else {
            onClicked(mainCategory, subCat);
        }

    }

    const [isHoevered, setIsHoevered] = useState(false);

    const subCategories: SubCategory[] = [
        { _id: `1 ${mainCategory._id}`, title: `All;ሁሉም` },
        ...mainCategory.subCategories
    ];

    return (
        <CategoryItemDropDownWrapperStyled
            onMouseOut={() => setIsHoevered(false)}
            onMouseOver={(e) => {
                e.stopPropagation();
                setIsHoevered(true);
            }
            }>
            <CategoryDropDownButtonStyled isActive={isActive ?? false}>
                {mainCategory.title.split(';')[0]}
            </CategoryDropDownButtonStyled>
            <CategoryDropDownContentStyled show={isHoevered}>
                {
                    subCategories.map(
                        e => <CategoryDropDownItemStyled onClick={() => handleCategoryClicked(e)}>
                            {

                                (e.title === "All;ሁሉም" && mainCategory._id === activeMainCategory && activeSubCategory === null) ? `${e.title.split(';')[0]} *` :

                                    e._id === activeSubCategory ? `${e.title.split(';')[0]} *` : e.title.split(';')[0]
                            }
                        </CategoryDropDownItemStyled>
                    )
                }
            </CategoryDropDownContentStyled>
        </CategoryItemDropDownWrapperStyled>
    );
}

export default DropDownCategoryItem;