import { useEffect, useState } from "react";
import { BiImages, BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { addImageMessage } from "../../core/action_creators/chat/add_image_message_action_creators";
import { addTextMessage } from "../../core/action_creators/chat/add_text_message_action_creators";
import { getChatDetail } from "../../core/action_creators/chat/get_chat_detail_action_creators";
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
  ChatDetailWrapperStyled,
} from "../styled_components/chat/ChatDetailComponentsStyled";
import { ChatListPageRoute } from "./ChatListPage";

const ChatDetailPage = () => {
  let { id } = useParams<any>();

  const [messageContent, setMessageContent] = useState("");
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);
  const [pickedImages, setPickedImages] = useState<File[]>([]);

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

  const handleSendingTextMessage = () => {
    const message: Message = {
      content: messageContent,
      createdDateTime: new Date().toISOString(),
      isSeen: false,
      recieverId: chatDetailState.result!.strangerUser._id,
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
        recieverId: chatDetailState.result!.strangerUser._id,
        senderId: loginState.result.currentUser!._id,
        type: "IMAGE",
      };
      dispatch(addImageMessage({ conversationId: id, message, image }));
    }
  };

  const renderMainContent = () => (
    <>
      <ChatDetailStrangerUser />
      <ChatDetailMessagesContainer />
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
        {chatDetailState.isLoading ? <LoadingSpinner /> : renderMainContent()}
      </ChatDetailWrapperStyled>
    </MasterComponent>
  );
};

export default ChatDetailPage;
export const ChatDetailPageRoute = "/chatDetail/:id";
