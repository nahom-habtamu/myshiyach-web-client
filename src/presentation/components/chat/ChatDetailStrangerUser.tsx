import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailStrangerUserAvatarStyled,
  ChatDetailStrangerUserNameStyled,
  ChatDetailStrangerUserWrapperStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

const ChatDetailStrangerUser = () => {
  const chatDetailState = useAppSelector((state) => state.getChatDetail);

  const buildAvatarContent = () => {
    let fullName = chatDetailState.result?.strangerUser.fullName;
    if (fullName) {
      return fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
    }
  };

  return (
    <ChatDetailStrangerUserWrapperStyled>
      <ChatDetailStrangerUserAvatarStyled>
        {buildAvatarContent()}
      </ChatDetailStrangerUserAvatarStyled>
      <ChatDetailStrangerUserNameStyled>
        {chatDetailState.result?.strangerUser.fullName ?? ""}
      </ChatDetailStrangerUserNameStyled>
    </ChatDetailStrangerUserWrapperStyled>
  );
};

export default ChatDetailStrangerUser;
