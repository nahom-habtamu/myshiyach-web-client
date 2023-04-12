import MasterComponent from "../components/common/MasterComponent"
import useScrollToTop from "../custom_hooks/useScrollToTop";
import { ContactUsAboutTitleStyled, ContactUsAboutValueStyled, ContactUsAboutWrapperStyled, ContactUsAddressKeyStyled, ContactUsAddressKeyValueWrapperStyled, ContactUsAddressLabelStyled, ContactUsAddressValueStyled, ContactUsAddressWrapperStyled, ContactUsEmailAndCallItemStyled, ContactUsEmailAndCallItemTitleStyled, ContactUsEmailAndCallItemValueStyled, ContactUsEmailAndCallWrapperStyled, ContactUsLabelStyled, ContactUsWrapperStyled } from "../styled_components/contact_us/ContactUsPageComponentsStyle";

const ContactUsPage = () => {
    useScrollToTop();

    const renderContactUsKeyValue = (title: string, value: string) => {
        return <ContactUsEmailAndCallItemStyled>
            <ContactUsEmailAndCallItemTitleStyled>
                {title}
            </ContactUsEmailAndCallItemTitleStyled>
            <ContactUsEmailAndCallItemValueStyled>
                {value}
            </ContactUsEmailAndCallItemValueStyled>
        </ContactUsEmailAndCallItemStyled>;
    }

    const renderAboutUsKeyValue = (title: string, value?: string) => {
        return <ContactUsAboutWrapperStyled>
            <ContactUsAboutTitleStyled>{title}</ContactUsAboutTitleStyled>
            <ContactUsAboutValueStyled>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis eligendi,
                deserunt labore a, aliquam consequatur explicabo vel possimus, necessitatibus repellat
                iste architecto quo similique qui obcaecati dolor inventore quia?
            </ContactUsAboutValueStyled>
        </ContactUsAboutWrapperStyled>;
    }


    const renderAddressKeyValue = (title: string, value: string) => {
        return <ContactUsAddressKeyValueWrapperStyled>
            <ContactUsAddressKeyStyled>{title}</ContactUsAddressKeyStyled>
            <ContactUsAddressValueStyled>{value}</ContactUsAddressValueStyled>
        </ContactUsAddressKeyValueWrapperStyled>;
    }

    return (
        <MasterComponent activePage={ContactUsPageRoute} hideSearchBar={true}>
            <ContactUsWrapperStyled>
                <ContactUsLabelStyled>Contact Us</ContactUsLabelStyled>
                <ContactUsEmailAndCallWrapperStyled>
                    {renderContactUsKeyValue('Email', 'nahomhab2626@gmail.com')}
                    {renderContactUsKeyValue('Call Us', '+251926849888')}
                </ContactUsEmailAndCallWrapperStyled>
                {renderAboutUsKeyValue('About Our Company')}
                {renderAboutUsKeyValue('About Our Product')}
                <ContactUsAddressWrapperStyled>
                    <ContactUsAddressLabelStyled>Address</ContactUsAddressLabelStyled>
                    {renderAddressKeyValue('City', 'Addis Ababa')}
                    {renderAddressKeyValue('Address Line', 'Bole Rwanda')}
                    {renderAddressKeyValue('Specific Address', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quis deleniti ab cum consectetur exercitationem tenetur')}
                </ContactUsAddressWrapperStyled>
            </ContactUsWrapperStyled>
        </MasterComponent>
    )

}

export default ContactUsPage;
export const ContactUsPageRoute = '/contactUs';