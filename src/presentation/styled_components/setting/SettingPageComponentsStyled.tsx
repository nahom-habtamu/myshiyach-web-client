import styled from "styled-components";

const SettingWrapperStyled = styled.div`
  width: 60%;
  height: 100%;
  margin: 25px auto;
  background: white;
`;

const SettingTabsWrapperStyled = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;

const SettingTabStyled = styled.div`
  width: 45%;
  border-top: 1px solid grey;
  padding-top: 15px;
`;

const SettingTabHeaderStyled = styled.div`
  font-size: 22px;
  color: grey;
`;

const SettingTabItemWrapperStyled = styled.div`
  display: flex;
  gap: 15px;
  margin: 25px 10px;
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
`;

const SettingTabItemValueStyled = styled.div`
  font-size: 14px;
  color: grey;
  font-weight: 500;
  line-height: 18.23px;
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
