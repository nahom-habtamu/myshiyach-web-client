import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const HomePageLoadMoreButtonStyled = styled.div`
  width: fit-content;
  color: ${PRIMARY_COLOR};
  font-size: 20px;
  border: 1px solid ${PRIMARY_COLOR};
  background: white;
  transition: all 0.2s ease-in-out;
  cursor : pointer;
  padding: 15px;
    :hover {
        color: white;
        border: 1px solid ${PRIMARY_COLOR};
        background: ${PRIMARY_COLOR};
    }

`;

const HomePageLoadMoreButtonWrapperStyled = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export { HomePageLoadMoreButtonWrapperStyled, HomePageLoadMoreButtonStyled };
