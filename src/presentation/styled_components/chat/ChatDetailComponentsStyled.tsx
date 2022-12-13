import styled from "styled-components";
import {
  DEEP_ORANGE_COLOR,
  LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";

const ChatDetailWrapperStyled = styled.div`
  width: 100%;
  height: 900px;
  margin: 0px auto;
  background: white;
  position: relative;
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
  width: 90%;
  height: 650px;
  overflow: auto;
  margin: 25px auto;
  position: relative;
`;

const ChatDetailBubbleItemWrapperStyled = styled.div<{
  leftBubble: boolean;
}>`
  width: 80%;
  display: flex;
  justify-content: ${(props) => (props.leftBubble ? "flex-start" : "flex-end")};
  margin: 15px;
`;

const ChatDetailBubbleItemStyled = styled.div<{ leftBubble: boolean }>`
  padding: 25px 50px;
  background: ${(props) =>
    props.leftBubble ? PRIMARY_COLOR : LIGHT_GRAY_COLOR};
  color: ${(props) => (props.leftBubble ? "white" : "black")};
  border-radius: ${(props) =>
    props.leftBubble ? "25px 25px 0px 25px" : "25px 25px 25px 0px"};
  font-size: 18px;
  position: relative;
`;

const ChatDetailBubbleImageWrapperStyled = styled.div`
  width: 250px;
  height: 200px;
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

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }

`;

const ChatDetailAddMessageInputStyled = styled.input`
  padding-left: 25px;
  font-size: 20px;
  width: 80%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  outline: none;
`;

const ChatDetailGoToBottomButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: black;
  color: white;
  position: absolute;
  bottom: 200px;
  right: 100px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
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
  ChatDetailDateIndicatorStyled,
  ChatDetailGoToBottomButton,
};
