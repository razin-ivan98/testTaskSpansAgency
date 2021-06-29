import styled from "styled-components";

import * as sizes from "../../../../consts/screenSizes";

export const NavBarWrapper = styled.div`
  position: fixed;
  left: ${(props) => (props.checked ? "0" : "100vw")};
  display: ${(props) => (props.checked ? "block" : "none")};
  top: 40px;
  transition: linear left 0.3s;

  text-align: right;
  width: 100vw;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;

  background-color: white;

  @media (min-width: ${sizes.l}px) {
    position: static;
    left: 0;
    top: 0;
    width: unset;
    flex-direction: row;
  }
`;
