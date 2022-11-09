import styled from "styled-components";

const RecommendedItemsSectionWrapperStyled = styled.div``;

const RecommendedItemsTextStyled = styled.div`
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin-block: 15px;
`;

const RecommendedItemsWrapperStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 1);
  }
`;

const RecommendedItemWrapperStyled = styled.div`
  width: 300px;
  height: 250px;
  display: inline-block;
  margin-right: 45px;
  padding-bottom: 20px;
`;

const RecommendedItemColumnStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecommendedItemTimeLabelStyled = styled.div`
  font-size: 15px;
  color: lightgray;
`;

const RecommendedItemImageStyled = styled.img`
  width: 100%;
  height: 80%;
  object-fit: center center;
`;

const RecommendedItemTitleStyled = styled.div`
  font-size: 20px;
  color: black;
`;

export {
  RecommendedItemsSectionWrapperStyled,
  RecommendedItemsTextStyled,
  RecommendedItemsWrapperStyled,
  RecommendedItemWrapperStyled,
  RecommendedItemColumnStyled,
  RecommendedItemImageStyled,
  RecommendedItemTitleStyled,
  RecommendedItemTimeLabelStyled,
};
