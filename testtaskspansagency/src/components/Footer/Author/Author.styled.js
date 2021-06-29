import styled from "styled-components";

import * as sizes from "../../../consts/screenSizes";

export const AuthorWrapper = styled.div`
  font-size: 12px;

  @media (min-width: ${sizes.l}px) {
    grid-column-start: 3;
    grid-row-start: 6;
    font-size: 18px;
    margin-top: 20px;
    text-align: right;
  }
`;
