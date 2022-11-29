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
      let splittedFullName = fullName.split(" ");
      if (splittedFullName && splittedFullName.length > 1) {
        return splittedFullName[0][0] + splittedFullName[1][0];
      } else {
        return fullName;
      }
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
