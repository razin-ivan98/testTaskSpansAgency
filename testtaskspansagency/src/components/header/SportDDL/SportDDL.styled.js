import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const ItemImgWrapper = styled.img`
  width: 24px;
  height: 24px;
`;
export const SportDDLWrapper = styled.div`
  display: none;
  @media (min-width: ${sizes.l}px) {
    display: block;
  }
`;
