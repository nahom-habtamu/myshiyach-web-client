import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getConversationsWithStrangerInfoByUser } from "../../core/action_creators/chat/get_conversations_with_stranger_info_by_user_action_creators";
import { ConversationWithUserInformation } from "../../core/repositories/chat_repository";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ChatListItem from "../components/chat/ChatListItem";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/MasterComponent";
import useScrollToTop from "../custom_hooks/useScrollToTop";
import { ChatListWrapperStyled } from "../styled_components/chat/ChatListComponentsStyled";

const ChatListPage = () => {

  const [_] = useScrollToTop();
  
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [conversationsWithStrangerInfo, setConversationsWithSrrangerInfo] = useState<ConversationWithUserInformation[]>([]);

  const loginState = useAppSelector((state) => state.login);
  const conversationSnapshotState = useAppSelector(
    (state) => state.getConversationsByUser
  );

  useEffect(() => {
    if (loginState.result.currentUser != null) {
      dispatch(
        getConversationsWithStrangerInfoByUser(
          onSnapshot,
          loginState.result.currentUser._id,
          loginState.result.token
        )
      );
    }
  }, [loginState.result, dispatch]);

  const onSnapshot = (conversationsWithStrangerInfoOnRealTime: ConversationWithUserInformation[]) => {
    setConversationsWithSrrangerInfo(conversationsWithStrangerInfoOnRealTime);
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
          conversationsWithStrangerInfo.map((e) => (
            <ChatListItem
              conversationWithStrangerInfo={e}
              key={e.conversation.id}
              onClick={() => history.push(`/chatDetail/${e.conversation.id}`)}
            />
          ))
        )}
      </ChatListWrapperStyled>
    </MasterComponent>
  );
};

export default ChatListPage;
export const ChatListPageRoute = "/chatList";
