import {
  UserInformationActionsWrapperStyled,
  UserInformationAvatarStyled,
  UserInformationNameStyled,
  UserInformationPhoneNumberStyled,
  UserInformationSendMessageStyled,
  UserInformationWrapperStyled,
} from "../../styled_components/common/UserInformationComponentsStyled";

type UserInformationProps = {
  phoneNumber: string | undefined;
  fullName: string | undefined;
  onGoToChatClicked?: Function;
};

const UserInformation = (props: UserInformationProps) => {
  let avatarContent = buildAvatarContent();
  return (
    <UserInformationWrapperStyled>
      <UserInformationAvatarStyled>{avatarContent}</UserInformationAvatarStyled>
      <UserInformationNameStyled>
        {props.fullName ?? ""}
      </UserInformationNameStyled>
      <UserInformationActionsWrapperStyled>
        <UserInformationPhoneNumberStyled>
          {props.phoneNumber ?? ""}
        </UserInformationPhoneNumberStyled>
        {props.onGoToChatClicked != undefined && (
          <UserInformationSendMessageStyled
            onClick={() => props.onGoToChatClicked!()}
          >
            Send Message
          </UserInformationSendMessageStyled>
        )}
      </UserInformationActionsWrapperStyled>
    </UserInformationWrapperStyled>
  );

  function buildAvatarContent() {
    let avatarContent = props.fullName;
    if (avatarContent) {
      if (avatarContent.split(" ").length > 1) {
        avatarContent =
          avatarContent.split(" ")[0][0] + avatarContent.split(" ")[1][0];
      } else {
        avatarContent = avatarContent[0];
      }
    }
    return avatarContent ?? "";
  }
};

export default UserInformation;
