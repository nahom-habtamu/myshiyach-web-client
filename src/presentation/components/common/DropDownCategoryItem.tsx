import MainCategory from "../../../core/models/category/main_category";
import SubCategory from "../../../core/models/category/sub_category";
import {
    CategoryDropDownButtonStyled, CategoryDropDownContentStyled, CategoryDropDownItemStyled,
    CategoryItemDropDownWrapperStyled
} from "../../styled_components/common/DropDownCategoryItemStyled";

type DropDownCategoryItemProps = {
    mainCategory: MainCategory,
    subCategory: string | null,
    isActive?: boolean,
    onClicked: Function
};

const DropDownCategoryItem = ({ mainCategory, subCategory, isActive, onClicked }: DropDownCategoryItemProps) => {

    const handleCategoryClicked = (subCategory: SubCategory) => {
        onClicked(mainCategory, subCategory);
    }

    return (
        <CategoryItemDropDownWrapperStyled>
            <CategoryDropDownButtonStyled isActive={isActive ?? false}>
                {mainCategory.title.split(';')[0]}
            </CategoryDropDownButtonStyled>
            <CategoryDropDownContentStyled>
                {
                    mainCategory.subCategories.map(
                        e => <CategoryDropDownItemStyled onClick={() => handleCategoryClicked(e)}>
                            {
                                e._id === subCategory ? `${e.title.split(';')[0]} *` : e.title.split(';')[0]
                            }
                        </CategoryDropDownItemStyled>
                    )
                }
            </CategoryDropDownContentStyled>
        </CategoryItemDropDownWrapperStyled>
    );
}

export default DropDownCategoryItem;