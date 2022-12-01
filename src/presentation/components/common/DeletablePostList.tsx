import { MdDelete } from "react-icons/md";
import Product from "../../../core/models/product/product";
import { ICON_SIZE_LARGE } from "../../constants/sizes";
import {
  DeletablePostListWrapperStyled,
  DeletablePostListItemStyled,
  DeletablePostListItemAvatarStyled,
  DeletablePostListItemTextWrapperStyled,
  DeletablePostListItemTitleStyled,
  DeletablePostListItemDescriptionStyled,
  DeletablePostListItemDeleteIconWrapperStyled,
} from "../../styled_components/common/DeletablePostListComponentsStyled";

type DeletablePostListProps = {
  products: Product[];
  onDeleteClicked: Function;
};

const DeletablePostList = (props: DeletablePostListProps) => {
  return (
    <DeletablePostListWrapperStyled>
      {props.products.map((p) => (
        <DeletablePostListItemStyled>
          <DeletablePostListItemAvatarStyled src={p.productImages[0]} />
          <DeletablePostListItemTextWrapperStyled>
            <DeletablePostListItemTitleStyled>
              {p.title}
            </DeletablePostListItemTitleStyled>
            <DeletablePostListItemDescriptionStyled>
              {p.description.length > 50
                ? p.description.slice(0, 50)
                : p.description}
            </DeletablePostListItemDescriptionStyled>
          </DeletablePostListItemTextWrapperStyled>
          <DeletablePostListItemDeleteIconWrapperStyled>
            <MdDelete
              size={ICON_SIZE_LARGE}
              onClick={() => props.onDeleteClicked(p._id)}
            />
          </DeletablePostListItemDeleteIconWrapperStyled>
        </DeletablePostListItemStyled>
      ))}
    </DeletablePostListWrapperStyled>
  );
};

export default DeletablePostList;
