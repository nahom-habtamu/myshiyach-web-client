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

  @media (max-width: 800px) {
    width: fit-content;
    padding-inline: 3px;
    font-size: 22px;
  }
`;

const HomePageCategoryListWrapperStyled = styled.div`
  margin-left: 55px;
  margin-top: 25px;
  display: flex;
  gap: 25px;

  @media (max-width: 500px) {
    width: 95%;
  }

  @media (max-width: 800px) {
    width: 80%;
    flex-direction: column;
    gap: 5px;

  }
`;

export { HomePageCategoryItemStyled, HomePageCategoryListWrapperStyled };
