import { useEffect } from "react";
import { getUserById } from "../../../core/action_creators/user/get_user_by_id_action_creators";
import Conversation from "../../../core/models/chat/conversation";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";
import {
  ChatListItemImageStyled,
  ChatListItemLastMessageStyled,
  ChatListItemLastMessageTimeStyled,
  ChatListItemNameStyled,
  ChatListItemTextWrapperStyled,
  ChatListItemWrapperStyled,
} from "../../styled_components/chat/ChatListComponentsStyled";

const ChatListItem = ({ conversation }: { conversation: Conversation }) => {
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
    dispatch(getUserById(strangerId, loginState.result.token));
  }, [dispatch, strangerId, loginState.result.token]);

  const buildLastMessage = () => {
    var lastMessage = conversation.messages[conversation.messages.length - 1];
    if (lastMessage.type === "IMAGE") {
      return "image";
    }
    return lastMessage.content;
  };

  const buildTimeFormat = () => {
    let createdTime = new Date(
      conversation.messages[conversation.messages.length - 1].createdDateTime
    );
    return createdTime.getHours() + ":" + createdTime.getMinutes();
  };

  return (
    <ChatListItemWrapperStyled>
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
        </>
      )}
    </ChatListItemWrapperStyled>
  );
};

export default ChatListItem;
