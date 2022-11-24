import styled from "styled-components";
import {
  DEEP_ORANGE_COLOR,
  LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";

const ChatDetailWrapperStyled = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 25px auto;
  background: white;
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
  height: 80px;
  border-block: 0.5px solid gray;
  margin: 20px auto;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ChatDetailStrangerUserAvatarStyled = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 22px;
  background: ${DEEP_ORANGE_COLOR};
  color: white;
  text-transform: uppercase;
  font-size: 23px;
  line-height: 68px;
`;

const ChatDetailStrangerUserNameStyled = styled.div`
  color: grey;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`;

const ChatDetailBubblesWrapperStyled = styled.div`
  width: 70%;
  height: 650px;
  overflow: auto;
  margin: 25px auto;
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
  padding: 15px 25px;
  background: ${(props) =>
    props.leftBubble ? PRIMARY_COLOR : LIGHT_GRAY_COLOR};
  color: ${(props) => (props.leftBubble ? "white" : "black")};
  border-radius: ${(props) =>
    props.leftBubble ? "25px 25px 0px 25px" : "25px 25px 25px 0px"};
  font-size: 15px;
`;

const ChatDetailBubbleImageStyled = styled.img`
  width: 250px;
  height: 200px;
  object-fit: center center;
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
  ChatDetailBubbleImageStyled,
};
