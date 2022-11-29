import {
  ChatDetailHeaderOneStyled,
  ChatDetailHeaderTwoStyled,
  ChatDetailHeaderWrapperStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

const ChatDetailHeader = () => {
  return (
    <ChatDetailHeaderWrapperStyled>
      <ChatDetailHeaderOneStyled>Supplier Chat</ChatDetailHeaderOneStyled>
      <ChatDetailHeaderTwoStyled>
        Please keep the chat clean and follow our community guidelines
      </ChatDetailHeaderTwoStyled>
    </ChatDetailHeaderWrapperStyled>
  );
};

export default ChatDetailHeader;
