import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const SocialsWrapper = styled.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (min-width: ${sizes.l}px) {
    grid-column-start: 2;
    grid-row-start: 6;
  }
`;
export const SocialsItemWrapper = styled.a`
  display: block;
  width: 20px;
  height: 20px;
  & + & {
    margin-left: 10px;
  }
  @media (min-width: ${sizes.l}px) {
    width: 25px;
    height: 25px;
  }
`;
export const SocialsItemImgWrapper = styled.img`
  width: 20px;
  height: 20px;
  @media (min-width: ${sizes.l}px) {
    width: 25px;
    height: 25px;
  }
`;
