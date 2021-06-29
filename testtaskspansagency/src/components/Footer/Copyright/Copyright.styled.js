import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const CopytightWrapper = styled.div`
  font-size: 12px;
  margin-top: 20px;

  @media (min-width: ${sizes.l}px) {
    grid-column-start: 1;
    grid-row-start: 6;
    font-size: 18px;
    text-align: left;
  }
`;
