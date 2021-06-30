import styled from "styled-components";

import * as sizes from "../../../../consts/screenSizes";
import * as colors from "../../../../consts/colors";

export const NavBarWrapper = styled.div`
  position: fixed;
  right: ${(props) => (props.checked ? "0" : "-300px")};
  top: 60px;
  transition: linear right 0.3s;

  text-align: right;
  width: 200px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 5px ${colors.darkGray};

  background-color: #faf9f9;

  @media (min-width: ${sizes.l}px) {
    padding: 0;

    position: static;
    right: 0;
    top: 0;
    width: unset;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: unset;
  }
`;
