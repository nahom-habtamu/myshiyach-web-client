import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../constants/colors";

const SettingWrapperStyled = styled.div`
  width: 85%;
  padding: 25px;
  min-height: 400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const SettingTabsWrapperStyled = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 95%;
    flex-direction: column;
    margin: 20px auto;
  }
`;

const SettingTabStyled = styled.div`
  width: 45%;
  border-top: 1px solid grey;
  padding-top: 15px;

  @media (max-width: 1200px) {
    width: 55%;
  }

  @media (max-width: 800px) {
    width: 65%;
  }

  @media (max-width: 500px) {
    width: 85%;
  }
`;

const SettingTabHeaderStyled = styled.div`
  font-size: 22px;
  color: grey;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const SettingTabItemWrapperStyled = styled.div`
  display: flex;
  gap: 15px;
  margin: 25px 10px;

  :hover {
    background: ${LIGHT_GRAY_COLOR};
  }
`;

const SettingTabItemIconWrapperStyled = styled.div`
  padding: 10px 0px;
  color: grey;
`;

const SettingTabItemKeyValueWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SettingTabItemKeyStyled = styled.div`
  font-size: 18px;
  color: black;
  font-weight: 700;
  line-height: 24px;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SettingTabItemValueStyled = styled.div`
  font-size: 14px;
  color: grey;
  font-weight: 500;
  line-height: 18.23px;

  @media (max-width: 1200px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export {
  SettingWrapperStyled,
  SettingTabsWrapperStyled,
  SettingTabStyled,
  SettingTabHeaderStyled,
  SettingTabItemWrapperStyled,
  SettingTabItemIconWrapperStyled,
  SettingTabItemKeyValueWrapperStyled,
  SettingTabItemKeyStyled,
  SettingTabItemValueStyled,
};
