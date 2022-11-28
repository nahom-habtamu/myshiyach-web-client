import styled from "styled-components";

const ChatListWrapperStyled = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 25px auto;
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
`;

const ChatListItemTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-inline: 25px;
`;

const ChatListItemNameStyled = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: black;
`;

const ChatListItemLastMessageStyled = styled.div`
  font-size: 21px;
  color: grey;
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
