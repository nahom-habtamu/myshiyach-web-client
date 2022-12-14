import styled from "styled-components";

const SavedPostsPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background: white;
  margin: 0 auto;
  
  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SavedPostsLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export { SavedPostsPageWrapperStyled, SavedPostsLabelStyled };
