import styled from "styled-components";
import { LIGHT_GRAY_COLOR, PINK_COLOR } from "../../constants/colors";

const ChatListWrapperStyled = styled.div`
  width: 95%;
  height: fit-content;
  margin: 12px auto;
  background: white;
`;

const ChatListItemWrapperStyled = styled.div`
  width: 80%;
  height: 150px;
  margin: 25px auto;
  background: white;
  box-shadow: 1px 1px 2px 1px #888888;
  position: relative;
  display: flex;
  align-items: center;

  :hover {
    box-shadow: 1px 1px 2px 1px ${PINK_COLOR};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 950%;
    height: 150px;
    margin: 10px auto;
  }

  @media (max-width: 800px) {
    width: 88%;
    height: 150px;
    margin: 15px auto;
  }
`;

const ChatListItemImageStyled = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  margin-left: 25px;

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    font-size: 24px;
    margin-left: 15px;
  }
`;

const ChatListItemTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-inline: 25px;

  @media (max-width: 500px) {
    margin-left: 15px;
  }
`;

const ChatListItemNameStyled = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: black;

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const ChatListItemLastMessageStyled = styled.div`
  font-size: 21px;
  color: grey;
  

  @media (max-width: 500px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const ChatListItemLastMessageTimeStyled = styled.div`
  font-size: 15px;
  color: grey;
  position: absolute;
  top: 25px;
  right: 25px;
`;

const ChatListItemUnseenStyled = styled.div`
  font-size: 15px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-block: 10px;
  position: absolute;
  top: 50px;
  right: 25px;
  background: red;
  color: white;
  text-align: center;
  line-height: 25px;
`;

export {
  ChatListWrapperStyled,
  ChatListItemWrapperStyled,
  ChatListItemImageStyled,
  ChatListItemNameStyled,
  ChatListItemLastMessageStyled,
  ChatListItemLastMessageTimeStyled,
  ChatListItemTextWrapperStyled,
  ChatListItemUnseenStyled,
};
