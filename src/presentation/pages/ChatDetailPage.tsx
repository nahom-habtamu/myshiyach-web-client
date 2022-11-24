import { useEffect } from "react";
import { BiImages, BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getChatDetail } from "../../core/action_creators/chat/get_chat_detail_action_creators";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ChatDetailHeader from "../components/chat/ChatDetailHeader";
import ChatDetailMessagesContainer from "../components/chat/ChatDetailMessagesContainer";
import ChatDetailStrangerUser from "../components/chat/ChatDetailStrangerUser";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import { ICON_SIZE } from "../constants/sizes";
import {
  ChatDetailAddMessageInputStyled,
  ChatDetailAddMessageWrapperStyled,
  ChatDetailWrapperStyled,
} from "../styled_components/chat/ChatDetailComponentsStyled";
import { ChatListPageRoute } from "./ChatListPage";

const ChatDetailPage = () => {
  let { id } = useParams<any>();
  const loginState = useAppSelector((state) => state.login);
  const chatDetailState = useAppSelector((state) => state.getChatDetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getChatDetail({
        conversationId: id,
        currentUserId: loginState.result.currentUser!._id,
        token: loginState.result.token,
      })
    );
  }, [id, loginState.result.currentUser!._id, loginState.result.token]);

  const renderMainContent = () => (
    <>
      {/* <ChatDetailHeader /> */}
      <ChatDetailStrangerUser />
      <ChatDetailMessagesContainer />
      <ChatDetailAddMessageWrapperStyled>
        <ChatDetailAddMessageInputStyled
          type="text"
          placeholder="Send Message"
        />
        <BiImages size={ICON_SIZE} />
        <BiSend size={ICON_SIZE} />
      </ChatDetailAddMessageWrapperStyled>
    </>
  );

  return (
    <MasterComponent activePage={ChatListPageRoute}>
      <ChatDetailWrapperStyled>
        {chatDetailState.isLoading ? <LoadingSpinner /> : renderMainContent()}
      </ChatDetailWrapperStyled>
    </MasterComponent>
  );
};

export default ChatDetailPage;
export const ChatDetailPageRoute = "/chatDetail/:id";
