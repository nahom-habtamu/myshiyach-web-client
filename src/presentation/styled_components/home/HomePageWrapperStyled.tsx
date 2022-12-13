import styled from "styled-components";

const HomePageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  
  @media (max-width: 800px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export { HomePageWrapperStyled };
