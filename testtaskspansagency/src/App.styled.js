import styled from "styled-components";
import * as sizes from "./consts/screenSizes";

export const AppWrapper = styled.div`
  margin: 0 auto;

  @media (min-width: ${sizes.l}px) {
    max-width: ${sizes.l}px;
  }
  @media (min-width: ${sizes.ll}px) {
    max-width: ${sizes.ll}px;
  }
`;
