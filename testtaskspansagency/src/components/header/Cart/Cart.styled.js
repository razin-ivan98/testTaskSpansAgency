import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const CartImageWrapper = styled.img`
  height: 20px;

  @media (min-width: ${sizes.l}px) {
    height: 32px;
  }
`;

export const CartWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 20px;
  width: 20px;
  flex: 0 20px;

  @media (min-width: ${sizes.l}px) {
    height: 32px;
    width: 32px;
    order: 3;
    flex: 0 32px;
  }
`;
