import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailBubbleImageStyled,
  ChatDetailBubbleItemStyled,
  ChatDetailBubbleItemWrapperStyled,
  ChatDetailBubblesWrapperStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

const ChatDetailMessagesContainer = () => {
  const loginState = useAppSelector((state) => state.login);
  const chatDetailState = useAppSelector((state) => state.getChatDetail);
  return (
    <ChatDetailBubblesWrapperStyled>
      {chatDetailState.result?.conversation.messages.map((message) => {
        let leftBubble =
          message.senderId !== loginState.result.currentUser?._id;
        return (
          <ChatDetailBubbleItemWrapperStyled leftBubble={leftBubble}>
            {message.type === "IMAGE" ? (
              <ChatDetailBubbleImageStyled src={message.content} />
            ) : (
              <ChatDetailBubbleItemStyled leftBubble={leftBubble}>
                {message.content}
              </ChatDetailBubbleItemStyled>
            )}
          </ChatDetailBubbleItemWrapperStyled>
        );
      })}
    </ChatDetailBubblesWrapperStyled>
  );
};

export default ChatDetailMessagesContainer;
