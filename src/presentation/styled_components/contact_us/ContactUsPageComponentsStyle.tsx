import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../constants/colors";

const ContactUsWrapperStyled = styled.div`
  width: 60%;
  margin: 25px auto;
  padding-block: 20px;
  background: white;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContactUsLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;


const ContactUsEmailAndCallWrapperStyled = styled.div`
  display: flex;
  margin: 25px auto;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ContactUsEmailAndCallItemStyled = styled.div`
  width: 49%;
  border-radius: 10px;
  padding: 15px;
  border: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;


const ContactUsEmailAndCallItemTitleStyled = styled.div`
  font-size: 20px;
  color: black;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;


const ContactUsEmailAndCallItemValueStyled = styled.div`
  font-size: 18px;
  color: gray;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;


const ContactUsAboutWrapperStyled = styled.div`
  display: flex;
  margin: 25px auto;
  flex-direction: column;
  gap: 12px;
  width: 90%;
  text-align: center;
  border: 2px solid lightgray;
  padding: 15px;
`;

const ContactUsAboutTitleStyled = styled.div`
  font-size: 25px;
  color: black;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ContactUsAboutValueStyled = styled.div`
  font-size: 18px;
  color: gray;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ContactUsAddressWrapperStyled = styled.div`
    display: flex;
    margin: 25px auto;
    flex-direction: column;
    gap: 12px;
    width: 90%;
    border: 2px solid lightgray;
    padding: 15px;
`;

const ContactUsAddressLabelStyled = styled.div`
  font-size: 25px;
  text-align: center;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ContactUsAddressKeyValueWrapperStyled = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
`;

const ContactUsAddressKeyStyled = styled.div`
  font-size: 20px;
  color: gray;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ContactUsAddressValueStyled = styled.div`
  font-size: 16px;
  color: gray;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;


export {
    ContactUsWrapperStyled,
    ContactUsLabelStyled,
    ContactUsEmailAndCallWrapperStyled,
    ContactUsEmailAndCallItemStyled,
    ContactUsEmailAndCallItemTitleStyled,
    ContactUsEmailAndCallItemValueStyled,
    ContactUsAboutWrapperStyled,
    ContactUsAboutTitleStyled,
    ContactUsAboutValueStyled,
    ContactUsAddressWrapperStyled,
    ContactUsAddressLabelStyled,
    ContactUsAddressKeyValueWrapperStyled,
    ContactUsAddressKeyStyled,
    ContactUsAddressValueStyled
};