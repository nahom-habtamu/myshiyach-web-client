import { useEffect, useRef, useState } from "react";
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
import MasterComponent from "../components/common/MasterComponent";
import { ICON_SIZE_MEDIUM } from "../constants/sizes";
import {
  ChatDetailAddMessageActionButtonWrapper,
  ChatDetailAddMessageInputStyled,
  ChatDetailAddMessageWrapperStyled,
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
  const chatContainerRef = useRef<any>(null);

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

  function scrollToBottom() {
    const lastItem = chatContainerRef.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  const handleSendingTextMessage = () => {
    if (messageContent.length > 0) {
      const message: Message = {
        content: messageContent,
        createdDateTime: new Date().toISOString(),
        isSeen: false,
        recieverId: strangerUserState.user?._id ?? "",
        senderId: loginState.result.currentUser!._id,
        type: "TEXT",
      };
      setMessageContent("");
      dispatch(addTextMessage({ conversationId: id, message }));
    }
    scrollToBottom();
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
    scrollToBottom();
  };

  const renderMainContent = () => (
    <>
      <ChatDetailStrangerUser />
      <ChatDetailMessagesContainer conversation={conversation!} chatContainerRef={chatContainerRef} />
      <ChatDetailAddMessageWrapperStyled>
        <ChatDetailAddMessageInputStyled
          type="text"
          placeholder="Send Message"
          onChange={(e) => setMessageContent(e.target.value)}
          value={messageContent}
        />
        <ChatDetailAddMessageActionButtonWrapper onClick={() => setIsSendMessageModalOpen(true)}>
          <BiImages size={ICON_SIZE_MEDIUM} />
        </ChatDetailAddMessageActionButtonWrapper>

        <ChatDetailAddMessageActionButtonWrapper onClick={handleSendingTextMessage} >
          <BiSend size={ICON_SIZE_MEDIUM} />
        </ChatDetailAddMessageActionButtonWrapper>
        {isSendMessageModalOpen && (
          <ChatDetailImageMessageSendingModal
            onClose={() => setIsSendMessageModalOpen(false)}
            onImagePicked={(_: any, pickedImages: File[]) => {
              setPickedImages(pickedImages);
            }}
            onSubmit={() => {
              handleSendingImageMessage();
              setIsSendMessageModalOpen(false);
            }}
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
