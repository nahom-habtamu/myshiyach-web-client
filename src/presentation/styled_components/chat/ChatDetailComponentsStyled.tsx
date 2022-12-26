import styled, { keyframes } from "styled-components";
import {
  DEEP_ORANGE_COLOR,
  LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";

const ChatDetailWrapperStyled = styled.div`
  width: 100%;
  margin: 0px auto;
  background: white;
  position: relative;
  padding-bottom: 25px;
`;

const ChatDetailHeaderWrapperStyled = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const ChatDetailHeaderOneStyled = styled.div`
  font-size: 35px;
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

const ChatDetailHeaderTwoStyled = styled.div`
  font-size: 20px;
  color: grey;
`;

const ChatDetailStrangerUserWrapperStyled = styled.div`
  width: 95%;
  height: 60px;
  border-block: 0.5px solid lightgray;
  margin: 5px auto;
  display: flex;
  gap: 15px;
  align-items: center;
  
  :hover {
    border-size: 1.5px;
    cursor: pointer;
    background: ${LIGHT_GRAY_COLOR}
  }
`;

const ChatDetailStrangerUserAvatarStyled = styled.div`
  width: 55px;
  height: 55px;
  text-align: center;
  border-radius: 20px;
  background: ${DEEP_ORANGE_COLOR};
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 55px;
`;

const ChatDetailStrangerUserNameStyled = styled.div`
  color: grey;
  font-size: 20px;
  text-transform: capitalize;
`;

const ChatDetailBubblesWrapperStyled = styled.div`
  width: 95%;
  height: 340px;
  overflow: auto;
  margin: 25px auto;
  position: relative;
`;

const ChatDetailBubbleItemWrapperStyled = styled.div<{
  leftBubble: boolean;
}>`
  width: 90%;
  display: flex;
  justify-content: ${(props) => (props.leftBubble ? "flex-start" : "flex-end")};
  margin: 15px auto;
`;

const ChatDetailBubbleItemStyled = styled.div<{ leftBubble: boolean }>`
  width: fit-content;
  max-width: 45%;
  padding: 25px 25px;
  text-align: center;
  background: ${(props) =>
    props.leftBubble ? PRIMARY_COLOR : LIGHT_GRAY_COLOR};
  color: ${(props) => (props.leftBubble ? "white" : "black")};
  border-radius: ${(props) =>
    props.leftBubble ? "25px 25px 0px 25px" : "25px 25px 25px 0px"};
  font-size: 18px;
  position: relative;

  @media (max-width: 900px) {
    font-size: 16px;
    max-width: 65%;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    max-width: 75%;
  }
`;

const ChatDetailBubbleImageWrapperStyled = styled.div`
  width: 400px;
  height: 350px;
  position: relative;

  @media (max-width: 900px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 200px;
  }
`;

const ChatDetailBubbleImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center center;
`;

const ChatDetailBubbleTimeIndicatorStyled = styled.div`
  padding: 2px;
  background: black;
  color: white;
  font-size: 10px;
  position: absolute;
  right: 15px;
  bottom: 5px;
  border-radius: 3px;
`;

const ChatDetailDateIndicatorStyled = styled.div`
  margin-block: 10px;
  text-align: center;
  font-size: 15px;
  color: black;
  font-style: italic;
`;

const ChatDetailAddMessageWrapperStyled = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  margin: 0 auto;
  gap: 25px;
  color: black;
  align-items: center;
  
  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

`;

const ChatDetailAddMessageInputStyled = styled.input`
  padding-left: 25px;
  font-size: 20px;
  width: 80%;
  height: 100%;
  border: 2px solid gray;
  border-radius: 15px;
  outline: none;

  :focus, :hover {
    border-color: darkgray;
    border-radius: 10px;
  }
`;

const ChatDetailAddMessageActionButtonWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  transition: all 0.4s ease;

  :hover {
    background: darkgray;
  }
`;

const hideAnimation = keyframes`
  to {
    visibility: hidden;
    width: 0;
    height: 0;
  };
`;

const ChatDetailGoToBottomButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: black;
  color: white;
  position: absolute;
  bottom: 150px;
  right: 80px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${hideAnimation} 0s ease-in 2s;
  animation-fill-mode: forwards;

  @media (max-width: 900px) {
    width: 45px;
    height: 45px;
    bottom: 180px;
    right: 70px;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
    bottom: 90px;
    right: 30px;
  }
`;

export {
  ChatDetailWrapperStyled,
  ChatDetailHeaderWrapperStyled,
  ChatDetailHeaderOneStyled,
  ChatDetailHeaderTwoStyled,
  ChatDetailStrangerUserWrapperStyled,
  ChatDetailStrangerUserAvatarStyled,
  ChatDetailStrangerUserNameStyled,
  ChatDetailBubblesWrapperStyled,
  ChatDetailBubbleItemWrapperStyled,
  ChatDetailBubbleItemStyled,
  ChatDetailBubbleImageWrapperStyled,
  ChatDetailBubbleImageStyled,
  ChatDetailBubbleTimeIndicatorStyled,
  ChatDetailAddMessageWrapperStyled,
  ChatDetailAddMessageInputStyled,
  ChatDetailAddMessageActionButtonWrapper,
  ChatDetailDateIndicatorStyled,
  ChatDetailGoToBottomButton,
};
