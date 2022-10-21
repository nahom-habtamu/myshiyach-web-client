import styled from "styled-components";

const NavBarTopContentsWrapperStyled = styled.div`
  width: 90%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;

interface NavBarTopContentBlockItemWrapperProps {
  position: string;
}

const NavBarTopContentBlockItemWrapperStyled = styled.div<NavBarTopContentBlockItemWrapperProps>`
  width: 50%;
  display: flex;
  justify-content: ${(props) => props.position};
`;

export {
  NavBarTopContentsWrapperStyled,
  NavBarTopContentBlockItemWrapperStyled,
};
