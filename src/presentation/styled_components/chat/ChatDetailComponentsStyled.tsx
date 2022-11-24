import styled from "styled-components";
import {
  DEEP_ORANGE_COLOR,
  LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";

const ChatDetailWrapperStyled = styled.div`
  width: 1000px;
  height: 900px;
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
  padding: 15px 30px;
  background: ${(props) =>
    props.leftBubble ? PRIMARY_COLOR : LIGHT_GRAY_COLOR};
  color: ${(props) => (props.leftBubble ? "white" : "black")};
  border-radius: ${(props) =>
    props.leftBubble ? "25px 25px 0px 25px" : "25px 25px 25px 0px"};
  font-size: 18px;
`;

const ChatDetailBubbleImageStyled = styled.img`
  width: 250px;
  height: 200px;
  object-fit: center center;
`;

const ChatDetailAddMessageWrapperStyled = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  margin: 0 auto;
  gap: 25px;
  color: black;
  align-items: center;
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
  ChatDetailAddMessageWrapperStyled,
  ChatDetailAddMessageInputStyled,
};
