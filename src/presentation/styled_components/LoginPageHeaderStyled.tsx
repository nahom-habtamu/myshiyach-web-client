import styled from "styled-components";

const LoginPageHeaderOneStyled = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 15px;

  @media (max-width: 800px) {
    font-size: 40px;
    margin-top: 70px;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 5px;
  }
`;

const LoginPageHeaderTwoStyled = styled.div`
  text-align: center;
  font-size: 23px;
  color: grey;
  margin-bottom: 55px;

  @media (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 45px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 35px;
  }
`;

export { LoginPageHeaderOneStyled, LoginPageHeaderTwoStyled };
