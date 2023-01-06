import styled from "styled-components";

const SavedPostsPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background: white;
  margin: 15px auto;
  min-height: 400px;
  
  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SavedPostsNoItemsLabelStyled = styled.div`
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;
  color: grey;
  line-height: 300px;
  text-align: center;
`;

export { SavedPostsPageWrapperStyled , SavedPostsNoItemsLabelStyled};
