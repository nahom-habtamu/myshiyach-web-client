import ReactDOM from "react-dom";
import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailImageSendingModalActionButtonStyled,
  ChatDetailImageSendingModalActionButtonsWrapperStyled,
  ChatDetailImageSendingModalStyled,
} from "../../styled_components/chat/ChatDetailImageSendingModalStyled";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import ImagePicker from "../common/ImagePicker";
import LoadingSpinner from "../common/LoadingSpinner";

type ImageSendingModalProps = {
  onClose: Function;
  onSubmit: Function;
  onImagePicked: Function;
  pickedImages: File[];
};

const ChatDetailImageMessageSendingModal = (props: ImageSendingModalProps) => {
  const imageMessageSendingState = useAppSelector(
    (state) => state.addImageMessage
  );

  return ReactDOM.createPortal(
    <>
      <ModalWrapperShadowStyled onClick={() => props.onClose()} />
      <ChatDetailImageSendingModalStyled>
        <h1>Pick Images To Send</h1>
        <ImagePicker initialImages={[]} onImagePicked={props.onImagePicked} />
        {props.pickedImages.length > 0 && (
          <ChatDetailImageSendingModalActionButtonsWrapperStyled>
            <ChatDetailImageSendingModalActionButtonStyled
              onClick={() => props.onClose()}
            >
              Close
            </ChatDetailImageSendingModalActionButtonStyled>

            {imageMessageSendingState.isLoading ? (
              <div style={{ width: "100px", height: "40px" }}>
                <LoadingSpinner size={40} />
              </div>
            ) : (
              <ChatDetailImageSendingModalActionButtonStyled
                onClick={() => props.onSubmit()}
              >
                Send Message
              </ChatDetailImageSendingModalActionButtonStyled>
            )}
          </ChatDetailImageSendingModalActionButtonsWrapperStyled>
        )}
      </ChatDetailImageSendingModalStyled>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default ChatDetailImageMessageSendingModal;
