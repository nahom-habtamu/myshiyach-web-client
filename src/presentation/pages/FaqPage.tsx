import MasterComponent from "../components/common/MasterComponent";
import {
    FaqItemAnswerStyled,
    FaqItemListWrapperStyled,
    FaqItemQuestionStyled,
    FaqItemWrapperStyled,
    FaqLabelStyled,
    FaqPageWrapperStyled
} from "../styled_components/faq/FaqPageComponentStyled";

type Faq = {
    question: string,
    answer: string
}

const FaqPage = () => {

    const dummyFaqList: Faq[] = [
        {
            question: "Maintaining a balance of delivering information ?",
            answer: "Maintaining a balance of delivering information that needs to be legally sound and being unmistakable Greggs is an achievement."
        },
        {
            question: "Where should FAQ's need to be placed",
            answer: "FAQs should never be an afterthought. They are central to the customer experience and an extension of the brand."
        },
        {
            question: "Who is IKEA",
            answer: "The Swedish giant who has taught the world how to construct their own furniture is no stranger to making the user do all the heavy lifting."
        },
        {
            question: "What is the purpose of Greeko",
            answer: "Greggs has built a strong brand that uses no-frills language with a lot of personality to connect with their audience. They consistently employ their tone of voice across all communications including their FAQ."
        },
        {
            question: "Maintaining a balance of delivering information ?",
            answer: "Maintaining a balance of delivering information that needs to be legally sound and being unmistakable Greggs is an achievement."
        },
        {
            question: "Where should FAQ's need to be placed",
            answer: "FAQs should never be an afterthought. They are central to the customer experience and an extension of the brand."
        },
        {
            question: "Who is IKEA",
            answer: "The Swedish giant who has taught the world how to construct their own furniture is no stranger to making the user do all the heavy lifting."
        },
        {
            question: "What is the purpose of Greeko",
            answer: "Greggs has built a strong brand that uses no-frills language with a lot of personality to connect with their audience. They consistently employ their tone of voice across all communications including their FAQ."
        },
    ]

    const renderSingleFaq = (faq: Faq) => {
        return <FaqItemWrapperStyled key={faq.question + faq.answer}>
            <FaqItemQuestionStyled>{faq.question}</FaqItemQuestionStyled>
            <FaqItemAnswerStyled>{faq.answer}</FaqItemAnswerStyled>
        </FaqItemWrapperStyled>;
    }

    return <MasterComponent activePage={FaqPageRoute} hideSearchBar={true}>
        <FaqPageWrapperStyled>
            <FaqLabelStyled>Frequently Asked Questions</FaqLabelStyled>
            <FaqItemListWrapperStyled>
                {
                    dummyFaqList.map(faq => renderSingleFaq(faq))
                }
            </FaqItemListWrapperStyled>
        </FaqPageWrapperStyled>
    </MasterComponent>
}

export default FaqPage;
export const FaqPageRoute = "/faqPage";
