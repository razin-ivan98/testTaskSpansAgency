import styled from "styled-components";

import * as colors from "../../../../consts/colors";

export const DDLHeaderWpapper = styled.div`
  ${({ variant }) =>
    variant === "light" ? `background-color: ${colors.white}` : ""};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const DDLArrowWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;

  margin-left: 10px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-color: ${colors.dark};
    width: 9px;
    height: 1px;
    top: 10px;

    transform: rotate(${(props) => (props.dropped ? "-45deg" : "45deg")});
    transition: linear transform 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    background-color: ${colors.dark};
    width: 9px;
    height: 1px;
    top: 10px;
    left: 6px;

    transform: rotate(${(props) => (props.dropped ? "45deg" : "-45deg")});
    transition: linear transform 0.3s;
  }
`;
