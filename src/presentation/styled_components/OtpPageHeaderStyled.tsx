import styled from "styled-components";
import { PRIMARY_COLOR } from "../constants/colors";

const OtpPageHeaderStyled = styled.div`
  text-align: center;
  font-size: 22px;
  margin-top: 100px;
  letter-spacing: 0.2px;
  color : grey;
`;

const OtpPagePhoneNumberStyled = styled.div`
  text-align: center;
  font-size: 28px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

export { OtpPageHeaderStyled, OtpPagePhoneNumberStyled };
