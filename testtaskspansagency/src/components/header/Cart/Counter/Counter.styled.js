import styled from "styled-components";

import * as sizes from "../../../../consts/screenSizes";

export const CounterWrapper = styled.div`
  box-sizing: border-box;

  text-align: center;

  position: absolute;
  bottom: 0;
  right: 0;

  background-color: #86e3ce;
  color: white;

  border-radius: 8px;
  border: 1px solid white;
  width: 16px;
  height: 16px;
  font-size: 12px;

  @media (min-width: ${sizes.l}px) {
    border-radius: 10px;
    border: 2px solid white;
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;
