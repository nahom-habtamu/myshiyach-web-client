import styled from "styled-components";
import { PRIMARY_COLOR, PRIMARY_LIGHT_COLOR } from "../../constants/colors";

const PostConfirmPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  gap: 15px;
  margin: 0 auto;
  padding-bottom: 100px;
  
  @media (max-width: 1200px) {
    width: 90%;
    gap: 20px;

  }

  @media (max-width: 900px) {
    width: 100%;
    gap: 25px;
  }
`;

const PostConfirmPageImageStyled = styled.img`
  margin-top: 15px;
  width: 250px;
  height: 250px;
  object-fit: center center;
`

const PostConfirmPageAdPlacedTextStyled = styled.div`
  font-size: 35px;
  font-weight: bold;
`

const PostConfirmPageSuccessTextStyled = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: gray;
  width: 50%;
  text-align: center;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

const PostConfirmPageSuccessPhoneNumberTextStyled = styled.div`
  font-size: 22px;
  color: ${PRIMARY_COLOR};
`

const PostConfirmPageSuccessBackToHomeButtonStyled = styled.button`
  font-size: 17px;
  background: ${PRIMARY_COLOR};
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  margin-top: 13px;

  :hover {
    background: teal;
    cursor: pointer;
  }
`

export {
    PostConfirmPageWrapperStyled,
    PostConfirmPageImageStyled,
    PostConfirmPageAdPlacedTextStyled,
    PostConfirmPageSuccessTextStyled,
    PostConfirmPageSuccessPhoneNumberTextStyled,
    PostConfirmPageSuccessBackToHomeButtonStyled
}