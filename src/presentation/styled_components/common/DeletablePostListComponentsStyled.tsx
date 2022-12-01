import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const DeletablePostListWrapperStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 50px auto;
`;

const DeletablePostListItemStyled = styled.div`
  width: 80%;
  height: 150px;
  margin: 0 auto;
  background: white;
  box-shadow: 1px 1px 2px 1px #888888;
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
`;

const DeletablePostListItemAvatarStyled = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  color: white;
  font-size: 30px;
  margin-left: 25px;
  object-fit: center center;
`;

const DeletablePostListItemTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-inline: 25px;
`;

const DeletablePostListItemTitleStyled = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: black;
`;

const DeletablePostListItemDescriptionStyled = styled.div`
  font-size: 21px;
  color: grey;
`;

const DeletablePostListItemDeleteIconWrapperStyled = styled.div`
  position: absolute;
  color: ${PINK_COLOR};
  top: 50px;
  right: 50px;
`;

export {
  DeletablePostListWrapperStyled,
  DeletablePostListItemStyled,
  DeletablePostListItemAvatarStyled,
  DeletablePostListItemTextWrapperStyled,
  DeletablePostListItemTitleStyled,
  DeletablePostListItemDescriptionStyled,
  DeletablePostListItemDeleteIconWrapperStyled,
};
