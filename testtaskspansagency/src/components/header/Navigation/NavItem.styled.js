import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const NavItemWrapper = styled.div`
  display: block;

  text-decoration: none;
  @media (min-width: ${sizes.l}px) {
    & + & {
      margin-left: 20px;
    }
  }
`;
