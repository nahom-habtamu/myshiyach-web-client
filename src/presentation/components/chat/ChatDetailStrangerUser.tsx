import { useAppSelector } from "../../../store/storeHooks";
import {
  ChatDetailStrangerUserAvatarStyled,
  ChatDetailStrangerUserNameStyled,
  ChatDetailStrangerUserWrapperStyled,
} from "../../styled_components/chat/ChatDetailComponentsStyled";

const ChatDetailStrangerUser = () => {
  const strangerUserState = useAppSelector((state) => state.getStrangerUser);

  const buildAvatarContent = () => {
    let fullName = strangerUserState.user?.fullName;
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
        {strangerUserState.user?.fullName ?? ""}
      </ChatDetailStrangerUserNameStyled>
    </ChatDetailStrangerUserWrapperStyled>
  );
};

export default ChatDetailStrangerUser;
