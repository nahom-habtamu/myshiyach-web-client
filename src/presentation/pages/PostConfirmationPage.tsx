import { useHistory } from 'react-router-dom';
import MasterComponent from '../components/common/MasterComponent';
import { PostConfirmPageAdPlacedTextStyled, PostConfirmPageImageStyled, PostConfirmPageSuccessBackToHomeButtonStyled, PostConfirmPageSuccessPhoneNumberTextStyled, PostConfirmPageSuccessTextStyled, PostConfirmPageWrapperStyled } from '../styled_components/post_confirm/PostConfirmPageComponentsStyled';
import { HomePageRoute } from './HomePage';

const PostConfirmationPage = () => {
    const history = useHistory();
    return (
        <MasterComponent activePage={PostConfirmationPageRoute}>
            <PostConfirmPageWrapperStyled>
                <PostConfirmPageImageStyled src='/success.png' />
                <PostConfirmPageAdPlacedTextStyled>Ad Placed</PostConfirmPageAdPlacedTextStyled>
                <PostConfirmPageSuccessTextStyled>
                    Your ad has been Successfully placed,
                    Our logistic team will contact with you soon.
                    For any help, call  
                    <PostConfirmPageSuccessPhoneNumberTextStyled> 
                        (+251) 12345678
                    </PostConfirmPageSuccessPhoneNumberTextStyled>
                </PostConfirmPageSuccessTextStyled>
                <PostConfirmPageSuccessBackToHomeButtonStyled onClick={() => history.push(HomePageRoute)}>
                    Back To Products List
                </PostConfirmPageSuccessBackToHomeButtonStyled>
            </PostConfirmPageWrapperStyled>
        </MasterComponent>
    )
};

export default PostConfirmationPage;
export const PostConfirmationPageRoute = "/postConfirm";