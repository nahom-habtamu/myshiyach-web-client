import styled from "styled-components";

type HomePageCategoryItemStyledProps = {
  isActive: boolean;
};

const HomePageCategoryItemStyled = styled.div<HomePageCategoryItemStyledProps>`
  font-size: 17px;
  color: ${(props) => (props.isActive ? "black" : "grey")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  border-bottom: 1px solid
    ${(props) => (props.isActive ? "black" : "transparent")};
  padding-bottom: 2px;
  transition: all 0.3s ease-in-out;

  :hover {
    border-bottom: 1px solid black;
    font-weight: bold;
    color: black;
  }
`;

const HomePageCategoryListWrapperStyled = styled.div`
  margin-left: 55px;
  margin-top: 25px;
  display: flex;
  gap: 25px;
`;

export { HomePageCategoryItemStyled, HomePageCategoryListWrapperStyled };
