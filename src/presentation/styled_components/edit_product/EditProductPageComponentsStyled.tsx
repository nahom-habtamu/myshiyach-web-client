import styled from "styled-components";

const EditProductPageWrapperStyled = styled.div`
  width: 100%;
  margin: 25px auto;
  background: white;
`;

const EditPostInputWrapperStyled = styled.div`
  width: 50%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 800px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export { EditProductPageWrapperStyled, EditPostInputWrapperStyled };
