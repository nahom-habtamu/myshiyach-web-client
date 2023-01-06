import styled from "styled-components";

const MyPostsPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background: #F0F0F0;
  margin: 0 auto;
  min-height: 400px;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MyPostsLabelStyled = styled.div`
  font-size: 28px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  text-align: center;
  font-weight: 600;
  margin: 15px;
`;

const MyPostsNoItemsLabelStyled = styled.div`
  font-size: 22px;
  text-align: center;
  text-transform: capitalize;
  color: grey;
  line-height: 300px;
  text-align: center;
`;


export { MyPostsPageWrapperStyled, MyPostsNoItemsLabelStyled, MyPostsLabelStyled };
