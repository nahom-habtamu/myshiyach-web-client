import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../constants/colors";

const BodyContentWrapperStyled = styled.div`
  width: 100%;
  background: ${LIGHT_GRAY_COLOR};
  display: flex;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
  }

`;

export { BodyContentWrapperStyled };
