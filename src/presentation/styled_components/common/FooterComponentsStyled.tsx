import styled from "styled-components";
import { LIGHT_GRAY_COLOR, PRIMARY_COLOR } from "../../constants/colors";

export const FooterComponentWrapperStyled = styled.div`
    width: 100%;
    background: #3c3241;
    padding-bottom: 50px;
`;

export const FooterDownloadTabWrapperWithBackgroundStyled = styled.div`
    background: ${PRIMARY_COLOR};
`;

export const FooterDownloadTabWrapperStyled = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: left;

    @media (min-width: 800px) {
        width: 60%;
        margin: 15px auto;
    }
`;

export const FooterDownloadTabTitleStyled = styled.div`
    width: 55%;
    font-size: 18px;
    color: white;
    padding: 18px;
    font-weight: 300;
    line-height: 20px;

    @media (min-width: 500px) {
        width: 40%;
    }

    @media (min-width: 800px) {
        width: 50%;
    }
    
    @media (min-width: 1000px) {
        width: 40%;
    }
    
    @media (min-width: 1200px) {
        width: 35%;
    }
    
    @media (min-width: 1400px) {
        width: 30%;
    }
`;

export const FooterDownloadTabButtonsWrapperStyled = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 18px;
`;

export const FooterDownloadTabButtonStyled = styled.div`
    width: 140px;
    height: 45px;
    background: black;
    border: 1px solid ${LIGHT_GRAY_COLOR};
    border-radius: 5px;
    color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const FooterDownloadTabButtonTextOneStyled = styled.div`
    margin-left: 40px;
    font-size: 12px;
`;

export const FooterDownloadTabButtonTextTwoStyled = styled.div`
    margin-left: 40px;
    font-size: 17px;
`;

export const FooterDownloadTabButtonIconStyled = styled.div`
    position: absolute;
    left: 3px;
    width: 50px;
    height: 100%;
`;


export const FooterLinksWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px; 
    width: 80%;
    margin: 25px auto;

    @media (min-width: 800px) {
        width: 60%;
        gap: 50px; 
        flex-direction: row;
    }
`;

export const FooterLinkItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px; 
`;

export const FooterLinkItemTitleStyled = styled.div`
    font-size: 18px;
    color: #b1adb3;
    font-weight: 600;
`;

export const FooterLinkItemContentWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
`;

export const FooterLinkItemContentItemStyled = styled.div`
    color: #99CCDF;
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;

    :active {
        background: lightblue;
        color: white;
    }
`;

export const FooterCommunityWrapperStyled = styled.div`
    border-block: 1px solid white;
    width: 95%;
    margin: 15px auto;

    @media (min-width: 800px) {
        width: 60%;
    }
`;

export const FooterCommunityTitleStyled = styled.div`
    text-align: center;
    font-size: 18px;
    color: #b1adb3;
    font-weight: 600;
    padding-block: 10px;
`;

export const FooterCommunityContentWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-block: 10px;
`;

export const FooterCommunityContentItemStyled = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterPrivacyPolicyWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    @media (min-width: 800px) {
        width: 60%;
        gap: 25px;
    }
`;

export const FooterPrivacyPolicyItemStyled = styled.div`
    font-size: 17px;
    color: #b1adb3;
    font-weight: 400;
`;