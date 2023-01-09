import { BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrAppleAppStore, GrGooglePlay } from "react-icons/gr";
import { ICON_SIZE_LARGE } from "../../constants/sizes";
import { FooterCommunityContentItemStyled, FooterCommunityContentWrapperStyled, FooterCommunityTitleStyled, FooterCommunityWrapperStyled, FooterComponentWrapperStyled, FooterDownloadTabButtonIconStyled, FooterDownloadTabButtonStyled, FooterDownloadTabButtonsWrapperStyled, FooterDownloadTabButtonTextOneStyled, FooterDownloadTabButtonTextTwoStyled, FooterDownloadTabTitleStyled, FooterDownloadTabWrapperStyled, FooterDownloadTabWrapperWithBackgroundStyled, FooterLinkItemContentItemStyled, FooterLinkItemContentWrapperStyled, FooterLinkItemStyled, FooterLinkItemTitleStyled, FooterLinksWrapperStyled, FooterPrivacyPolicyItemStyled, FooterPrivacyPolicyWrapperStyled } from "../../styled_components/common/FooterComponentsStyled";

const Footer = () => {
    return (
        <FooterComponentWrapperStyled>
            <FooterDownloadTabWrapperWithBackgroundStyled>    
                <FooterDownloadTabWrapperStyled>
                    <FooterDownloadTabTitleStyled>
                        Get the app for the best MyShiyach experience
                    </FooterDownloadTabTitleStyled>
                    <FooterDownloadTabButtonsWrapperStyled>
                        <FooterDownloadTabButtonStyled>
                            <FooterDownloadTabButtonTextOneStyled>Download on the</FooterDownloadTabButtonTextOneStyled>
                            <FooterDownloadTabButtonTextTwoStyled>App Store</FooterDownloadTabButtonTextTwoStyled>
                            <FooterDownloadTabButtonIconStyled>
                                <GrAppleAppStore size={ICON_SIZE_LARGE}/>
                            </FooterDownloadTabButtonIconStyled>
                        </FooterDownloadTabButtonStyled>
                        <FooterDownloadTabButtonStyled>
                            <FooterDownloadTabButtonTextOneStyled>GET IT ON</FooterDownloadTabButtonTextOneStyled>
                            <FooterDownloadTabButtonTextTwoStyled>Google Play</FooterDownloadTabButtonTextTwoStyled>
                            <FooterDownloadTabButtonIconStyled>
                                <GrGooglePlay  size={ICON_SIZE_LARGE}/>
                            </FooterDownloadTabButtonIconStyled>
                        </FooterDownloadTabButtonStyled>
                    </FooterDownloadTabButtonsWrapperStyled>
                </FooterDownloadTabWrapperStyled>
            </FooterDownloadTabWrapperWithBackgroundStyled>
            <FooterLinksWrapperStyled>
                <FooterLinkItemStyled>
                    <FooterLinkItemTitleStyled>About Us</FooterLinkItemTitleStyled>
                    <FooterLinkItemContentWrapperStyled>
                        <FooterLinkItemContentItemStyled>About MyShiyach</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Advertise With Us</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Careers</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Media</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Press</FooterLinkItemContentItemStyled>
                    </FooterLinkItemContentWrapperStyled>
                </FooterLinkItemStyled>
                <FooterLinkItemStyled>
                    <FooterLinkItemTitleStyled>Help & Contact</FooterLinkItemTitleStyled>
                    <FooterLinkItemContentWrapperStyled>
                        <FooterLinkItemContentItemStyled>FAQs</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Safety</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Policies</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Contact Us</FooterLinkItemContentItemStyled>
                    </FooterLinkItemContentWrapperStyled>
                </FooterLinkItemStyled>
            </FooterLinksWrapperStyled>
            <FooterCommunityWrapperStyled>
                <FooterCommunityTitleStyled>Join MyShiyach Community</FooterCommunityTitleStyled>
                <FooterCommunityContentWrapperStyled>
                    <FooterCommunityContentItemStyled>
                        <BsTwitter/>
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsInstagram/>
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsTelegram/>
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsFacebook/>
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsYoutube/>
                    </FooterCommunityContentItemStyled>
                </FooterCommunityContentWrapperStyled>
            </FooterCommunityWrapperStyled>
            <FooterPrivacyPolicyWrapperStyled>
                <FooterPrivacyPolicyItemStyled>© Copyright 2000-2023 MyShiyach.com Limited. All rights reserved.</FooterPrivacyPolicyItemStyled>
                <FooterPrivacyPolicyItemStyled>MyShiyach.com Limited is an Appointed Representative of Compare The Market Limited who is authorised and regulated by the Financial Conduct Authority.</FooterPrivacyPolicyItemStyled>
                <FooterPrivacyPolicyItemStyled>MyShiyach.com Limited is an Introducer Appointed Representative of CarMoney Limited who are authorised and regulated by the Financial Conduct Authority, FRN 674094. MyShiyach.com Limited is a credit broker, not a lender. Introductions are limited to motor finance, CarMoney Limited will pay us a fixed commission per paid out deal.</FooterPrivacyPolicyItemStyled>
                <FooterPrivacyPolicyItemStyled>MyShiyach.com Limited is an Introducer Appointed Representative of Zuto Limited who are authorised and regulated by the Financial Conduct Authority, FRN 452589. Zuto Limited is a credit broker, not a lender. Introductions are limited to motor finance.</FooterPrivacyPolicyItemStyled>
                <FooterPrivacyPolicyItemStyled>MyShiyach.com Limited, registered in England and Wales with number 03934849, 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom. VAT No. 345 7692 64.</FooterPrivacyPolicyItemStyled>
            </FooterPrivacyPolicyWrapperStyled>
        </FooterComponentWrapperStyled>
    );
}

export default Footer;