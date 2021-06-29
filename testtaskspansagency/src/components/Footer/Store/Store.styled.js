import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const StoreWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-bottom: 20px;
  grid-column-start: 1;
  grid-row-start: 2;
  @media (min-width: ${sizes.l}px) {
    margin: 0;
  }
`;
export const StoreItemWrapper = styled.a`
  display: block;
  height: 30px;
  & + & {
    margin-left: 10px;
  }
  @media (min-width: ${sizes.l}px) {
    height: 40px;
  }
`;
export const StoreItemImgWrapper = styled.img`
  height: 30px;
  @media (min-width: ${sizes.l}px) {
    height: 40px;
  }
`;
