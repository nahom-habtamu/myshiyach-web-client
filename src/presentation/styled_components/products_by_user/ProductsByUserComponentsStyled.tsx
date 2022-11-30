import styled from "styled-components";
import { DEEP_ORANGE_COLOR, PRIMARY_COLOR } from "../../constants/colors";

const ProductsByUserWrapperStyled = styled.div`
  width: 60%;
  height: 100%;
  margin: 25px auto;
  background: white;
`;

const UserInformationWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
`;

const UserInformationAvatarStyled = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  text-align: center;
  text-transform: uppercase;
  line-height: 80px;
  font-size: 30px;
  color: white;
  background: ${DEEP_ORANGE_COLOR};
`;

const UserInformationNameStyled = styled.div`
  font-size: 23px;
  text-align: center;
  text-transform: capitalize;
  color: black;
`;

const UserInformationActionsWrapperStyled = styled.div`
  display: flex;
  gap: 25px;
`;

const UserInformationPhoneNumberStyled = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 8px 15px;
  background: white;
  border-radius: 15px;
  color: ${PRIMARY_COLOR};
  border: 1px solid ${PRIMARY_COLOR};
`;

const UserInformationSendMessageStyled = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 8px 15px;
  border-radius: 15px;
  background: ${PRIMARY_COLOR};
  color: white;
`;

const ProductsByUserLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export {
  ProductsByUserWrapperStyled,
  UserInformationWrapperStyled,
  UserInformationAvatarStyled,
  UserInformationNameStyled,
  UserInformationActionsWrapperStyled,
  UserInformationPhoneNumberStyled,
  UserInformationSendMessageStyled,
  ProductsByUserLabelStyled,
};
