import { ConversationWithUserInformation } from "../../../core/repositories/chat_repository";
import { useAppSelector } from "../../../store/storeHooks";
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
  conversationWithStrangerInfo,
  onClick,
}: {
  conversationWithStrangerInfo: ConversationWithUserInformation;
  onClick: Function;
}) => {

  const loginState = useAppSelector((state) => state.login);

  const buildLastMessage = () => {
    var lastMessage = conversationWithStrangerInfo.conversation.messages[conversationWithStrangerInfo.conversation.messages.length - 1];
    if (lastMessage.type === "IMAGE") {
      return "image";
    }
    return lastMessage.content.length > 30 ? lastMessage.content.slice(0, 30) : lastMessage.content;
  };

  const buildTimeFormat = () => {
    let createdTime = new Date(
      conversationWithStrangerInfo.conversation.messages[conversationWithStrangerInfo.conversation.messages.length - 1].createdDateTime
    );
    return createdTime.getHours() + ":" + createdTime.getMinutes();
  };

  const renderUnseenMessagesCount = () => {
    let count = conversationWithStrangerInfo.conversation.messages.filter(
      (m) => !m.isSeen && m.recieverId === loginState.result.currentUser?._id
    ).length;
    if (count > 0) {
      <ChatListItemUnseenStyled>count</ChatListItemUnseenStyled>;
    }
    return null;
  };

  return (
    <ChatListItemWrapperStyled onClick={() => onClick()}>
      <ChatListItemImageStyled>
        {conversationWithStrangerInfo.strangerUser?.fullName[0].toUpperCase()}
      </ChatListItemImageStyled>
      <ChatListItemTextWrapperStyled>
        <ChatListItemNameStyled>
          {conversationWithStrangerInfo.strangerUser?.fullName}
        </ChatListItemNameStyled>
        <ChatListItemLastMessageStyled>
          {buildLastMessage()}
        </ChatListItemLastMessageStyled>
      </ChatListItemTextWrapperStyled>
      <ChatListItemLastMessageTimeStyled>
        {buildTimeFormat()}
      </ChatListItemLastMessageTimeStyled>
      {renderUnseenMessagesCount()}


    </ChatListItemWrapperStyled>
  );
};

export default ChatListItem;
