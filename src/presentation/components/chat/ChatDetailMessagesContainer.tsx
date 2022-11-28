import Conversation from "../../../core/models/chat/conversation";
import Message from "../../../core/models/chat/message";
import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailBubbleImageStyled,
  ChatDetailBubbleImageWrapperStyled,
  ChatDetailBubbleItemStyled,
  ChatDetailBubbleItemWrapperStyled,
  ChatDetailBubblesWrapperStyled,
  ChatDetailBubbleTimeIndicatorStyled,
  ChatDetailDateIndicatorStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

import groupMessagesByDate from "../../utils/groupMessagesByDate";

const ChatDetailMessagesContainer = ({
  conversation,
}: {
  conversation: Conversation;
}) => {
  const loginState = useAppSelector((state) => state.login);
  let groupedMessages = groupMessagesByDate(conversation.messages);

  const parseMessagesToChatBubbles = (messages: Message[]) => {
    return messages.map((message) => {
      let leftBubble = message.senderId !== loginState.result.currentUser!._id;
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
    });
  };

  return (
    <ChatDetailBubblesWrapperStyled>
      {groupedMessages.map((gm) => {
        return (
          <>
            <ChatDetailDateIndicatorStyled>
              {parseCreatedAtTime(gm[0].createdDateTime)}
            </ChatDetailDateIndicatorStyled>
            {parseMessagesToChatBubbles(gm)}
          </>
        );
      })}
    </ChatDetailBubblesWrapperStyled>
  );
};

const parseCreatedAtTime = (createdDateTime: string) => {
  let parsed = new Date(createdDateTime);
  return parsed.toDateString();
};

export default ChatDetailMessagesContainer;
