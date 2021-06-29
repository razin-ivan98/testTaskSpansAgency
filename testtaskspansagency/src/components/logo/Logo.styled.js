import styled from "styled-components";
import * as sizes from "../../consts/screenSizes";

export const LogoWrapper = styled.div`
  height: 20px;
  flex: 1;
  @media (min-width: ${sizes.l}px) {
    height: ${32}px;
    flex: 0;
  }
`;
export const LogoImgWrapper = styled.img`
  height: 20px;

  @media (min-width: ${sizes.l}px) {
    height: ${32}px;
  }
`;
