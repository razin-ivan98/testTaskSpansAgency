import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const NavigationWrapper = styled.nav`
  flex: 0 20px;
  margin-left: 16px;

  @media (min-width: ${sizes.l}px) {
    flex: 2;
    margin-right: 16px;
  }
`;
