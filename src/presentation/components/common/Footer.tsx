import { BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrAppleAppStore, GrGooglePlay } from "react-icons/gr";
import { ICON_SIZE_LARGE } from "../../constants/sizes";
import {
    FooterCommunityContentItemStyled,
    FooterCommunityContentWrapperStyled,
    FooterCommunityTitleStyled,
    FooterCommunityWrapperStyled,
    FooterComponentWrapperStyled,
    FooterDownloadTabButtonIconStyled,
    FooterDownloadTabButtonStyled,
    FooterDownloadTabButtonsWrapperStyled,
    FooterDownloadTabButtonTextOneStyled,
    FooterDownloadTabButtonTextTwoStyled,
    FooterDownloadTabTitleStyled,
    FooterDownloadTabWrapperStyled,
    FooterDownloadTabWrapperWithBackgroundStyled,
    FooterLinkItemContentItemStyled,
    FooterLinkItemContentWrapperStyled,
    FooterLinkItemStyled,
    FooterLinkItemTitleStyled,
    FooterLinksWrapperStyled,
    FooterPrivacyPolicyItemStyled,
    FooterPrivacyPolicyWrapperStyled
} from "../../styled_components/common/FooterComponentsStyled";
import { ContactUsPageRoute } from "../../pages/ContactUsPage";
import { useHistory } from "react-router-dom";

const Footer = () => {
    const history = useHistory();
    return (
        <FooterComponentWrapperStyled>
            <FooterDownloadTabWrapperWithBackgroundStyled>
                <FooterDownloadTabWrapperStyled>
                    <FooterDownloadTabTitleStyled>
                        Get the app for the best MyShiyach experience
                    </FooterDownloadTabTitleStyled>
                    <FooterDownloadTabButtonsWrapperStyled>
                        <FooterDownloadTabButtonStyled>
                            <FooterDownloadTabButtonTextOneStyled>COMING SOON</FooterDownloadTabButtonTextOneStyled>
                            <FooterDownloadTabButtonTextTwoStyled>App Store</FooterDownloadTabButtonTextTwoStyled>
                            <FooterDownloadTabButtonIconStyled>
                                <GrAppleAppStore size={ICON_SIZE_LARGE} />
                            </FooterDownloadTabButtonIconStyled>
                        </FooterDownloadTabButtonStyled>
                        <a
                            style={{ textDecoration: "none" }}
                            href="https://play.google.com/store/apps/details?id=com.nahomhabtamu.mnale_client"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FooterDownloadTabButtonStyled>
                                <FooterDownloadTabButtonTextOneStyled>GET IT ON</FooterDownloadTabButtonTextOneStyled>
                                <FooterDownloadTabButtonTextTwoStyled>Google Play</FooterDownloadTabButtonTextTwoStyled>
                                <FooterDownloadTabButtonIconStyled>
                                    <GrGooglePlay size={ICON_SIZE_LARGE} />
                                </FooterDownloadTabButtonIconStyled>
                            </FooterDownloadTabButtonStyled>
                        </a>
                    </FooterDownloadTabButtonsWrapperStyled>
                </FooterDownloadTabWrapperStyled>
            </FooterDownloadTabWrapperWithBackgroundStyled>
            <FooterLinksWrapperStyled>
                <FooterLinkItemStyled>
                    <FooterLinkItemTitleStyled>About Us</FooterLinkItemTitleStyled>
                    <FooterLinkItemContentWrapperStyled>
                        <FooterLinkItemContentItemStyled>About MyShiyach</FooterLinkItemContentItemStyled>
                        <FooterLinkItemContentItemStyled>Advertise With Us</FooterLinkItemContentItemStyled>
                    </FooterLinkItemContentWrapperStyled>
                </FooterLinkItemStyled>
                <FooterLinkItemStyled>
                    <FooterLinkItemTitleStyled>Help & Contact</FooterLinkItemTitleStyled>
                    <FooterLinkItemContentWrapperStyled>
                        <FooterLinkItemContentItemStyled>FAQs</FooterLinkItemContentItemStyled>
                        <a
                            style={{ textDecoration: "none" }}
                            href="http://167.172.148.80:9050"
                            target="_blank"
                            rel="noopener noreferrer">

                            <FooterLinkItemContentItemStyled>Policies</FooterLinkItemContentItemStyled>
                        </a>
                        <FooterLinkItemContentItemStyled onClick={() => history.push(ContactUsPageRoute)}>
                            Contact Us
                        </FooterLinkItemContentItemStyled>
                    </FooterLinkItemContentWrapperStyled>
                </FooterLinkItemStyled>
            </FooterLinksWrapperStyled>
            <FooterCommunityWrapperStyled>
                <FooterCommunityTitleStyled>Join MyShiyach Community</FooterCommunityTitleStyled>
                <FooterCommunityContentWrapperStyled>
                    <FooterCommunityContentItemStyled>
                        <BsTwitter />
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsInstagram />
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsTelegram />
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsFacebook />
                    </FooterCommunityContentItemStyled>
                    <FooterCommunityContentItemStyled>
                        <BsYoutube />
                    </FooterCommunityContentItemStyled>
                </FooterCommunityContentWrapperStyled>
            </FooterCommunityWrapperStyled>
            <FooterPrivacyPolicyWrapperStyled>
                <FooterPrivacyPolicyItemStyled>© Copyright 2000-2023 MyShiyach.com Limited. All rights reserved.</FooterPrivacyPolicyItemStyled>
                <FooterPrivacyPolicyItemStyled>MyShiyach.com Limited is an Appointed Representative of Compare The Market Limited who is authorised and regulated by the Financial Conduct Authority.</FooterPrivacyPolicyItemStyled>
            </FooterPrivacyPolicyWrapperStyled>
        </FooterComponentWrapperStyled>
    );
}

export default Footer;