import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/colors";

const AdvertisementSideBarWrapperStyled = styled.div<{ marginTop: number }>`
  width: 25%;
  background: white;
  margin-top: ${(props) => props.marginTop};
`;

const AdvertisementSideBarItemStyled = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  margin: 25px auto;
  background: ${PRIMARY_COLOR};
`;

export { AdvertisementSideBarWrapperStyled, AdvertisementSideBarItemStyled };
