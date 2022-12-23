import styled from "styled-components";

const LoadingSpinnerWrapperStyled = styled.div<{ fullHeightAndWidth?: boolean }>`
  width: 100%;
  height: ${props => props.fullHeightAndWidth !== false ? '100%' : 'fit-content'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export { LoadingSpinnerWrapperStyled };
