import styled from "styled-components";
import { PINK_COLOR } from "../../constants/colors";

export const FilterCategoryWrapperStyled = styled.div<{ isSubCat: boolean }>`
    width: 100%;
    background: white;
    overflow: scroll;
    display: ${props => props.isSubCat ? 'none' : 'flex'};
    font-weight: 500;
    margin-bottom: 10px;
    
    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 800px) {
        display: flex;
        justify-content: space-evenly;
    }
`;

export const FilterCategoryItemTitleAndContentWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilterCategoryItemTitleStyled = styled.div<{ active: boolean }>`
    font-size: 16px;
    color: ${props => props.active ? PINK_COLOR : '#505050'};
    letter-spacing: 1px;
    cursor: pointer;
    line-height: 15px;
    padding: 15px 30px;
    
    @media (min-width: 800px) {
        justify-content: space-evenly;
    }
`;

export const FilterCategoryItemContentWrapper = styled.div<{ active: boolean }>`
    display: none;

    @media (min-width: 800px) {
        display: flex;
        height: fit-content;
        opacity: ${props => props.active ? '100' : '0'};
        flex-direction: column;
        gap: 5px;
        background: white;
        padding-bottom: 10px;
    }
`;

export const FilterCategoryContentItemTextStyled = styled.div<{ active: boolean }>`
    font-style: italic;
    padding: 5px;
    color: ${props => props.active ? 'black' : 'gray'};
    :hover {
        cursor: pointer;
        color: black;
    }
`;

export const FilterCategoryResponsiveModalStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 5;
    position: absolute;
    top: -130px;
    left: 0px;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        display: none;        
    }
`;

export const FilterCategoryResponsiveModalTitleWrapperStyled = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
`;

export const FilterCategoryResponsiveModalTitleStyled = styled.div`
    font-size: 16px;
`;

export const FilterCategoryResponsiveModalIconStyled = styled.div`
    color: black;
`;

export const FilterCategorySubCategoryWrapperStyled = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FilterCategorySubCategoryItemStyled = styled.div<{ active: boolean }>`
    color: ${props => props.active ? 'black' : 'grey'};
    font-size: 17px;
`;