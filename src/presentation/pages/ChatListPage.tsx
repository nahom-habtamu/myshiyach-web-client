import { useEffect } from "react";
import { getConversationsByUser } from "../../core/action_creators/chat/get_conversations_by_user_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ChatListItem from "../components/chat/ChatListItem";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import { ChatListWrapperStyled } from "../styled_components/chat/ChatListComponentsStyled";

const ChatListPage = () => {
  const dispatch = useAppDispatch();

  const loginState = useAppSelector((state) => state.login);
  const conversationsState = useAppSelector(
    (state) => state.getConversationsByUser
  );

  useEffect(() => {
    if (loginState.result != null) {
      dispatch(
        getConversationsByUser(loginState.result.currentUser?._id ?? "")
      );
    }
  }, [loginState.result]);

  return (
    <MasterComponent activePage={ChatListPageRoute}>
      <ChatListWrapperStyled>
        {conversationsState.isLoading ? (
          <LoadingSpinner />
        ) : (
          conversationsState.result?.map((e) => (
            <ChatListItem conversation={e} key={e.id} />
          ))
        )}
      </ChatListWrapperStyled>
    </MasterComponent>
  );
};

export default ChatListPage;
export const ChatListPageRoute = "/chatList";
