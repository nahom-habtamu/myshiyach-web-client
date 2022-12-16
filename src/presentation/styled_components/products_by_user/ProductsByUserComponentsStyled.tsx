import styled from "styled-components";

const ProductsByUserWrapperStyled = styled.div`
  width: 60%;
  height: 100%;
  margin: 25px auto;
  background: white;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 100%;
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
