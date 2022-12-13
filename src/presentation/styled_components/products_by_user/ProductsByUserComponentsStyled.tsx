import styled from "styled-components";

const ProductsByUserWrapperStyled = styled.div`
  width: 60%;
  height: 100%;
  margin: 25px auto;
  background: white;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const ProductsByUserLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export { ProductsByUserWrapperStyled, ProductsByUserLabelStyled };
