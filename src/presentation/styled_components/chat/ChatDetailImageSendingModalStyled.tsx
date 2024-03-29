import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const ChatDetailImageSendingModalStyled = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 15px;
  align-items: center;
  gap: 25px;


  @media (max-width: 500px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 800px) {
    width: 350px;
    height: 350px;
  }
`;

const ChatDetailImageSendingModalActionButtonsWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const ChatDetailImageSendingModalActionButtonStyled = styled.button`
  width: fit-content;
  color: ${PRIMARY_COLOR};
  padding: 10px;
  font-size: 20px;
  font-style: italic;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: none;
  background: white;
  transition: all 0.5s ease;

  :hover {
    border: 1px solid gray;
  }

  @media (max-width: 500px) {
    padding: 5px;
    font-size: 15px;
  }

  @media (max-width: 800px) {
    padding: 8px;
    font-size: 18px;
  }
`;

export {
  ChatDetailImageSendingModalStyled,
  ChatDetailImageSendingModalActionButtonsWrapperStyled,
  ChatDetailImageSendingModalActionButtonStyled,
};
