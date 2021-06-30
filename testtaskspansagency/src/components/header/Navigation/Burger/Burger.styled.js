import styled from "styled-components";

import * as sizes from "../../../../consts/screenSizes";

export const BurgerWrapper = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  position: relative;

  @media (min-width: ${sizes.l}px) {
    display: none;
  }
`;

export const SpanWrapper = styled.span`
  display: block;
  position: absolute;
  width: 20px;
  height: 4px;
  background-color: #5a60e7;
  border-radius: 2px;
  top: 8px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: #5a60e7;
    border-radius: 2px;
    top: -8px;
  }

  &::after {
    content: "";
    transition: linear width 0.3s;

    display: block;
    position: absolute;
    width: ${(props) => (props.checked ? "10px" : "20px")};
    height: 4px;
    background-color: #5a60e7;
    border-radius: 2px;
    top: 8px;
  }
`;
