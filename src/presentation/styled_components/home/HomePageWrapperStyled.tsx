import styled from "styled-components";

const HomePageWrapperStyled = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export { HomePageWrapperStyled };
