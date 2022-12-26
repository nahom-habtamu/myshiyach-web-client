import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Conversation from "../../../core/models/chat/conversation";
import Message from "../../../core/models/chat/message";
import { markMessagesInConversationAsRead } from "../../../core/action_creators/chat/mark_messages_in_conversation_as_read_action_creators";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import { ICON_SIZE_MEDIUM } from "../../constants/sizes";
import {
  ChatDetailBubbleImageStyled,
  ChatDetailBubbleImageWrapperStyled,
  ChatDetailBubbleItemStyled,
  ChatDetailBubbleItemWrapperStyled,
  ChatDetailBubblesWrapperStyled,
  ChatDetailBubbleTimeIndicatorStyled,
  ChatDetailDateIndicatorStyled,
  ChatDetailGoToBottomButton,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

import groupMessagesByDate from "../../utils/groupMessagesByDate";

const ChatDetailMessagesContainer = ({
  conversation,
  chatContainerRef,
}: {
  conversation: Conversation;
  chatContainerRef: any;
}) => {
  const loginState = useAppSelector((state) => state.login);

  const [isDownButtonVisible, setIsDownButtonVisible] = useState(false);
  const [prev, setPrev] = useState(window.scrollY);

  const dispatch = useAppDispatch();

  function scrollToBottom() {
    const lastItem = chatContainerRef.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    setIsDownButtonVisible(false);
  }

  const handleGoToBottomClicked = () => {
    scrollToBottom();
    dispatch(
      markMessagesInConversationAsRead({
        recieverId: loginState.result.currentUser!._id,
        conversationId: conversation.id,
      })
    );

  };

  const onScroll = (e: any) => {
    const window = e.target;
    if (prev > window.scrollTop) {
      setIsDownButtonVisible(false);
    } else if (prev < window.scrollTop) {
      let isBottom =
        window.scrollHeight - window.scrollTop === window.clientHeight;
      setIsDownButtonVisible(!isBottom);
    }
    setPrev(window.scrollTop);
  };

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let groupedMessages = groupMessagesByDate(conversation.messages);

  const parseMessagesToChatBubbles = (messages: Message[]) => {
    return messages.map((message) => {
      let leftBubble = message.senderId !== loginState.result.currentUser!._id;
      let parsedDate = new Date(message.createdDateTime);
      let messageTime = parsedDate.getHours() + ":" + parsedDate.getMinutes();

      return (
        <ChatDetailBubbleItemWrapperStyled leftBubble={leftBubble} key={message.createdDateTime}>
          {message.type === "IMAGE" ? (
            <ChatDetailBubbleImageWrapperStyled>
              <ChatDetailBubbleImageStyled src={message.content} />
              <ChatDetailBubbleTimeIndicatorStyled>
                {messageTime}
              </ChatDetailBubbleTimeIndicatorStyled>
            </ChatDetailBubbleImageWrapperStyled>
          ) : (
            <ChatDetailBubbleItemStyled leftBubble={leftBubble} key={message.createdDateTime}>
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
    <>
      <ChatDetailBubblesWrapperStyled onScroll={onScroll} ref={chatContainerRef}>
        {groupedMessages.length === 0 ? (
          <h1>NO MESSAGES YET!!</h1>
        ) : (
          groupedMessages.map((gm) => {
            return (
              <>
                <ChatDetailDateIndicatorStyled>
                  {parseCreatedAtTime(gm[0].createdDateTime)}
                </ChatDetailDateIndicatorStyled>
                {parseMessagesToChatBubbles(gm)}
              </>
            );
          })
        )}
      </ChatDetailBubblesWrapperStyled>
      {isDownButtonVisible && (
        <ChatDetailGoToBottomButton onClick={handleGoToBottomClicked}>
          <BsChevronDown size={ICON_SIZE_MEDIUM} />
        </ChatDetailGoToBottomButton>
      )}
    </>
  );
};

const parseCreatedAtTime = (createdDateTime: string) => {
  let parsed = new Date(createdDateTime);
  return parsed.toDateString();
};

export default ChatDetailMessagesContainer;
