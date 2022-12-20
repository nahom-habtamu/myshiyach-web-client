import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const AdvertisementSideBarWrapperStyled = styled.div<{ marginTop: number }>`
  width: 30%;
  margin-top: ${(props) => props.marginTop};

  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const AdvertisementSideBarItemStyled = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  margin: 25px auto;
  background: ${PRIMARY_COLOR};
`;

export { AdvertisementSideBarWrapperStyled, AdvertisementSideBarItemStyled };
