import styled from "styled-components";

export const NavExpandedModelWrapperStyled = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 10%;
  background-color: #635b67;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DownloadAppButtonStyled = styled.button`
    width: 80%;
    height: 48px;
    background: #b54343;
    border: none;
    margin-top: 25px;
    color: white;
    font-size: 15px;
`;

export const NavBarItemWrapperStyled = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 18px;
    padding-block: 5px;

    :hover {
        background: light-gray;
        color: darkgray;
    }

    :active {
        background: white;
        color: gray;
    }
`;