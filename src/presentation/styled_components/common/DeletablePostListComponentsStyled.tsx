import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

const DeletablePostListWrapperStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 15px auto;
  
  @media (max-width: 800px) {
    width: 85%;
    gap: 18px; 
  }

  @media (max-width: 500px) {
    width: 95%;
    gap: 12px;
  }
`;

const DeletablePostListItemStyled = styled.div`
  width: 100%;
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
  margin-left: 25px;
  object-fit: center center;

  @media (max-width: 800px) {
    width: 110px;
    height: 110px;
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
`;

const DeletablePostListItemTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-inline: 25px;

  @media (max-width: 800px) {
    margin-inline: 20px;
  }

  @media (max-width: 500px) {
    margin-inline: 15px;
  }
`;

const DeletablePostListItemTitleStyled = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: black;

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const DeletablePostListItemDescriptionStyled = styled.div`
  font-size: 21px;
  color: grey;

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const DeletablePostListItemDeleteIconWrapperStyled = styled.div`
  position: absolute;
  color: ${PINK_COLOR};
  top: 50px;
  right: 50px;

  @media (max-width: 800px) {
    top: 40px;
    right: 40px;
  }

  @media (max-width: 500px) {
    top: 5px;
    right: 5px;
  }
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
