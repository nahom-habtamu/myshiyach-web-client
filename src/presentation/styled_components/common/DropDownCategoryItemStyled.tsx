import styled from "styled-components";

const CategoryItemsWrapperStyled = styled.div`
    margin-left: 55px;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;

    @media (max-width: 500px) {
        margin-left: 15px;
        margin-top: 20px;
        gap: 30px;
    }
`;

const CategoryDropDownButtonStyled = styled.div<{ isActive: boolean }>`
    font-size: 20px;
    color: ${(props) => (props.isActive ? "black" : "grey")};
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
    border-bottom: 1px solid
        ${(props) => (props.isActive ? "black" : "transparent")};
    padding-bottom: 2px;
    margin: 0;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 1400px) {
        font-size: 17px;  
    }

    @media (max-width: 1200px) {
        font-size: 16px;  
    }

    @media (max-width: 1000px) {
        font-size: 14px;  
    }
`;

const CategoryDropDownContentStyled = styled.div<{show: boolean}>`
    display: ${props => props.show ? 'block' : 'none'};
    cursor: ${props => props.show ? 'pointer' : 'normal'};
    position: absolute;
    background-color: #f9f9f9;
    max-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;


const CategoryDropDownItemStyled = styled.div`
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
   
    :hover {
        background-color: #ddd;
    }

    @media (max-width: 1000px) {
        padding: 6px 8px;
        font-size: 12px;
    }
`;

const CategoryItemDropDownWrapperStyled = styled.div`
    float: left;
    overflow: hidden;
`;



export {
    CategoryItemsWrapperStyled,
    CategoryDropDownButtonStyled,
    CategoryItemDropDownWrapperStyled,
    CategoryDropDownItemStyled,
    CategoryDropDownContentStyled
}