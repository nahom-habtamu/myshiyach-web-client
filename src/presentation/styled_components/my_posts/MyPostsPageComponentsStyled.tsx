import styled from "styled-components";

const MyPostsPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background: white;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MyPostsLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export { MyPostsPageWrapperStyled, MyPostsLabelStyled };
