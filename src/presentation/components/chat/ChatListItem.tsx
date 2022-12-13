import { useEffect } from "react";
import {
  clearGetUserById,
  getUserById,
} from "../../../core/action_creators/user/get_user_by_id_action_creators";
import Conversation from "../../../core/models/chat/conversation";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import {
  ChatListItemImageStyled,
  ChatListItemLastMessageStyled,
  ChatListItemLastMessageTimeStyled,
  ChatListItemNameStyled,
  ChatListItemTextWrapperStyled,
  ChatListItemUnseenStyled,
  ChatListItemWrapperStyled,
} from "../../styled_components/chat/ChatListComponentsStyled";

const ChatListItem = ({
  conversation,
  onClick,
}: {
  conversation: Conversation;
  onClick: Function;
}) => {
  const dispatch = useAppDispatch();

  const loginState = useAppSelector((state) => state.login);
  const getStrangerInfoState = useAppSelector((state) => state.getUserById);

  const getStrangerId = () => {
    return conversation.memberOne !== loginState.result.currentUser?._id
      ? conversation.memberOne
      : conversation.memberTwo;
  };

  let strangerId = getStrangerId();

  useEffect(() => {
    dispatch(clearGetUserById());
    dispatch(getUserById(strangerId, loginState.result.token));
  }, [
    dispatch,
    strangerId,
    loginState.result.token
  ]);

  const buildLastMessage = () => {
    var lastMessage = conversation.messages[conversation.messages.length - 1];
    if (lastMessage.type === "IMAGE") {
      return "image";
    }
    return lastMessage.content.length > 30 ? lastMessage.content.slice(0, 30) : lastMessage.content;
  };

  const buildTimeFormat = () => {
    let createdTime = new Date(
      conversation.messages[conversation.messages.length - 1].createdDateTime
    );
    return createdTime.getHours() + ":" + createdTime.getMinutes();
  };

  const renderUnseenMessagesCount = () => {
    let count = conversation.messages.filter(
      (m) => !m.isSeen && m.recieverId === loginState.result.currentUser?._id
    ).length;
    if (count > 0) {
      <ChatListItemUnseenStyled>count</ChatListItemUnseenStyled>;
    }
    return null;
  };

  return (
    <ChatListItemWrapperStyled onClick={() => onClick()}>
      {getStrangerInfoState.isLoading ? (
        <h1>LOADING..........</h1>
      ) : (
        <>
          <ChatListItemImageStyled>
            {getStrangerInfoState.user?.fullName[0].toUpperCase()}
          </ChatListItemImageStyled>
          <ChatListItemTextWrapperStyled>
            <ChatListItemNameStyled>
              {getStrangerInfoState.user?.fullName}
            </ChatListItemNameStyled>
            <ChatListItemLastMessageStyled>
              {buildLastMessage()}
            </ChatListItemLastMessageStyled>
          </ChatListItemTextWrapperStyled>
          <ChatListItemLastMessageTimeStyled>
            {buildTimeFormat()}
          </ChatListItemLastMessageTimeStyled>
          {renderUnseenMessagesCount()}
        </>
      )}
    </ChatListItemWrapperStyled>
  );
};

export default ChatListItem;
