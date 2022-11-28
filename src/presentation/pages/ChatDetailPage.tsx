import { useEffect, useState } from "react";
import { BiImages, BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { addImageMessage } from "../../core/action_creators/chat/add_image_message_action_creators";
import { addTextMessage } from "../../core/action_creators/chat/add_text_message_action_creators";
import { getChatDetail } from "../../core/action_creators/chat/get_chat_detail_action_creators";
import { getStrangerUser } from "../../core/action_creators/chat/get_stranger_user_action_creators";
import Conversation from "../../core/models/chat/conversation";
import Message from "../../core/models/chat/message";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import ChatDetailImageMessageSendingModal from "../components/chat/ChatDetailImageMessageSendingModal";
import ChatDetailMessagesContainer from "../components/chat/ChatDetailMessagesContainer";
import ChatDetailStrangerUser from "../components/chat/ChatDetailStrangerUser";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/master_component";
import { ICON_SIZE } from "../constants/sizes";
import {
  ChatDetailAddMessageInputStyled,
  ChatDetailAddMessageWrapperStyled,
  ChatDetailGoToBottomButton,
  ChatDetailWrapperStyled,
} from "../styled_components/chat/ChatDetailComponentsStyled";
import { ChatListPageRoute } from "./ChatListPage";

const ChatDetailPage = () => {
  let { id } = useParams<any>();

  const [conversation, setConversation] = useState<Conversation | null>(null);

  const [messageContent, setMessageContent] = useState("");
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);
  const [pickedImages, setPickedImages] = useState<File[]>([]);

  const loginState = useAppSelector((state) => state.login);
  const strangerUserState = useAppSelector((state) => state.getStrangerUser);
  const chatDetailState = useAppSelector((state) => state.getChatDetail);
  const dispatch = useAppDispatch();

  const onSnapshot = (conversationOnRealTime: Conversation) => {
    setConversation(conversationOnRealTime);
  };

  useEffect(() => {
    if (conversation?.id != null) {
      dispatch(
        getStrangerUser({
          conversation: conversation,
          token: loginState.result.token,
          currentUserId: loginState.result.currentUser!._id,
        })
      );
    }
  }, [dispatch, conversation?.id]);

  useEffect(() => {
    dispatch(
      getChatDetail({
        onSnapshotCallBack: onSnapshot,
        conversationId: id,
      })
    );
  }, [id, loginState.result.currentUser, loginState.result.token, dispatch]);

  useEffect(() => {
    if (chatDetailState.unsubscribe != null) {
      let unsubscribe = chatDetailState.unsubscribe;
      return unsubscribe();
    }
  }, []);

  const handleSendingTextMessage = () => {
    const message: Message = {
      content: messageContent,
      createdDateTime: new Date().toISOString(),
      isSeen: false,
      recieverId: strangerUserState.user?._id ?? "",
      senderId: loginState.result.currentUser!._id,
      type: "TEXT",
    };
    dispatch(addTextMessage({ conversationId: id, message }));
  };

  const handleSendingImageMessage = () => {
    for (let i = 0; i < pickedImages.length; i++) {
      const image = pickedImages[i];
      const message: Message = {
        content: "",
        createdDateTime: new Date().toISOString(),
        isSeen: false,
        recieverId: strangerUserState.user?._id ?? "",
        senderId: loginState.result.currentUser!._id,
        type: "IMAGE",
      };
      dispatch(addImageMessage({ conversationId: id, message, image }));
    }
  };

  const renderMainContent = () => (
    <>
      <ChatDetailStrangerUser />
      <ChatDetailMessagesContainer conversation={conversation!} />
      <ChatDetailAddMessageWrapperStyled>
        <ChatDetailAddMessageInputStyled
          type="text"
          placeholder="Send Message"
          onChange={(e) => setMessageContent(e.target.value)}
          value={messageContent}
        />
        <BiImages
          size={ICON_SIZE}
          onClick={() => setIsSendMessageModalOpen(true)}
        />
        <BiSend size={ICON_SIZE} onClick={handleSendingTextMessage} />
        {isSendMessageModalOpen && (
          <ChatDetailImageMessageSendingModal
            onClose={() => setIsSendMessageModalOpen(false)}
            onImagePicked={(_: any, pickedImages: File[]) => {
              setPickedImages(pickedImages);
            }}
            onSubmit={handleSendingImageMessage}
            pickedImages={pickedImages}
          />
        )}
      </ChatDetailAddMessageWrapperStyled>
    </>
  );

  return (
    <MasterComponent activePage={ChatListPageRoute}>
      <ChatDetailWrapperStyled>
        {chatDetailState.isLoading ||
        strangerUserState.isLoading ||
        conversation == null ? (
          <LoadingSpinner />
        ) : (
          renderMainContent()
        )}
      </ChatDetailWrapperStyled>
    </MasterComponent>
  );
};

export default ChatDetailPage;
export const ChatDetailPageRoute = "/chatDetail/:id";
