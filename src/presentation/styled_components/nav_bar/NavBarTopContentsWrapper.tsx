import styled from "styled-components";

const NavBarTopContentsWrapper = styled.div`
  width: 90%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;

interface NavBarTopContentBlockItemWrapperProps {
  position: string;
}

const NavBarTopContentBlockItemWrapper = styled.div<NavBarTopContentBlockItemWrapperProps>`
  width: 50%;
  display: flex;
  justify-content: ${(props) => props.position};
`;

export { NavBarTopContentsWrapper, NavBarTopContentBlockItemWrapper };
