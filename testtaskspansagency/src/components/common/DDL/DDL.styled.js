import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const DDLWrapper = styled.div`
  flex: 1;
  display: none;
  position: relative;

  @media (min-width: ${sizes.l}px) {
    display: block;
  }
`;
