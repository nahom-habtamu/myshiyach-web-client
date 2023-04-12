import styled from "styled-components";
import { LIGHT_GRAY_COLOR, PRIMARY_COLOR } from "../../constants/colors";

const FaqPageWrapperStyled = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background: #F0F0F0;
  margin: 0 auto;
  min-height: 400px;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const FaqLabelStyled = styled.div`
  font-size: 28px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  text-align: center;
  font-weight: 600;
  margin: 15px;
`;

const FaqItemListWrapperStyled = styled.div`
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
`;

const FaqItemWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FaqItemQuestionStyled = styled.div`
  font-size: 20px;
  padding: 10px;
  color: ${PRIMARY_COLOR};
  border: 3px solid ${PRIMARY_COLOR};
  border-radius: 15px;
  background: ${LIGHT_GRAY_COLOR};
`;

const FaqItemAnswerStyled = styled.div`
  font-size: 18px;
  padding: 5px 10px;
  color: black;
`;

export {
    FaqPageWrapperStyled,
    FaqLabelStyled,
    FaqItemListWrapperStyled,
    FaqItemWrapperStyled,
    FaqItemQuestionStyled,
    FaqItemAnswerStyled,
}