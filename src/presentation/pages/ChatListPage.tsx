import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getConversationsByUser } from "../../core/action_creators/chat/get_conversations_by_user_action_creators";
import Conversation from "../../core/models/chat/conversation";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ChatListItem from "../components/chat/ChatListItem";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import { ChatListWrapperStyled } from "../styled_components/chat/ChatListComponentsStyled";

const ChatListPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const loginState = useAppSelector((state) => state.login);
  const conversationSnapshotState = useAppSelector(
    (state) => state.getConversationsByUser
  );

  useEffect(() => {
    if (loginState.result != null) {
      dispatch(
        getConversationsByUser(onSnapshot, loginState.result.currentUser!._id)
      );
    }
  }, [loginState.result, dispatch]);

  const onSnapshot = (conversationsOnRealTime: Conversation[]) => {
    setConversations(conversationsOnRealTime);
  };

  useEffect(() => {
    if (conversationSnapshotState.unsubscribe != null) {
      let unsubscribe = conversationSnapshotState.unsubscribe;
      return unsubscribe();
    }
  }, []);

  return (
    <MasterComponent activePage={ChatListPageRoute}>
      <ChatListWrapperStyled>
        {conversationSnapshotState.isLoading ? (
          <LoadingSpinner />
        ) : (
          conversations.map((e) => (
            <ChatListItem
              conversation={e}
              key={e.id}
              onClick={() => history.push(`/chatDetail/${e.id}`)}
            />
          ))
        )}
      </ChatListWrapperStyled>
    </MasterComponent>
  );
};

export default ChatListPage;
export const ChatListPageRoute = "/chatList";
