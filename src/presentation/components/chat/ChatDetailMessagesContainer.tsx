import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailBubbleImageStyled,
  ChatDetailBubbleImageWrapperStyled,
  ChatDetailBubbleItemStyled,
  ChatDetailBubbleItemWrapperStyled,
  ChatDetailBubblesWrapperStyled,
  ChatDetailBubbleTimeIndicatorStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

const ChatDetailMessagesContainer = () => {
  const loginState = useAppSelector((state) => state.login);
  const chatDetailState = useAppSelector((state) => state.getChatDetail);
  return (
    <ChatDetailBubblesWrapperStyled>
      {chatDetailState.result?.conversation.messages.map((message) => {
        let leftBubble =
          message.senderId !== loginState.result.currentUser?._id;
        let parsedDate = new Date(message.createdDateTime);
        let messageTime = parsedDate.getHours() + ":" + parsedDate.getMinutes();

        return (
          <ChatDetailBubbleItemWrapperStyled leftBubble={leftBubble}>
            {message.type === "IMAGE" ? (
              <ChatDetailBubbleImageWrapperStyled>
                <ChatDetailBubbleImageStyled src={message.content} />
                <ChatDetailBubbleTimeIndicatorStyled>
                  {messageTime}
                </ChatDetailBubbleTimeIndicatorStyled>
              </ChatDetailBubbleImageWrapperStyled>
            ) : (
              <ChatDetailBubbleItemStyled leftBubble={leftBubble}>
                {message.content}
                <ChatDetailBubbleTimeIndicatorStyled>
                  {messageTime}
                </ChatDetailBubbleTimeIndicatorStyled>
              </ChatDetailBubbleItemStyled>
            )}
          </ChatDetailBubbleItemWrapperStyled>
        );
      })}
    </ChatDetailBubblesWrapperStyled>
  );
};

export default ChatDetailMessagesContainer;
